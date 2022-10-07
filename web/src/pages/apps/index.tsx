// lib
import type { NextPage } from "next"
import { useRouter } from "next/router"

// components
import CommonButton from "src/components/Common/CommonButton"
import AppList from "src/components/AppList"
import ErrBoundary from "src/components/ErrBoundary"

// hooks
import { useSwr, useLoadAndAuth } from "src/hooks"

// utils
import { EP } from "src/fetch/fetcher"
import { AppsType } from "src/fetch/json"

/**
 * WD002_アプリ一覧画面
 */

const AppsPage: NextPage = () => {
  const { data, error } = useSwr<AppsType[]>(EP.apps())
  useLoadAndAuth({ isLoading: !data, error: error })
  const router = useRouter()

  return (
    <div className="flex flex-col w-full items-center justify-center rounded-md">
      <ErrBoundary error={error} isLoading={!data}>
        <div className="flex w-full items-center mb-8 relative justify-center">
          <h2>ゲームアプリ選択</h2>
          <div className="absolute right-0">
            <CommonButton
              type="outlined"
              text="プレイ方法"
              onClick={() => {
                router.push("/tutorial")
              }}
            />
          </div>
        </div>
        <div className="w-full text-right text-sm mb-2">
          ※挑戦者数はログインユーザーのみカウントされます
        </div>
        {data?.map((app, i) => (
          <AppList data={app} index={i + 1} type="apps" key={app.id} />
        ))}
      </ErrBoundary>
    </div>
  )
}

export default AppsPage
