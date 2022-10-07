// lib
import type { NextPage } from "next"

// components
import CommonButton from "src/components/Common/CommonButton"

// utils
import data from "src/json/policy.json"

/**
 * WD014_プライバシーポリシー画面
 */

const PolicyPage: NextPage = () => (
  <div className="w-full flex flex-col items-center justify-around bg-white shadow-md rounded-md p-10">
    <h1>プライバシーポリシー</h1>
    <p>
      ks
      typing管理者（以下，「管理者」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
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

export default PolicyPage
