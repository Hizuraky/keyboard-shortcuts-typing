// lib
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { BsFillArrowDownLeftSquareFill } from "react-icons/bs"
import { BsFillArrowDownRightSquareFill } from "react-icons/bs"
import { BsFillArrowDownSquareFill } from "react-icons/bs"

// components
import CommonButton from "src/components/Common/CommonButton"

// hooks
import { useSwr } from "src/hooks"

// utils
import { EP } from "src/fetch/fetcher"
import Top from "src/assets/top.png"
import Play from "src/assets/play.jpeg"
import Correct from "src/assets/correct.jpeg"
import Wrong from "src/assets/wrong.jpeg"
import Skip from "src/assets/skip.jpeg"
import Start from "src/assets/start.jpeg"
import Score from "src/assets/score.png"

/**
 * WD015_チュートリアル画面
 */

const TutorialPage: NextPage = () => {
  const router = useRouter()
  const { data, error } = useSwr<any[]>(EP.titles())

  const Bold = ({ children }: { children: React.ReactNode }) => (
    <p className="font-bold">{children}</p>
  )
  const Arrow = () => (
    <div className="my-5">
      <BsFillArrowDownSquareFill size={50} color="#1C73BD" />
    </div>
  )

  const TitleImages = ({ condition }: any) => (
    <div className="w-full flex my-1 items-center justify-between">
      {data?.map((title: any, i: number) => {
        const borderColor =
          title.name.indexOf("Master") > -1 ? "border-[#d6c25b]" : "border-gray-300"
        return (
          condition(i) && (
            <img
              src={title.url}
              className={`w-[24%] rounded-md shadow-md border-2 border-solid ${borderColor}`}
            />
          )
        )
      })}
    </div>
  )

  const Content = ({ i, src, children }: { i: number; src: string; children: any }) => (
    <div className="flex bg-[rgba(255,255,255,0.6)] rounded-md relative justify-center h-full items-center">
      <div className="text-white bg-[#1C73BD] p-4 flex items-center justify-center absolute p rounded-full left-[-10px] top-[-10px] w-8 h-8">
        {i}
      </div>
      <div className="w-[40%] p-5">{children}</div>
      <div className="p-2 bg-[#fff] rounded-md shadow-sm w-8/12">
        <img src={src} className="w-full" />
      </div>
    </div>
  )

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <h2 className="mb-5">ks typingプレイ方法</h2>

      <Content i={1} src={Top.src}>
        <Bold>「トップページのゲームプレイボタン」</Bold>
        <p className="ml-10">or</p>
        <Bold>「ゲームタブ」</Bold>
        <p className="ml-3">をクリックし、プレイするアプリを選択！</p>
      </Content>
      <Arrow />

      <Content i={2} src={Start.src}>
        <p>右の画面の状態でSpaceをタイプするとゲームスタート！</p>
        <p className="w-full text-center mt-5 text-lg font-bold">※注意事項</p>
        <Bold>ゲーム中の回答は1キーずつ入力してください</Bold>
        <p>
          ⌘w / ⌘t /⌘h
          などを同時タイプすると、ブラウザやOSのショートカット機能が処理され他画面が表示される場合があります。
        </p>
      </Content>
      <Arrow />

      <Content i={3} src={Play.src}>
        <p>ゲームはスキップと正解の回数が合わせて10問に到達するとクリア！</p>
        <p className="w-full text-center mt-5 text-md font-bold mb-2">ゲーム中の操作</p>
        <ul>
          <li>Escで回答を送信</li>
          <li>BackSpaceで回答をリセット</li>
          <li>Spaceのみ3回タイプで問題スキップ</li>
        </ul>
      </Content>

      <div className="flex">
        <div className="flex my-10 flex-col items-center mx-20">
          正解！
          <BsFillArrowDownLeftSquareFill size={50} color="#1C73BD" />
        </div>
        <div className="flex my-10 flex-col items-center mx-20">
          不正解
          <BsFillArrowDownSquareFill size={50} color="#1C73BD" />
        </div>
        <div className="flex my-10 flex-col items-center mx-20">
          スキップ
          <BsFillArrowDownRightSquareFill size={50} color="#1C73BD" />
        </div>
      </div>

      <div className="flex">
        <div className="p-2 bg-[#fff] rounded-md shadow-sm mx-3 w-3/5">
          <img src={Correct.src} className="w-full" />
        </div>
        <div className="p-2 bg-[#fff] rounded-md shadow-sm mx-3 w-3/5">
          <img src={Wrong.src} className="w-full" />
        </div>
        <div className="p-2 bg-[#fff] rounded-md shadow-sm mx-3 w-3/5">
          <img src={Skip.src} className="w-full" />
        </div>
      </div>

      <div className="flex">
        <div className="flex my-10 flex-col items-center mx-20">
          <BsFillArrowDownRightSquareFill size={50} color="#1C73BD" />
        </div>
        <div className="flex my-10 flex-col items-center mx-20">
          <BsFillArrowDownLeftSquareFill size={50} color="#1C73BD" />
        </div>
      </div>

      <Content i={4} src={Score.src}>
        <p>ゲームはスキップと正解の回数が合わせて10問に到達するとクリア！</p>
        <p className="mt-4">
          スコア画面ではタイム・スキップ回数・ミスタップ回数に基づいてスコアが算出されます。
        </p>
        <p>会員登録することでプレイヤーレベル機能・ランキング機能を使用できます。</p>
      </Content>

      <div className="flex my-10">
        <div className="flex flex-col px-5 py-6 bg-[rgba(255,255,255,0.6)] rounded-md relative">
          <p className="mb-3">
            ランキングは毎週月曜日AM4:00にリセットされます。
            <br />
            リセット時に上位10名にランクインしていたユーザーは入賞履歴が更新され、称号を獲得できます。
            <br />
            特定の条件を満たすと以下の各称号を獲得でき、プロフィールで設定できます。
          </p>
          <TitleImages condition={(i: number) => i < 4} />
          <TitleImages condition={(i: number) => i > 3 && i < 8} />
          <TitleImages condition={(i: number) => i > 7 && i < 12} />
          <TitleImages condition={(i: number) => i > 11 && i < 16} />
          <TitleImages condition={(i: number) => i > 15} />
        </div>
      </div>

      <div className="w-full flex justify-around">
        <CommonButton type="back" />
        <CommonButton
          text="ゲームプレイ"
          onClick={() => {
            router.push("/apps")
          }}
        />
      </div>
    </div>
  )
}

export default TutorialPage
