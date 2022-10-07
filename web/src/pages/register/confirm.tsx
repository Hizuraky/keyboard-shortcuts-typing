// lib
import type { NextPage } from "next"
import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import toast, { Toaster } from "react-hot-toast"
import { MdArrowBackIosNew } from "react-icons/Md"
import Dialog from "@mui/material/Dialog"

// components
import Input from "src/components/ConfirmInput"
import CommonButton from "src/components/Common/CommonButton"

// hooks
import { useAuth } from "src/hooks/useAuth"
import { useRouterRecoil, useUserRecoil, useLoadingRecoil } from "src/hooks/useRecoil"

// utils
import { EP, fetcherPost } from "src/fetch/fetcher"
import { RegisterType } from "src/fetch/json/index"

/**
 * WD008_登録確認画面
 */

const RegisterConfirmPage: NextPage = () => {
  const router = useRouter()
  const { params } = useRouterRecoil()
  const { setUser } = useUserRecoil()
  const { setLoading } = useLoadingRecoil()
  const { login } = useAuth()

  const [isOpen, setOpen] = useState(false)
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""])
  const [inputIndex, setIndex] = useState(0)
  const [codeErr, setErr] = useState<string | undefined>()
  const [sendNum, setSendNum] = useState(0)

  const onClickRegister = async () => {
    let joinCode = ""
    code.map((v) => (joinCode += v))
    const { data, err } = await fetcherPost<RegisterType>(EP.register(), {
      name: params?.name,
      email: params?.email,
      password: params?.password,
      code: joinCode,
    })

    if (err) {
      toast.error(err.data.message)
    } else {
      login({ email: params?.email, password: params?.password })
      setUser({
        id: data!.id,
        name: params?.name,
        icon: "",
        email: params?.email,
        level: 1,
        level_point: 0,
        play_time: 0,
        clear_times: 0,
        title: {
          id: 19,
          name: "ks typing player",
          url: "https://ks-icons.s3.ap-northeast-1.amazonaws.com/ksp.png",
        },
      })

      toast.success("会員登録が完了しました")
      router.push("/register/complete")
    }
  }

  const onClickSendMail = async () => {
    setLoading(true)
    const { err } = await fetcherPost(EP.auth(), { email: params?.email })
    setLoading(false)

    if (err) {
      toast.error(err.data.message)
    } else {
      setOpen(true)
      setSendNum(sendNum + 1)
    }
  }

  useEffect(() => {
    let joinCode = ""
    code.map((str) => {
      joinCode = joinCode + str
      str === "" && setErr("認証コードは6桁の半角数字で入力してください")
    })
    const numJoinCode = Number(joinCode)
    !isNaN(numJoinCode) && joinCode.length === 6 && setErr(undefined)
  }, [code])

  const inputRef: any = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]

  const escFunction = (event: any) => {
    const permitKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace"]
    const focusNext = () => {
      if (inputIndex < 5) {
        inputRef[inputIndex + 1].current.focus()
        setIndex(inputIndex + 1)
      }
    }
    const focusBack = () => {
      if (inputIndex > 0) {
        inputRef[inputIndex - 1].current.focus()
        setIndex(inputIndex - 1)
      }
    }

    if (permitKeys.includes(event.key)) {
      const codeArray =
        event.key !== "Backspace"
          ? [
              inputIndex !== 0 ? code[0] : event.key,
              inputIndex !== 1 ? code[1] : event.key,
              inputIndex !== 2 ? code[2] : event.key,
              inputIndex !== 3 ? code[3] : event.key,
              inputIndex !== 4 ? code[4] : event.key,
              inputIndex !== 5 ? code[5] : event.key,
            ]
          : [
              inputIndex === 0 ? "" : inputIndex === 1 && !code[1] ? "" : code[0],
              inputIndex === 1 ? "" : inputIndex === 2 && !code[2] ? "" : code[1],
              inputIndex === 2 ? "" : inputIndex === 3 && !code[3] ? "" : code[2],
              inputIndex === 3 ? "" : inputIndex === 4 && !code[4] ? "" : code[3],
              inputIndex === 4 ? "" : inputIndex === 5 && !code[5] ? "" : code[4],
              inputIndex === 5 ? "" : code[5],
            ]
      setCode([...codeArray])
      event.key !== "Backspace" ? focusNext() : !code[inputIndex] && focusBack()
    }
    event.key === "ArrowLeft" && focusBack()
    event.key === "ArrowRight" && focusNext()
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false)
    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  }, [escFunction])

  return (
    <div>
      <form className="flex flex-col justify-center items-center w-full bg-white p-10 relative rounded-md">
        <div
          className="flex items-center absolute top-11 left-10 hover:text-[#888]"
          onClick={() => {
            router.push("/register/?edit=true")
          }}
        >
          <MdArrowBackIosNew />
          <p>登録内容の修正</p>
        </div>
        <h2 className="mb-5">登録確認</h2>
        <div className="w-4/5 my-5">
          <Input label="メールアドレス" value={params?.email} />
        </div>
        <div className="w-4/5 mb-5">
          <Input label="パスワード" value={params?.password} isPassword />
        </div>
        <div className="w-4/5 mb-10">
          <Input label="ユーザー名" value={params?.name} />
        </div>
        <p className="my-3">上記内容で登録します。よろしければメール送信ボタンを押下ください</p>
        <p className="mb-10">届いたメールに記載された6桁の認証コードを入力してください</p>

        <CommonButton
          onClick={onClickSendMail}
          text={sendNum > 0 ? "メール再送" : "メール送信"}
          type="outlined"
        />
        {sendNum > 1 && (
          <p className="mt-2">※メールを再送すると最新の認証コードのみが有効になります。</p>
        )}

        {sendNum > 0 && (
          <>
            <div className="w-3/5 flex items-center justify-around my-10">
              {[...Array(6)].map((_, i) => (
                <input
                  className="w-[12%] text-[50px] text-center h-[100px] border-0 bg-gray-100 rounded-md"
                  key={i}
                  value={code[i]}
                  type="tel"
                  ref={inputRef[i]}
                  onFocus={() => {
                    setIndex(i)
                  }}
                />
              ))}
            </div>
            <p className="mb-5 text-red-500">{codeErr}</p>
            <CommonButton onClick={onClickRegister} text="登録" disable={!codeErr ? false : true} />
          </>
        )}
      </form>
      <Dialog open={isOpen} onClose={() => setOpen(false)}>
        <div className="flex flex-col py-10 px-20 items-center justify-center font-semibold">
          <p className="font-bold text-xl mb-5">メールが送信されました</p>
          <p>メールが届かない場合</p>
          <div className="flex flex-col mt-3 mb-7 font-normal">
            <p className="mb-2">■ 迷惑メールフォルダに入っていないかご確認ください。</p>
            <p className="mb-2">
              ■ 「info@ks-typing.tk」からのメールを受け取れるように設定してください。
            </p>
            {sendNum > 1 && <p>※メールを再送すると最新の認証コードのみ有効になります。</p>}
          </div>
          <CommonButton onClick={() => setOpen(false)} text="閉じる" type="outlined" />
        </div>
      </Dialog>
      <Toaster position="bottom-center" />
    </div>
  )
}

export default RegisterConfirmPage
