// lib
import type { NextPage } from "next"
import { useRouter } from "next/router"

// components
import Icon from "src/components/Common/CommonIcon"
import CommonButton from "src/components/Common/CommonButton"
import ErrBoundary from "src/components/ErrBoundary"
import TitleImg from "src/components/TitleImg"

// hooks
import { useSwr, useLoadAndAuth } from "src/hooks"
import { useUserRecoil } from "src/hooks/useRecoil"

// utils
import { EP } from "src/fetch/fetcher"
import { RankingType } from "src/fetch/json"

/**
 * WD0005_ランキング画面
 */

type ListProps = {
  id: number
  name: string
  icon: string
  score: number
  isMine?: boolean
  rank: number
  title: {
    id: number
    name: string
    url: string
  }
}
const RankingPage: NextPage = () => {
  const router = useRouter()
  const { user } = useUserRecoil()
  const { data, error } = useSwr<RankingType>(EP.appRanking(String(router.query.id)))
  useLoadAndAuth({ isLoading: !data, error: error, isAuthApi: true })

  const List = ({ id, name, icon, score, rank, title, isMine }: ListProps) => {
    let indexBgColor = "bg-[#939393]"
    let indexFontColor = "text-black font-bold"
    switch (rank) {
      case 0:
        indexBgColor = "bg-gradient-to-b from-[#d6c25b] to-[#f7eaa9]"
        break
      case 1:
        indexBgColor = "bg-gradient-to-b from-[#b1b1b1] to-[#e9e9e9]"
        break
      case 2:
        indexBgColor = "bg-gradient-to-b from-[#e2be9c] to-[#fae1c9]"
        break
      default:
        indexBgColor = "bg-gradient-to-b from-[#686868] to-[#acacac]"
        indexFontColor = "text-white font-bold"
        break
    }

    return (
      <div
        className="w-3/4 bg-white rounded-md py-2 px-14 text-bold shadow-md flex items-center justify-between relative my-3 hover:bg-[#eee] cursor-pointer"
        onClick={() => router.push(`/user/${id}`)}
      >
        <div
          className={
            "absolute top-[-10px] left-[-10px] h-10 w-10 flex items-center justify-center rounded-full  " +
            indexBgColor
          }
        >
          <p className={"text-lg " + indexFontColor}>{rank + 1}</p>
        </div>
        <div className="flex items-center">
          <div className="bg-white rounded-full flex items-center justify-center">
            <Icon src={icon} />
          </div>
          <div className="ml-5">
            <div className="flex items-center">
              {isMine ? (
                <p className="text-sm text-[#888]">あなたの順位</p>
              ) : (
                <TitleImg width="s" title={title} isMb={false} />
              )}
            </div>
            <p className="text-xl max-w-[250px]">{name}</p>
          </div>
        </div>
        <div className="flex items-baseline">
          <p className="mr-10">Point</p>
          <p className="text-2xl">{score.toLocaleString()}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full items-center justify-center rounded-md ">
      <ErrBoundary error={error} isLoading={!data}>
        <h2>ランキング</h2>
        <div className="flex items-center justify-around w-full mt-2 mb-5">
          <div className="flex items-center">
            <img src={data?.icon} className="w-10" />
            <p className="font-bold text-xl ml-3">{data?.name}</p>
          </div>
          <div className="flex items-center">
            <p className="text-md ml-3">挑戦者</p>
            <p className="font-bold text-xl ml-3">{data?.challenger.toLocaleString()}</p>
          </div>
        </div>
        {data && data.myRank.score > 0 && (
          <>
            <List
              id={user!.id}
              name={user!.name}
              icon={user!.icon}
              score={data?.myRank.score}
              isMine
              rank={data?.myRank.rank}
              title={user!.title}
            />

            <div className="text-xs font-bold">
              <p>・</p>
              <p>・</p>
              <p>・</p>
            </div>
          </>
        )}
        <div
          className={`overflow-scroll flex flex-col w-full items-center ${
            data && data.myRank.score > 0 ? "h-[470px]" : "h-[600px]"
          }`}
        >
          {data?.ranking.map((player, i) => (
            <List
              id={player.id}
              name={player.name}
              icon={player.icon}
              score={player.score}
              rank={i}
              key={i}
              title={player.title}
            />
          ))}
        </div>
        <div className="w-3/5 flex justify-between mt-5">
          <CommonButton type="outlined" text="アプリ選択" onClick={() => router.push("/apps")} />
          <CommonButton type="back" />
        </div>
      </ErrBoundary>
    </div>
  )
}

export default RankingPage
