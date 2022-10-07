// lib
import type { NextPage } from "next"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Dialog from "@mui/material/Dialog"

// components
import CommonButton from "src/components/Common/CommonButton"

// hooks
import { useSoundPlay, useTimer, useKeyEvent } from "src/hooks"
import {
  useRouterRecoil,
  useLoadingRecoil,
  useReloadRecoil,
  useUserRecoil,
} from "src/hooks/useRecoil"
import { useSwr, useLoadAndAuth } from "src/hooks"

// utils
import { EP } from "src/fetch/fetcher"

/**
 * WD002_ゲームプレイ画面
 */

const GamePage: NextPage = () => {
  const router = useRouter()
  const { user } = useUserRecoil()

  const [questionIndex, setQuestionIndex] = useState(0)
  const [currentAnswers, setCurrentAnswers] = useState<string[]>([])
  const [missTap, setMissTap] = useState(0)
  const [skip, setSkip] = useState(0)
  const [isOpen, setOpen] = useState(true)
  const [effect, setEffect] = useState(false)
  const [ansCondition, setCondition] = useState<"correct" | "wrong" | "skip" | "none">("none")
  const [questionArray, setQuestions] = useState<any[]>([])

  const { wrongPlay, correctPlay, skipPlay, pressPlay } = useSoundPlay()
  const { params, setParams } = useRouterRecoil()
  const { setLoading } = useLoadingRecoil()
  const { setNav } = useReloadRecoil()
  const { changeKey } = useKeyEvent()
  const { duration, startTimer } = useTimer()

  const { data, error } = useSwr<any>(user && EP.bestScore(params?.game?.id))
  useLoadAndAuth({ isLoading: !data && !error, error: user, isAuthApi: true })

  const centimes = Math.floor(duration.milliseconds() / 100)

  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const escFunction = (event: any) => {
    const key = changeKey(event)
    if (isOpen) {
      if (event.key === " ") {
        setOpen(false)
        startTimer()
      }
    } else {
      if (event.key === "Backspace") {
        setCurrentAnswers([])
      } else if (event.key === "Escape") {
        sendAnswer()
      } else if (!effect) {
        pressPlay()
        questionIndex < 10 && setCurrentAnswers([...currentAnswers, key.toLowerCase()])
      }
    }
  }

  const wrongAnswer = () => {
    wrongPlay()
    setMissTap(missTap + 1)
    setCondition("wrong")
    setCurrentAnswers([])
  }

  const nextQuestion = (condition: "skip" | "correct") => {
    setEffect(true)
    setCurrentAnswers([])
    if (questionIndex !== 9) {
      setTimeout(() => {
        setEffect(false)
        setQuestionIndex(questionIndex + 1)
      }, 400)
    } else {
      setQuestionIndex(questionIndex + 1)
      setLoading(true)
      clearInterval()
      const scores = {
        missTap: missTap,
        time: duration.seconds() + duration.minutes() * 60,
        centimes: centimes,
        skip: condition === "skip" ? skip + 1 : skip,
      }
      setParams({ score: scores, game: params.game, bestScore: data?.bestScore })
      setNav(true)
      router.push({ pathname: `${router.asPath}/score` })
    }
  }

  const sendAnswer = () => {
    let answerArray = params.game && questionIndex < 10 && [...questionArray[questionIndex].answer]
    const isCorrect = answerArray && answerArray.sort().join() === currentAnswers.sort().join()

    if (isCorrect) {
      setCondition("correct")
      correctPlay()
      nextQuestion("correct")
    } else {
      wrongAnswer()
    }
  }

  const skipAnswer = () => {
    skipPlay()
    setSkip(skip + 1)
    setCondition("skip")
    nextQuestion("skip")
  }

  useEffect(() => {
    questionArray.length === 0 && setQuestions(shuffle(params.game?.questions))
  }, [])

  useEffect(() => {
    ansCondition !== "none" &&
      setTimeout(() => {
        setCondition("none")
      }, 500)
  }, [ansCondition])

  useEffect(() => {
    currentAnswers[0] === "space" &&
      currentAnswers[1] === "space" &&
      currentAnswers[2] === "space" &&
      skipAnswer()
  }, [currentAnswers])

  const handleBeforeUnloadEvent = (event: BeforeUnloadEvent): void => {
    event.returnValue = ""
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false)
    window.addEventListener("beforeunload", handleBeforeUnloadEvent)

    return () => {
      document.removeEventListener("keydown", escFunction, false)
      window.removeEventListener("beforeunload", handleBeforeUnloadEvent)
    }
  }, [escFunction])

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-white flex items-center justify-around relative rounded-md shadow-sm  mb-5 w-full">
        <div className="bg-white flex items-center absolute top-[-25px] left-[-10px] rounded-lg py-2 px-4 shadow-md">
          <img src={params?.game.icon} className="w-10" />
          <p className="font-bold text-xl ml-3">{params?.game.name}</p>
        </div>
        <div className="w-full flex flex-col p-10 items-center">
          <div className="flex w-full justify-around mb-5">
            <div className="flex items-baseline">
              <p>タイム</p>
              <div className="font-bold text-2xl ml-3 flex">
                {duration.minutes() < 0 ? (
                  <div className="flex w-16">
                    <p>0.0</p>
                    <p className="font-normal ml-2">s</p>
                  </div>
                ) : (
                  <div className="flex w-16">
                    <p>{duration.seconds() + duration.minutes() * 60}.</p>
                    <p>{centimes}</p>
                    <p className="font-normal ml-2">s</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-baseline">
              <p>問題</p>
              <p className="font-bold text-2xl mx-3">
                {questionIndex !== 10 ? questionIndex + 1 : 10} / 10
              </p>
              <p>問</p>
            </div>
          </div>
          <div className="flex w-full justify-around">
            <div className="flex items-baseline">
              <p className="text-[#888]">スキップ</p>
              <p className="font-bold text-2xl mx-3 text-[#555]">{skip}</p>
              <p className="text-[#888]">回</p>
            </div>
            <div className="flex items-baseline text-[#888]">
              <p className="text-[#888]">ミスタップ</p>
              <p className="font-bold text-2xl mx-3 text-[#555]">{missTap}</p>
              <p>回</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm w-full rounded-md flex items-center justify-center flex-col p-5 mb-5">
        <p className="font-bold text-xl mb-4">問題</p>
        <p className={`text-xl ${effect && "animate-animation"}`}>
          {!isOpen ? questionIndex !== 10 && questionArray[questionIndex].content : "　"}
        </p>
      </div>

      <div className="bg-white shadow-sm w-full rounded-md flex items-center justify-center flex-col p-5 relative">
        <p className="font-bold text-xl mb-4">回答</p>
        <p className="absolute top-5 font-bold text-[90px] text-[#25984C]">
          {ansCondition === "correct" && "○"}
        </p>
        <p className="absolute top-3 font-bold text-[100px] text-[#AE2E5C]">
          {ansCondition === "wrong" && "×"}
        </p>
        <p className="absolute top-14 font-bold text-4xl text-orange-400 ">
          {ansCondition === "skip" && "Skip!"}
        </p>
        <div className="flex justify-center w-full items-center">
          {effect ? (
            <p className="text-xl">　</p>
          ) : currentAnswers.length > 0 ? (
            currentAnswers.map((currentAnswer, i) => (
              <p className="text-xl mx-1" key={i}>
                {currentAnswer}
              </p>
            ))
          ) : (
            <p className="text-xl mx-1 text-[#888]">キー入力してください</p>
          )}
        </div>
      </div>
      <div className="w-full flex items-center justify-around my-8 font-bold">
        <p className="w-1/3 text-center">Backspaceで回答リセット</p>
        <p className="w-1/3 text-center">Space3回のみ入力で問題スキップ</p>
        <p className="w-1/3 text-center">Escで回答送信</p>
      </div>
      <CommonButton type="back" />

      <Dialog open={isOpen}>
        <div className="flex flex-col py-4 px-10 items-center justify-center font-semibold m-10 bg-white">
          <p className="font-bold text-2xl">ゲームプレイ</p>
          {params?.game.hasOwnProperty("bestScore") && (
            <div className="flex my-5 items-baseline ">
              <p>ベストスコア</p>
              <p className="ml-3 text-2xl font-bold">
                {data ? data.bestScore.toLocaleString() : params?.game.bestScore?.toLocaleString()}
              </p>
            </div>
          )}
          <p>Spaceキー押下でスタートします。</p>
          <p className="text-lg text-center mt-6">
            ※ブラウザ特有のショートカットが実行される場合があるため回答は1キーずつ入力してください。
          </p>

          {params?.game.hasOwnProperty("bestScore") ? (
            <div className="flex w-[450px] justify-between mt-10">
              <CommonButton type="back" />
              <CommonButton
                type="contained"
                text="ランキング確認"
                onClick={() => router.push(`/apps/${router.query?.id}/ranking`)}
              />
            </div>
          ) : (
            <div className="flex w-[450px] mt-10 justify-center">
              <CommonButton type="back" />
            </div>
          )}
        </div>
      </Dialog>
    </div>
  )
}

export default GamePage
