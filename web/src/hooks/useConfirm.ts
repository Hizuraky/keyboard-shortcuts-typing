// lib
import { useEffect } from "react"
import { useRouter } from "next/router"

/**
 * ページ離脱確認hooks
 */

export const useConfirm: () => void = () => {
  const router = useRouter()

  const handleBrowserBackEvent = () => {
    const isBack = window.confirm("スコア画面を離れますがよろしいですか？")
    if (isBack) {
      window.removeEventListener("popstate", handleBrowserBackEvent)
      router.back()
    } else {
      window.history.pushState(null, "", window.location.href)
    }
  }

  useEffect(() => {
    window.history.pushState(null, "", window.location.href)
    window.addEventListener("popstate", handleBrowserBackEvent)
    return () => {
      window.removeEventListener("popstate", handleBrowserBackEvent)
    }
  }, [])
}
