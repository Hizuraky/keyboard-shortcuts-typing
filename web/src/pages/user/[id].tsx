// lib
import type { NextPage } from "next"
import { Toaster } from "react-hot-toast"
import { useRouter } from "next/router"

// components
import Icon from "src/components/Common/CommonIcon"
import CommonButton from "src/components/Common/CommonButton"
import ErrBoundary from "src/components/ErrBoundary"
import TitleImg from "src/components/TitleImg"

// hooks
import { useSwr, useLoadAndAuth } from "src/hooks"

// utils
import { EP } from "src/fetch/fetcher"
import { UserProfileType } from "src/fetch/json"

/**
 * WD010_プロフィール画面(他ユーザー)
 */

const UserPage: NextPage = () => {
  const router = useRouter()
  const { data, error } = useSwr<UserProfileType>(EP.profile(String(router.query?.id)))
  useLoadAndAuth({ isLoading: !data, error: error, isAuthApi: true })

  const PaddingNumber = (num: number) => {
    return String(num).length === 1 ? "0" + num : num
  }

  const playHour = data && PaddingNumber(Math.floor(data.play_time / 3600))
  const playMinute = data && PaddingNumber(Math.floor((data.play_time % 3600) / 60))
  const playSecond = data && PaddingNumber(data.play_time % 60)
  const playTime = `${playHour} : ${playMinute} : ${playSecond}`

  return (
    <ErrBoundary error={error} isLoading={!data}>
      <div className="flex flex-col w-full items-center bg-white p-10">
        <h2>プロフィール</h2>
        {data && (
          <>
            <div className="flex items-center justify-center w-4/5 my-4">
              <Icon src={data.icon} size={150} />
              <div className="flex flex-col justify-center h-[150px] ml-10">
                {data && <TitleImg width="m" title={data.title} />}
                <div className="flex items-baseline">
                  <h2>Lv. {data.level}</h2>
                  <h1 className="mb-4 ml-4">{data.name}</h1>
                </div>
              </div>
            </div>

            <div className="w-full mb-10 rounded-md py-5 flex flex-col">
              <p className="text-center text-lg mb-4">入賞履歴</p>
              <div className="flex items-center justify-between">
                <div className="bg-gradient-to-b from-[#d6c25b] to-[#f7eaa9] w-[22%] rounded-md flex items-center justify-center flex-col py-4 shadow-md">
                  <p className="text-xl font-bold">1位</p>
                  <div className="flex my-2 items-baseline">
                    <p className="text-2xl font-bold mr-2">{data?.first}</p>
                    <p className="text-xl font-bold">回</p>
                  </div>
                </div>
                <div className="bg-gradient-to-b from-[#b1b1b1] to-[#e9e9e9] w-[22%] rounded-md flex items-center justify-center flex-col py-4 shadow-md">
                  <p className="text-xl font-bold">2位</p>
                  <div className="flex my-2 items-baseline">
                    <p className="text-2xl font-bold mr-2">{data?.second}</p>
                    <p className="text-xl font-bold">回</p>
                  </div>
                </div>
                <div className="bg-gradient-to-b from-[#e2be9c] to-[#fae1c9] w-[22%] rounded-md flex items-center justify-center flex-col py-4 shadow-md">
                  <p className="text-xl font-bold">3位</p>
                  <div className="flex my-2 items-baseline">
                    <p className="text-2xl font-bold mr-2">{data?.third}</p>
                    <p className="text-xl font-bold">回</p>
                  </div>
                </div>
                <div className="bg-gradient-to-b from-[#686868] to-[#acacac] w-[22%] rounded-md flex items-center justify-center flex-col py-4 shadow-md text-white">
                  <p className="text-xl font-bold">Top10</p>
                  <div className="flex my-2 items-baseline">
                    <p className="text-2xl font-bold mr-2">{data?.topTen}</p>
                    <p className="text-xl font-bold">回</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-between">
              <div className="w-[48%] mb-10 rounded-md px-5 py-5 flex flex-col shadow-md border border-solid border-gray-100">
                <p className="text-center text-lg mb-4">総プレイ時間</p>
                <p className="text-center text-[40px] mb-4 font-bold">{playTime}</p>
              </div>
              <div className="w-[48%] mb-10 rounded-md px-5 py-5 flex flex-col shadow-md border border-solid border-gray-100">
                <p className="text-center text-lg mb-4">クリア回数</p>
                <div className="flex items-baseline w-full justify-center">
                  <p className="text-center text-[40px] mb-4 font-bold">{data?.clear_times}</p>
                  <p className="text-center text-[20px] mb-4 font-bold ml-2">回</p>
                </div>
              </div>
            </div>

            <div className="flex w-3/5 justify-center">
              <CommonButton type="back" />
            </div>
          </>
        )}
        <Toaster position="bottom-center" />
      </div>
    </ErrBoundary>
  )
}

export default UserPage
