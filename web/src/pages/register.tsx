// lib
import type { NextPage } from "next"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/router"

// components
import CommonButton from "src/components/Common/CommonButton"
import Input from "src/components/Common/CommonInput"

// hooks
import { useRouterRecoil } from "src/hooks/useRecoil"

// utils
import { RegisterSchema } from "src/schemas"

/**
 * WD007_会員登録画面
 */

type Inputs = {
  email: string
  password: string
  name: string
}

const RegisterPage: NextPage = () => {
  const router = useRouter()
  const { params, setParams } = useRouterRecoil()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(RegisterSchema),
  })

  const onClickRegister: SubmitHandler<Inputs> = async (Inputs) => {
    setParams({ ...Inputs })
    router.push("/register/confirm")
  }

  return (
    <div>
      <form className="flex flex-col justify-center items-center w-full bg-white p-10">
        <h2 className="mb-5">会員登録</h2>
        <p>ご入力されたメールアドレスに認証コードが送信されます。</p>
        <div className="w-4/5 my-5">
          <Input
            register={register}
            errors={errors}
            schema="email"
            label="メールアドレス"
            defaultValue={router.query?.edit && params.email}
          />
        </div>
        <div className="w-4/5 mb-5">
          <Input
            register={register}
            errors={errors}
            schema="password"
            label="パスワード"
            defaultValue={router.query?.edit && params.password}
          />
        </div>
        <div className="w-4/5 mb-5">
          <Input
            register={register}
            errors={errors}
            schema="passConfirm"
            label="パスワード(確認)"
            defaultValue={router.query?.edit && params.password}
          />
        </div>
        <div className="w-4/5 mb-10">
          <Input
            register={register}
            errors={errors}
            schema="name"
            label="ユーザー名"
            defaultValue={router.query?.edit && params.name}
          />
        </div>
        <CommonButton onClick={handleSubmit(onClickRegister)} text="登録確認" />
      </form>

      <div className="flex flex-col items-center justify-center mt-10">
        <CommonButton type="back" />
      </div>
    </div>
  )
}

export default RegisterPage
