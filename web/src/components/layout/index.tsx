// lib
import { ReactNode } from "react"
import ReactLoading from "react-loading"

// components
import Header from "src/components/layout/Header"
import Footer from "src/components/layout/Footer"
import PhonePage from "src/components/PhonePage"

// hooks
import { useLoadingRecoil } from "src/hooks/useRecoil"

/**
 * デフォルトレイアウト
 */

type Props = {
  children: ReactNode
}
const Layout: ({ children }: Props) => JSX.Element = ({ children }) => {
  const { loading } = useLoadingRecoil()
  return (
    <>
      <div className="justify-between flex-col h-auto relative hidden lg:flex">
        {loading && (
          <div className="absolute w-screen flex items-center justify-center z-50 bg-[#999] opacity-40 h-full min-h-screen">
            <ReactLoading
              type="spin"
              color="#1C73BD"
              height="100px"
              width="100px"
              className="mx-auto"
            />
          </div>
        )}
        <div className="fixed z-50">
          <Header />
        </div>
        <div className="bg-[#EFF2F5] flex items-center justify-center z-40 mt-[70px]">
          <div className="flex w-[1280px] justify-between flex-col p-10">{children}</div>
        </div>
        <Footer />
      </div>
      <PhonePage />
    </>
  )
}

export default Layout
