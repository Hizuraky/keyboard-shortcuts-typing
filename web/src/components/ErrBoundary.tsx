// lib
import React, { ReactNode } from "react"

// components
import LoginForms from "src/components/LoginForms"

/**
 * fetchのエラーバウンダリー
 */

type Props = {
  isLoading: boolean
  error: any
  children: ReactNode
}

const errorMessage = (error: any) => {
  if (error.message?.startsWith("Network Error")) return "ネットワーク接続がありません"
  if (error.status === 400) return "不正なリクエストです"
  if (error.status === 404) return "データが見つかりませんでした"
  if (error.status === 429) return "一定時間内に多くのリクエストを受け付けました"
  if (error.status >= 500) return "システムエラーが発生しました。"
}

const ErrBoundary: ({ error, children }: Props) => JSX.Element = ({
  isLoading,
  error,
  children,
}) => {
  if (error?.status === 401) {
    return <LoginForms viewPage="boundary" />
  } else if (error) {
    return <p>{errorMessage(error)}</p>
  } else if (isLoading) {
    return <></>
  } else {
    return <>{children}</>
  }
}

export default ErrBoundary
