// lib
import type { NextPage } from "next"

// components
import CommonButton from "src/components/Common/CommonButton"

// utils
import data from "src/json/terms.json"

/**
 * WD013_利用規約画面
 */

const TermsPage: NextPage = () => (
  <div className="w-full flex flex-col items-center justify-around bg-white shadow-md rounded-md p-10">
    <h1>利用規約</h1>
    <p>
      この利用規約（以下，「本規約」といいます。）は，ks
      typing管理者（以下，「管理者」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
    </p>
    {data.map((item, i) => (
      <div key={i} className="flex flex-col items-start justify-start w-full">
        {item.type === "title" ? (
          <h3 className="mt-5 mb-3">{item.text}</h3>
        ) : (
          <div className="flex mb-2 items-center">
            <p className="mr-2">・</p>
            <p>{item.text}</p>
          </div>
        )}
      </div>
    ))}
    <CommonButton type="back" />
  </div>
)

export default TermsPage
