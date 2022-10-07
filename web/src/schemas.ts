import * as yup from "yup"

const REQUIRED = "は必須項目です。"
const MAX = "以内で入力してください。"
const EMAIL = "正しいメールアドレスを入力してください。"
const PASSWORD = "英字と数字を含めた8-24文字で設定してください。"

export const LoginSchema = yup.object().shape({
  email: yup //
    .string()
    .email(EMAIL)
    .required(`メールアドレス${REQUIRED}`),
  password: yup //
    .string()
    .matches(/(?=.*[a-z])(?=.*[0-9])[0-9a-zA-Z]{8,64}/, PASSWORD)
    .required(`パスワード${REQUIRED}`),
})

export const RegisterSchema = yup.object().shape({
  email: yup //
    .string()
    .email(EMAIL)
    .required(`メールアドレス${REQUIRED}`),
  password: yup //
    .string()
    .matches(/(?=.*[a-z])(?=.*[0-9])[0-9a-zA-Z]{8,64}/, PASSWORD)
    .required(`パスワード${REQUIRED}`),
  passConfirm: yup //
    .string()
    .matches(/(?=.*[a-z])(?=.*[0-9])[0-9a-zA-Z]{8,64}/, PASSWORD)
    .required(`パスワード${REQUIRED}`)
    .oneOf([yup.ref("password")], "パスワードが一致しません。"),
  name: yup //
    .string()
    .max(20, `20文字${MAX}`)
    .required(`ユーザー名${REQUIRED}`),
})

export const UserEditSchema = yup.object().shape({
  icon: yup //
    .mixed(),
  name: yup //
    .string()
    .max(20, `20文字${MAX}`)
    .required(`ユーザー名${REQUIRED}`),
})
