// lib
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { Toaster } from "react-hot-toast"
import { MdOutlineFiberNew } from "react-icons/Md"
import { AiOutlineNotification } from "react-icons/Ai"
import { GiKeyboard } from "react-icons/Gi"
import { IoIosBook } from "react-icons/Io"
import { BsTrophyFill } from "react-icons/Bs"
import { FaChartLine } from "react-icons/Fa"

// components
import CommonButton from "src/components/Common/CommonButton"
import AppList from "src/components/AppList"
import ErrBoundary from "src/components/ErrBoundary"

// hooks
import { useUserRecoil } from "src/hooks/useRecoil"
import { useSwr, useLoadAndAuth } from "src/hooks"

// utils
import { EP } from "src/fetch/fetcher"
import { TopType, NotificationType } from "src/fetch/json"

/**
 * WD001_トップページ
 */

const TopPage: NextPage = () => {
  const router = useRouter()
  const { user } = useUserRecoil()
  const { data, error } = useSwr<TopType>(user && EP.top())
  const { data: notificationData, error: NotificationErr } = useSwr<NotificationType>(
    EP.notification(),
  )
  const useAuthData = user ? data : notificationData
  const useAuthErr = user ? error : NotificationErr

  useLoadAndAuth({ isLoading: !useAuthData, error: useAuthErr })

  return !user ? (
    <ErrBoundary error={NotificationErr} isLoading={!notificationData}>
      <div className="w-full flex flex-col items-center justify-around">
        <div className="bg-[rgb(249,250,235)] w-full flex items-center justify-around px-10 h-64 shadow-md rounded-t-md">
          <div className="flex flex-col items-center justify-around h-4/5 w-1/2">
            <p className="font-bold text-lg">
              ショートカットキーを学べる
              <br />
              タイピングゲームサービス
            </p>
            <p className="max-w-[450px]">
              様々なアプリケーションのショートカットキータイピングゲームを行い、学習することができます。
            </p>
            <CommonButton
              type="outlined"
              text="プレイ方法"
              onClick={() => {
                router.push("/tutorial")
              }}
            />
          </div>
          <div className="w-1/2 flex items-center justify-center pt-12">
            <GiKeyboard color="#1C73BD" size={250} />
          </div>
        </div>
        <div className="bg-[#e8f1f8] w-full flex items-center justify-around px-10 h-64 shadow-md ">
          <div className="flex items-baseline w-1/2 justify-center">
            <BsTrophyFill color="#F5E177" size={120} className="mr-3" />
            <BsTrophyFill color="#D4D4D4" size={100} className="mr-3" />
            <BsTrophyFill color="#EED3BA" size={80} />
          </div>
          <div className="flex flex-col items-center justify-around h-4/5 w-1/2">
            <p className="font-bold text-lg">世界中の人と競える</p>
            <p className="text-center">
              会員登録すると、タイピングの正答率・タイムから算出したスコアの世界ランキングが確認できます。
            </p>
            <p className="text-center">
              また、累計スコアに応じてプレイヤーレベルが上がるようになります。
            </p>
            <CommonButton text="会員登録" onClick={() => router.push("/register")} />
          </div>
        </div>
        <div className="bg-[rgb(248,248,239)] w-full flex items-center justify-around px-10 h-64 shadow-md mb-10 rounded-b-md">
          <div className="flex flex-col items-center justify-around h-4/5 w-1/2">
            <p className="font-bold text-lg">一目で分かるショーカット一覧表</p>
            <p className="text-center">
              掲載アプリのショートカットキーを一覧表を確認できます。
              <br />
              タイピングゲームの確認や、普段の作業の参考にお使いいただけます。
            </p>
            <p className="text-center"></p>
            <CommonButton text="アプリ一覧" type="outlined" onClick={() => router.push("/apps")} />
          </div>
          <div className="flex items-baseline w-1/2 justify-center">
            <IoIosBook color="#1C73BD" size={200} className="mr-3" />
          </div>
        </div>
      </div>
      <div className="bg-white w-full flex items-center justify-around px-10 flex-col py-5 rounded-md relative mb-14 shadow-md">
        <div className="flex items-center mb-4 ">
          <div className="mr-2 flex items-center">
            <AiOutlineNotification size={20} />
          </div>
          <p className="font-bold text-xl mr-7">お知らせ</p>
        </div>
        <div className="h-full flex flex-col justify-around w-full">
          {notificationData?.map((notification, i) => (
            <p key={i} className="my-2">
              ・{notification.content}
            </p>
          ))}
        </div>
      </div>
      <Toaster position="bottom-center" />
    </ErrBoundary>
  ) : (
    <div className="w-full flex flex-col items-center justify-around">
      <ErrBoundary error={error} isLoading={!data}>
        <div className="bg-white w-full flex items-center justify-around px-10 flex-col py-5 rounded-md relative mb-14 shadow-md">
          <div className="flex items-center mb-4 ">
            <div className="mr-2 flex items-center">
              <AiOutlineNotification size={20} />
            </div>
            <p className="font-bold text-xl mr-7">お知らせ</p>
          </div>
          <div className="h-full flex flex-col justify-around w-full">
            {data?.notifications.map((notification, i) => (
              <p key={i} className="my-2">
                ・{notification.content}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-around flex-col relative mb-10">
          <div className="flex items-center my-4 ">
            <div className="mr-2 flex items-center">
              <MdOutlineFiberNew size={35} color="red" />
            </div>
            <p className="font-bold text-xl">新着アプリ</p>
          </div>
          {data?.newList.map((app) => (
            <AppList data={app} type="new" key={app.id} />
          ))}
        </div>

        <div className="w-full flex justify-around flex-col relative mb-10">
          <div className="flex items-center my-4 ">
            <div className="mr-2 flex items-center">
              <FaChartLine size={20} />
            </div>
            <p className="font-bold text-xl">プレイ履歴</p>
          </div>
          {data?.recordList.map((app) => (
            <AppList data={app} type="new" key={app.id} />
          ))}
          {data?.recordList?.length === 0 && <p>今週のプレイ履歴はありません。</p>}
        </div>
      </ErrBoundary>
      <Toaster position="bottom-center" />
    </div>
  )
}

export default TopPage
