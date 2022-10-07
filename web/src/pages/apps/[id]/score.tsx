// lib
import type { NextPage } from "next"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { FaLevelUpAlt } from "react-icons/Fa"
import toast, { Toaster } from "react-hot-toast"

// components
import CommonButton from "src/components/Common/CommonButton"

// hooks
import { useConfirm } from "src/hooks"
import {
  useRouterRecoil,
  useUserRecoil,
  useLoadingRecoil,
  useReloadRecoil,
} from "src/hooks/useRecoil"

// utils
import { EP, fetcherPost } from "src/fetch/fetcher"

/**
 * WD0004_ゲーム結果画面
 */

const ScorePage: NextPage = () => {
  const router = useRouter()
  const { params } = useRouterRecoil()
  const { user, setUser } = useUserRecoil()
  const { setLoading } = useLoadingRecoil()
  const { isNav, setNav } = useReloadRecoil()
  const [postStatus, setPostStatus] = useState<boolean | "401">(false)

  useConfirm()

  // ポイント = (基準値(3000) - 所用時間(s * 10) - ミスタップ(回数 * 50) - スキップ(回数 * 300)) >= 0(0以上) + クリアボーナス(100)
  // レベル = レベルポイント > 10000 && レベルインクリメント処理 && レベルポイント -= 10000
  let clearSecondPoint = 0
  let point = 0
  let totalLevelPoint = 0
  let pointStr = ""
  let afterPointWidth = ""
  let beforePointWidth = ""

  clearSecondPoint = params?.score?.time * 10 + params?.score?.centimes
  point = 3000 - clearSecondPoint - params?.score?.skip * 300 - params?.score?.missTap * 50
  point = (point < 0 ? 0 : point) + 100
  pointStr = point.toLocaleString()

  if (user) {
    totalLevelPoint = user.level_point + point
    totalLevelPoint > 9999 && (totalLevelPoint -= 10000)
    afterPointWidth = `${Math.floor((totalLevelPoint / 10000) * 200)}px`
    beforePointWidth = `${
      totalLevelPoint < user.level_point ? 0 : Math.floor((user.level_point / 10000) * 200)
    }px`
  }

  useEffect(() => {
    if (isNav) {
      setLoading(true)
      ;(async () => {
        if (user) {
          setUser({
            id: user.id,
            name: user.name,
            icon: user.icon,
            level: totalLevelPoint < user.level_point ? user.level + 1 : user.level,
            level_point: totalLevelPoint,
            play_time: user.play_time + params?.score.time,
            clear_times: user.clear_times + 1,
            title: user.title,
            email: user.email,
          })

          const { err } = await fetcherPost(EP.appScore(String(router.query?.id)), {
            score: point,
            level: user.level_point ? user.level + 1 : user.level,
            levelPoint: totalLevelPoint,
            playTime: Number(user.play_time) + params?.score.time,
            clearTimes: Number(user.clear_times) + 1,
          })
          if (err) {
            err.status === 401 ? setPostStatus("401") : toast.error(err.data.message)
          } else {
            setPostStatus(true)
            setNav(false)
          }
        }
        setLoading(false)
      })()
    } else if (user) {
      setPostStatus(true)
    }
  }, [])

  return (
    <div className="bg-white flex items-center justify-around relative rounded-md shadow-sm  mb-5 w-full">
      <div className="bg-white flex items-center absolute top-[-25px] left-[-10px] rounded-lg py-2 px-4 shadow-md">
        <img src={params?.game?.icon} className="w-10" />
        <p className="font-bold text-xl ml-3">{params?.game?.name}</p>
      </div>

      <div className="flex flex-col p-10 w-full items-center">
        <div className="flex items-baseline my-2 ">
          <p className="w-36 text-right mr-5">タイム</p>
          <div className="flex w-32 justify-end">
            <p className="font-bold text-2xl mr-2">
              {params?.score?.time}.{params?.score?.centimes}
            </p>
            <p className="font-normal text-2xl">s</p>
          </div>
          <p className="text-[#25984C] text-xl font-bold w-44 text-right">
            + {3000 - clearSecondPoint < 0 ? 0 : (3000 - clearSecondPoint).toLocaleString()}
          </p>
        </div>
        <div className="flex items-baseline my-2 ">
          <p className="text-[#888] w-36 text-right mr-5">スキップ</p>
          <div className="flex w-32 justify-end">
            <p className="font-bold text-xl text-[#555] mr-2">{params?.score?.skip}</p>
            <p className="text-[#888]">回</p>
          </div>
          <p className="text-[#AE2E5C] text-xl font-bold w-44 text-right">
            ▲ {(params?.score?.skip * 300).toLocaleString()}
          </p>
        </div>
        <div className="flex items-baseline my-2">
          <p className="text-[#888] w-36 text-right mr-5">ミスタップ</p>
          <div className="flex w-32 justify-end">
            <p className="font-bold text-xl text-[#555] mr-2">{params?.score?.missTap}</p>
            <p className="text-[#888]">回</p>
          </div>
          <p className="text-[#AE2E5C] text-xl font-bold w-44 text-right">
            ▲ {params?.score?.missTap * 50}
          </p>
        </div>

        <div className="border-solid border-b-[0.5px] border-gray-100 w-3/5" />
        <div className="flex items-baseline my-2">
          <p className="text-[#888] w-36 text-right mr-5">トータル</p>
          <div className="flex w-32 justify-end">
            <p className="font-bold text-xl text-[#555] mr-2">-</p>
          </div>
          <p className="text-[#25984C] text-xl font-bold w-44 text-right">
            {(point - 100).toLocaleString()}
          </p>
        </div>
        <div className="flex items-baseline my-2">
          <p className="text-[#888] w-36 text-right mr-5">クリアボーナス</p>
          <div className="flex w-32 justify-end">
            <p className="font-bold text-xl text-[#555] mr-2">-</p>
          </div>
          <p className="text-[#25984C] text-xl font-bold w-44 text-right">+ 100</p>
        </div>

        <div className="flex items-baseline my-2 w-4/5 justify-around">
          {user && postStatus === true && (
            <div className="flex items-baseline">
              <p className="text-md text-[#555] mr-2">ベストスコア</p>
              <p className="text-xl font-bold text-[#777]">{params?.bestScore?.toLocaleString()}</p>
            </div>
          )}
          <div className="flex items-baseline">
            <p className="text-lg font-bold mr-2">今回のスコア</p>
            <p className="text-3xl font-bold">{pointStr}</p>
          </div>
        </div>
        <div className="border-solid border-b-[0.5px] border-[#1C73BD] w-4/5 my-4" />

        {user && postStatus === true ? (
          <>
            <div className="flex justify-between items-center w-2/3 mt-5">
              <div className="flex items-baseline w-1/2">
                <p className="text-ls mr-4">Point</p>
                <p className="text-xl font-bold">+ {pointStr}</p>
              </div>
              {totalLevelPoint < user!.level_point && (
                <div className="flex text-[#e24413] items-center">
                  <h3>Level UP</h3>
                  <FaLevelUpAlt />
                </div>
              )}
              <p className="font-bold text-xl">
                Lv. {totalLevelPoint < user!.level_point ? user!.level + 1 : user!.level}
              </p>
            </div>

            <div className="flex justify-between items-center w-2/3 mt-5">
              <div className="relative border-solid border-2 w-[200px] h-[36px] rounded-sm">
                <div className="relative h-[32px] bg-gradient-to-b from-[#333] to-[#888]">
                  <div
                    className={`h-[32px] bg-gradient-to-b from-[#90bbe0] to-[#347dbd]`}
                    style={{ width: afterPointWidth }}
                  >
                    <div
                      className={`h-[32px] bg-gradient-to-b from-[#5387b4] to-[#1c3f5e]`}
                      style={{ width: beforePointWidth }}
                    />
                  </div>
                </div>
              </div>
              <span className="flex items-baseline">
                次のLvまで
                <p className="font-bold text-xl mx-2">
                  {(10000 - totalLevelPoint).toLocaleString()}
                </p>
                Point
              </span>
            </div>
          </>
        ) : user ? (
          postStatus === "401" && (
            <div className="flex flex-col text-[#555] my-3">
              <p>ログイン期限が切れています。再度ログインしてください。</p>
            </div>
          )
        ) : (
          <div className="flex flex-col text-[#555] my-3">
            <p>会員登録するとランキング機能・プレイヤーレベル機能を利用できます。</p>
          </div>
        )}

        <div className="flex mt-10 w-full justify-around">
          <CommonButton type="outlined" text="アプリ選択" onClick={() => router.replace("/apps")} />
          <CommonButton
            type="outlined"
            text="もう一度プレイ"
            onClick={() => router.replace(`/apps/${router.query?.id}`)}
          />

          {user && postStatus === true ? (
            <CommonButton
              type="contained"
              text="ランキング確認"
              onClick={() => router.replace(`/apps/${router.query?.id}/ranking`)}
            />
          ) : user ? (
            postStatus === "401" && (
              <CommonButton
                type="contained"
                text="ログイン"
                onClick={() => router.replace("/login")}
              />
            )
          ) : (
            <CommonButton
              type="contained"
              text="会員登録"
              onClick={() => router.replace("/register")}
            />
          )}
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  )
}

export default ScorePage
