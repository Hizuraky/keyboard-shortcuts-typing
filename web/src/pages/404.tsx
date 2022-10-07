// lib
import { useRouter } from "next/router"
import { useEffect } from "react"

// hooks
import { useLoadingRecoil } from "src/hooks/useRecoil"

/**
 * 404ハンドリング画面
 */

export default function Custom404() {
  const router = useRouter()
  const isReady = router.isReady
  const { setLoading } = useLoadingRecoil()

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      if (isReady) {
        await router.replace("/top")
        setLoading(false)
      }
    })()
  }, [isReady])

  return <></>
}
