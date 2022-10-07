// lib
import type { NextPage } from "next"

// components
import CommonButton from "src/components/Common/CommonButton"

// hooks
import { useRouterRecoil } from "src/hooks/useRecoil"

// utils
import { GameType } from "src/fetch/json"

/**
 * WD012_ショートカットリスト画面
 */

const ListPage: NextPage = () => {
  const { params } = useRouterRecoil()
  const lists: GameType = params?.app

  return (
    <div className="w-full flex flex-col items-center bg-white rounded-md shadow-md text-sm lg:text-base">
      <div className="flex my-5 justify-between w-4/5 items-center flex-col lg:flex-row">
        <div className="flex items-center">
          <img src={lists?.icon} className="w-10" />
          <p className="font-bold text-xl ml-3">{lists?.name}</p>
        </div>
        <div className="flex items-baseline">
          <p>掲載ショートカットキー</p>
          <p className="font-bold text-lg mx-3">{lists?.questions.length}</p>
          <p>個</p>
        </div>
      </div>
      <div className="w-full lg:w-4/5 border-collapse shadow-md rounded-md mb-10">
        {lists?.questions.map((list, i) => (
          <div
            className={`odd:bg-[#f5f5ed] flex ${i === 0 && "rounded-t-md"} ${
              i === lists?.questions.length - 1 && "rounded-b-md"
            }`}
            key={i}
          >
            <div className="p-4 text-center w-1/12">{i + 1}</div>
            <div className="p-4 text-center w-8/12">{list.content}</div>
            <div className="p-4 text-center w-3/12">{list.answer.map((d) => d + " ")}</div>
          </div>
        ))}
      </div>
      <div className="mb-10">
        <CommonButton type="back" />
      </div>
    </div>
  )
}

export default ListPage
