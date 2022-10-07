// lib
import { VFC } from "react"
import { useRouter } from "next/router"
import { FaUsers } from "react-icons/Fa"
import { GrNotes } from "react-icons/Gr"
import { FaChartBar } from "react-icons/Fa"

// components
import CommonButton from "src/components/Common/CommonButton"

// hooks
import { useRouterRecoil } from "src/hooks/useRecoil"

/**
 * アプリリスト
 */

type Props = {
  type: "apps" | "new" | "record" | "list" | "phone"
  data: any
  index?: number
}
const AppList: VFC<Props> = ({ data, type, index }) => {
  const router = useRouter()
  const { setParams } = useRouterRecoil()

  // 順位のバックグラウンドカラー
  let indexBgColor = "#939393]"
  let indexFontColor = "text-black font-bold"

  switch (index) {
    case 1:
      indexBgColor = "bg-gradient-to-b from-[#d6c25b] to-[#f7eaa9]"
      break
    case 2:
      indexBgColor = "bg-gradient-to-b from-[#b1b1b1] to-[#e9e9e9]"
      break
    case 3:
      indexBgColor = "bg-gradient-to-b from-[#e2be9c] to-[#fae1c9]"
      break
    default:
      indexBgColor = "bg-gradient-to-b from-[#686868] to-[#acacac]"
      indexFontColor = "text-white font-bold"
      break
  }

  const Content = ({ type }: { type: "challenger" | "questions" | "score" }) => {
    return (
      <div className="flex justify-between ml-20 w-[50%] my-1">
        <span className="flex items-center">
          {type === "challenger" && <FaUsers size={20} />}
          {type === "questions" && <GrNotes size={20} />}
          {type === "score" && data.hasOwnProperty("bestScore") && <FaChartBar size={20} />}

          <p className="ml-2">
            {type === "challenger" && "挑戦者"}
            {type === "questions" && "登録問題数"}
            {type === "score" && data.hasOwnProperty("bestScore") && "ベストスコア"}
          </p>
        </span>
        <span className="flex items-center">
          <p className="text-lg font-bold mr-1">
            {type === "challenger" && data.challenger?.length}
            {type === "questions" && data.questions?.length}
            {type === "score" &&
              data.hasOwnProperty("bestScore") &&
              data.bestScore.toLocaleString()}
          </p>
          {type === "challenger" && "人"}
          {type === "questions" && "問"}
          {type === "score" && data.hasOwnProperty("bestScore") && "点"}
        </span>
      </div>
    )
  }

  return (
    <div
      key={data.id}
      className="bg-white flex items-center w-full px-[5%] py-6 relative mb-8 rounded-md shadow-md "
    >
      {index && type !== "list" && (
        <div
          className={
            "absolute top-[-10px] left-[-10px] h-10 w-10 flex items-center justify-center rounded-full " +
            `${indexBgColor}`
          }
        >
          <p className={"text-lg " + indexFontColor}>{index}</p>
        </div>
      )}
      <img src={data.icon} className="w-[150px]" />
      <div className="w-full h-full flex flex-col justify-between">
        <p className="font-bold text-xl ml-14">{data.name}</p>
        <Content type="challenger" />
        <Content type="questions" />
        <Content type="score" />
      </div>
      <div className="flex flex-col items-end h-32 justify-between pt-6">
        <CommonButton
          text="ゲームプレイ"
          onClick={() => {
            setParams({ game: data })
            router.push(`/apps/${data.id}`)
          }}
        />
        <CommonButton
          type="outlined"
          text="ショートカット一覧"
          onClick={() => {
            setParams({ app: data })
            router.push(`/list/${data.id}`)
          }}
        />
      </div>
    </div>
  )
}

export default AppList
