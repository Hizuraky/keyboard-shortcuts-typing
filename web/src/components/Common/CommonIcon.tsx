// lib
import { VFC } from "react"
import { MdAccountCircle } from "react-icons/Md"

/**
 * 共通アイコン
 */

type Props = {
  src?: string
  size?: 50 | 150
  border?: "white" | "blue" | "none"
}
const CommonIcon: VFC<Props> = ({ src, size = 50, border = "blue" }) => {
  const borderStyle =
    border === "blue"
      ? " border-solid border-2 border-[#6685bd] shadow-sm"
      : border === "white"
      ? " border-solid border-2 border-[#fff]"
      : ""

  const sizeStyle = size === 50 ? " w-[50px] h-[50px]" : " w-[150px] h-[150px]"

  return src && src !== "" ? (
    <img src={src} className={"rounded-full object-cover" + borderStyle + sizeStyle} />
  ) : (
    <div className={"bg-[#fff] rounded-full flex items-center justify-center" + borderStyle}>
      <MdAccountCircle color="#1C73BD" size={size} />
    </div>
  )
}

export default CommonIcon
