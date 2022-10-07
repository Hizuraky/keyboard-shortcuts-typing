import { API } from "src/fetch/config"

// APIエンドポイント
export const EP = {
  apps: () => "/api/app",
  bestScore: (id: string) => `/api/app/${id}`,
  appScore: (id: string) => `/api/app/${id}/score`,
  appRanking: (id: string) => `/api/app/${id}/ranking`,
  login: () => "/api/auth/login",
  logout: () => "/api/auth/logout",
  auth: () => "/api/auth/email",
  register: () => "/api/user/register",
  profile: (id: string) => `/api/user/${id}`,
  userEdit: () => "/api/user/edit",
  top: () => "/api/user",
  notification: () => "/api/notification",
  titles: () => "/api/user/titles",
  sanctum: () => "/sanctum/csrf-cookie",
}

export const fetcherGet = async (url: string) =>
  API.get(url)
    .then((res) => {
      return res
    })
    .catch((err) => {
      if (err?.message.startsWith("Network Error")) err.response = { message: "Network Error" }
      throw err.response
    })

export const fetcherPost = <T>(url: string, body: Object = {}) =>
  API.post<T>(url, JSON.stringify(body))
    .then((res) => {
      return { data: res.data, err: undefined }
    })
    .catch((err) => {
      return { data: null, err: err.response }
    })

export const fetcherPut = <T>(url: string, body: Object = {}) =>
  API.put<T>(url, body)
    .then((res) => {
      return { data: res, err: undefined }
    })
    .catch((err) => {
      return { data: undefined, err: err.response }
    })
