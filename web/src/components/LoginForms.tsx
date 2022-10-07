// lib
import { VFC } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/router"
import toast, { Toaster } from "react-hot-toast"

// components
import Input from "src/components/Common/CommonInput"
import CommonButton from "src/components/Common/CommonButton"

// hooks
import { useUserRecoil } from "src/hooks/useRecoil"
import { useAuth } from "src/hooks/useAuth"

// utils
import { LoginSchema } from "src/schemas"
import { UserType } from "src/fetch/json"

/**
 * ログイン画面コンポーネント
 */

type InputType = {
  email: string
  password: string
}

type Props = {
  viewPage?: "boundary" | "loginPage"
}

const LoginForms: VFC<Props> = ({ viewPage }) => {
  const router = useRouter()
  const { setUser } = useUserRecoil()
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({
    resolver: yupResolver(LoginSchema),
  })

  const onClickLogin: SubmitHandler<InputType> = async (Inputs) => {
    const callback = async (props: UserType) => {
      await setUser({ ...props })
      toast.success("ログインしました。")
      viewPage === "loginPage" && router.push("/user")
    }

    login({ email: Inputs.email, password: Inputs.password, callback: callback })
  }

  return (
    <div>
      <form className="flex flex-col justify-center items-center w-full bg-white p-10">
        {viewPage === "boundary" && (
          <div className="flex flex-col items-center justify-center mt-10">
            <p className="text-red-500">ログイン期限が切れました。再度ログインしてください。</p>
          </div>
        )}
        <h2>ログイン</h2>
        <div className="w-4/5 my-5">
          <Input register={register} errors={errors} schema="email" label="メールアドレス" />
        </div>
        <div className="w-4/5 mb-10">
          <Input register={register} errors={errors} schema="password" label="パスワード" />
        </div>
        <CommonButton onClick={handleSubmit(onClickLogin)} text="ログイン" />
      </form>

      {viewPage === "loginPage" && (
        <div className="flex flex-col items-center justify-center mt-10">
          <h4>会員登録はこちらから</h4>
          <CommonButton onClick={() => router.push("/register")} text="会員登録" type="outlined" />
        </div>
      )}

      <Toaster position="bottom-center" />
    </div>
  )
}

export default LoginForms
