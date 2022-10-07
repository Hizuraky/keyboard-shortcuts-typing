// lib
import { VFC, useEffect } from "react"
import { useRouter } from "next/router"

// components
import Icon from "src/components/Common/CommonIcon"

// hooks
import { useTabRecoil, useUserRecoil } from "src/hooks/useRecoil"

// utils
import Logo from "src/assets/Logo.png"
import CharLogo from "src/assets/CharLogo.png"

/**
 * 共通ヘッダー
 */

const Header: VFC = () => {
  const { tab, setTab } = useTabRecoil()
  const { user } = useUserRecoil()
  const router = useRouter()

  // URLでtab selectedを変更
  useEffect(() => {
    router.asPath.indexOf("/top") > -1 && tab !== 0 && setTab(0)
    router.asPath.indexOf("/apps") > -1 && tab !== 1 && setTab(1)
    router.asPath.indexOf("/tutorial") > -1 && tab !== 1 && setTab(1)
    router.asPath.indexOf("/list") > -1 && tab !== 1 && setTab(1)
    router.asPath !== "/user/" && router.asPath.indexOf("/user") > -1 && tab !== 1 && setTab(1)
    router.asPath === "/user/" && tab !== 2 && setTab(2)
    router.asPath.indexOf("/register") > -1 && tab !== 2 && setTab(2)
    router.asPath.indexOf("/terms") > -1 && setTab(undefined)
    router.asPath.indexOf("/policy") > -1 && setTab(undefined)
  }, [router])

  // URLでtab selectedを変更
  const tabContents = [
    { label: "トップ", path: "/top" },
    { label: "ゲーム", path: "/apps" },
    { label: user ? "マイページ" : "ログイン", path: user ? "/user" : "/login" },
  ]

  return (
    <div className="bg-white flex justify-center shadow-md w-screen z-50">
      <div className="w-[1280px] flex item-center py-2 px-10 justify-between ">
        <div
          className="flex w-1/3 cursor-pointer  hover:opacity-70"
          onClick={() => {
            router.push("/top")
            setTab(undefined)
          }}
        >
          <img src={Logo.src} className="object-contain w-12" />
          <img src={CharLogo.src} className="object-contain ml-2 w-44" />
        </div>
        <div className="flex items-center ml-10 justify-around ">
          {tabContents.map((content, i) => {
            const borderStyle = tab === i ? "bg-[#1C73BD] w-24 h-1" : "opacity-0"
            return (
              <div
                key={i}
                className="relative h-full flex flex-col justify-between items-center cursor-pointer w-[100px] mx-1 hover:text-[#aaa]"
                onClick={() => {
                  router.push(content.path)
                  setTab(i)
                }}
              >
                <div className="opacity-0" />
                <p className={tab === i ? "font-bold" : "font-normal"}>{content.label}</p>
                <div className={borderStyle} />
              </div>
            )
          })}
        </div>
        <div className="flex items-center w-1/3 justify-end">
          <Icon src={user ? user.icon : ""} />
          {user ? (
            <p className="ml-2 max-w-[200px]">{user?.name}</p>
          ) : (
            <p className="ml-2">ゲストユーザー</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
