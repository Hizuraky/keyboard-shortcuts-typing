// lib
import { Dispatch, SetStateAction, VFC } from "react"

/**
 * 称号の画像
 */

type TitleType = {
  id: number
  name: string
  url: string
}

type Props = {
  title: TitleType
  width: "s" | "m" | "l"
  onClick?: Dispatch<SetStateAction<TitleType>>
  selected?: TitleType
  isMb?: boolean
}
const TitleImg: VFC<Props> = ({ title, onClick, width = "m", selected, isMb = true }) => {
  const borderColor = title.name.indexOf("Master") > -1 ? "border-[#d6c25b]" : "border-gray-300"
  const imgWidth = width === "s" ? "w-[100px]" : width === "m" ? "w-[250px]" : "w-[24%]"
  const borderCss =
    title.id === selected?.id ? "border-[#1C73BD] border-4" : `border-2 ${borderColor}`

  return (
    <img
      src={title.url}
      className={`rounded-md shadow-md border-solid ${imgWidth} ${borderCss} ${isMb && "mb-2"}`}
      onClick={() => onClick && onClick(title)}
    />
  )
}

export default TitleImg
