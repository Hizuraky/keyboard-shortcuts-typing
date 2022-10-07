// lib
import { useEffect } from "react"

// hooks
import { useLoadingRecoil, useUserRecoil } from "src/hooks/useRecoil"

/**
 * loading + unAuth 状態ハンドリングhooks
 */

type Props = {
  isLoading: boolean
  error: any
  isAuthApi?: boolean
}

export const useLoadAndAuth = ({ isLoading, error, isAuthApi = false }: Props) => {
  const { setLoading } = useLoadingRecoil()
  const { user, setUser } = useUserRecoil()

  useEffect(() => {
    if (error?.status === 401) {
      setLoading(false)
      setUser(undefined)
    } else if (isAuthApi && user && isLoading) {
      setLoading(true)
    } else if (!isAuthApi && isLoading) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [isLoading, error])
}
