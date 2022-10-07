import axiosBase from "axios"

/**
 * axios設定
 */

const url = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "http://localhost:8080/"

const fetchSetting = () =>
  axiosBase.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    responseType: "json",
    timeout: 15 * 1000,
    withCredentials: true,
  })

export const API = fetchSetting()
