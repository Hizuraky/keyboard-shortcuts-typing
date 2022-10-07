// lib
import { VFC } from "react"
import { useRouter } from "next/router"

// utils
import FooterLogo from "src/assets/FooterLogo.png"

/**
 * 共通フッター
 */

const Footer: VFC = () => {
  const router = useRouter()
  router.asPath.indexOf("/terms")
  return (
    <div className="bg-white flex justify-center flex-col items-center p-5">
      <div className="flex items-center justify-between w-2/5 mb-5">
        <img src={FooterLogo.src} className="object-contain w-32" />
        <div>
          <p
            className={`${
              router.asPath.indexOf("/terms") > -1 && "font-bold"
            } mb-5 hover:text-[#aaa] cursor-pointer`}
            onClick={() => router.push("/terms")}
          >
            利用規約
          </p>
          <p
            className={`${
              router.asPath.indexOf("/policy") > -1 && "font-bold"
            } mb-5 hover:text-[#aaa] cursor-pointer`}
            onClick={() => router.push("/policy")}
          >
            プライバシーポリシー
          </p>
        </div>
      </div>
      <p className="text-sm text-[#777]">© KS TYPING</p>
    </div>
  )
}

export default Footer
