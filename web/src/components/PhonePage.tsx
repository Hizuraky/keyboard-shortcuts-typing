// utils
import Logo from "src/assets/Logo.png"
import CharLogo from "src/assets/CharLogo.png"

/**
 * スマホ・タブレット用コンポーネント
 */

const ListAppsPage = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center h-screen bg-[#EFF2F5] lg:hidden">
      <div className="flex justify-around p-5 rounded-md shadow-sm bg-white flex-col h-40">
        <div className="flex w-full justify-center">
          <img src={Logo.src} className="object-contain w-12" />
          <img src={CharLogo.src} className="object-contain ml-2 w-44" />
        </div>
        <p>現在スマートフォンとタブレットは非対応となっています。</p>
        <p>パソコンにて再度アクセスしてください。</p>
      </div>
    </div>
  )
}

export default ListAppsPage
