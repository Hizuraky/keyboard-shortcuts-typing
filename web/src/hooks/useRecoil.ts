// lib
import { useRecoilState } from "recoil"
import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

/**
 * Recoil各Atomのgetter,setter
 */

const { persistAtom } = recoilPersist()

// ユーザー
export const useUserRecoil = () => {
  type userProps = {
    id: number
    name: string
    icon: string
    level: number
    level_point: number
    play_time: number
    clear_times: number
    title: {
      id: number
      name: string
      url: string
    }
    email: string
  }
  const [user, setUser] = useRecoilState(
    atom<userProps | undefined>({
      key: "userAtom",
      default: undefined,
      effects_UNSTABLE: [persistAtom],
    }),
  )
  return { user, setUser }
}

// トップタブ
export const useTabRecoil = () => {
  const [tab, setTab] = useRecoilState(
    atom<number | undefined>({
      key: "tabAtom",
      default: undefined,
    }),
  )
  return { tab, setTab }
}

// ページ遷移Params
export const useRouterRecoil = () => {
  const [params, setParams] = useRecoilState(
    atom<any>({
      key: "routerAtom",
      default: undefined,
      effects_UNSTABLE: [persistAtom],
    }),
  )
  return { params, setParams }
}

// loading
export const useLoadingRecoil = () => {
  const [loading, setLoading] = useRecoilState(
    atom<boolean>({
      key: "loadingAtom",
      default: false,
    }),
  )
  return { loading, setLoading }
}

// scoreのPOST状態判定フラグ
export const useReloadRecoil = () => {
  const [isNav, setNav] = useRecoilState(
    atom<boolean>({
      key: "reloadAtom",
      default: false,
    }),
  )
  return { isNav, setNav }
}
