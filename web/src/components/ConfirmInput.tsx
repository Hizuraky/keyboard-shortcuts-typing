// lib
import { VFC } from "react"

/**
 * 確認Input(disabled)
 */

type Props = {
  label: string
  value: any
  isMultiLine?: boolean
  height?: number
  isPassword?: boolean
}
const ConfirmInput: VFC<Props> = ({ label, value, isMultiLine = false, isPassword = false }) => {
  return (
    <div
      className={`border-[1px] border-solid border-gray-400 flex items-center rounded-md w-full ${
        !isMultiLine && "h-[90px]"
      }`}
    >
      <div
        className={`border-r-[1px] border-solid border-gray-400 border-t-0 w-[30%] h-full border-b-0 border-l-0 flex items-center justify-center text-gray-600 flex-col ${
          !isMultiLine ? "h-[90px]" : `h-[210px]`
        }`}
      >
        <p>{label}</p>
        <p className="text-xs">{label === "ユーザー名" && "(他ユーザーに表示されます)"}</p>
      </div>
      {!isMultiLine ? (
        <p className="w-[70%] mx-5 bg-gray-100 h-2/3 flex items-center px-5 rounded-md text-[#333]">
          {!isPassword ? (
            value
          ) : (
            <input value={value} type="password" disabled className="border-0" />
          )}
        </p>
      ) : (
        value
      )}
    </div>
  )
}

export default ConfirmInput
