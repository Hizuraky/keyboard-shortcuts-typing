// lib
import { VFC } from "react"
import { TextField } from "@mui/material"

/**
 * 共通Input
 */

type Props = {
  errors: { [x: string]: any }
  schema: string
  register: Function
  label: string
  defaultValue?: string
}
const CommonInput: VFC<Props> = ({ errors, schema, register, label, defaultValue }) => {
  return (
    <div className="border-[1px] border-solid border-gray-400 flex items-center rounded-md w-full h-[90px]">
      <div className="border-r-[1px] border-solid border-gray-400 border-t-0 w-[30%] h-full border-b-0 border-l-0 flex items-center justify-center text-gray-600 flex-col">
        <p>{label}</p>
        <p className="text-xs">{schema === "name" && "(他ユーザーに表示されます)"}</p>
      </div>
      <TextField
        id="filled-error-helper-text"
        label={`${label}を入力してください`}
        variant="filled"
        {...register(schema)}
        error={errors[schema]?.message}
        helperText={errors[schema]?.message}
        sx={{ width: "70%", padding: "5px" }}
        defaultValue={defaultValue}
        type={schema.indexOf("pass") > -1 ? "password" : "text"}
      />
    </div>
  )
}

export default CommonInput
