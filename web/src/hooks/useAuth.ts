// lib
import toast from "react-hot-toast"

// hooks
import { EP, fetcherPost, fetcherGet } from "src/fetch/fetcher"
import { useLoadingRecoil, useUserRecoil } from "src/hooks/useRecoil"

// utils
import { UserType } from "src/fetch/json/index"

/**
 * login, logout
 */

type Props = {
  email: string
  password: string
  callback?: Function
}
export const useAuth = () => {
  const { setLoading } = useLoadingRecoil()
  const { setUser } = useUserRecoil()

  const login = async ({ email, password, callback }: Props) => {
    setLoading(true)
    let loginData
    let loginErr
    await fetcherGet(EP.sanctum())
    const authObj = { email: email, password: password }
    const { data, err } = await fetcherPost<UserType>(EP.login(), authObj)
    loginData = data
    loginErr = err

    if (loginData && !loginErr) {
      callback && callback(loginData)
      setLoading(false)
      return
    }
    setLoading(false)
    toast.error(err.data.message)
  }

  const logout = () => {
    setUser(undefined)
    fetcherPost(EP.logout())
  }

  return { login, logout }
}
