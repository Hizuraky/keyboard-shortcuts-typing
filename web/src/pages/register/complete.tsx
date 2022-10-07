// lib
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { Toaster } from "react-hot-toast"

// components
import CommonButton from "src/components/Common/CommonButton"

/**
 * WD007_会員登録画面
 */

const RegisterCompletePage: NextPage = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col bg-white p-10 rounded-md items-center justify-center">
      <h2>登録完了</h2>
      <p className="mt-2 mb-7">会員登録が完了しました。以下の機能が利用できます。</p>

      <div>
        <h4>1. プロフィール</h4>
        <p className="ml-8 mt-2 mb-7">
          自身のプロフィールを確認・編集できます。
          <br />
          編集ではユーザー名・アイコン画像を設定できます。
        </p>
        <h4>2. プレイヤーレベル</h4>
        <p className="ml-8 mt-2 mb-7">
          ゲームをプレイするとレベルが上がります。 <br />
          プロフィールよりプレイヤーレベルを確認できます。
        </p>
        <h4>3.ランキング</h4>
        <p className="ml-8 mt-2 mb-7">
          ゲーム結果のスコアランキングを確認できます。
          <br />
          ランキングは毎週リセットされ、入賞情報はプロフィールへ登録されます。
        </p>
      </div>
      <div className="flex w-3/5 justify-between mt-10">
        <CommonButton type="outlined" text="ゲームプレイ" onClick={() => router.push("/apps")} />
        <CommonButton text="プロフィール" onClick={() => router.push("/user")} />
      </div>
      <Toaster position="bottom-center" />
    </div>
  )
}

export default RegisterCompletePage
