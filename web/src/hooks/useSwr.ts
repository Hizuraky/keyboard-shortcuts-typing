// lib
import useSWR from "swr"
import { AxiosResponse } from "axios"

// utils
import { fetcherGet } from "src/fetch/fetcher"

/**
 * カスタムSwr
 */

export const useSwr = <Data>(url?: string, fallbackData?: any) => {
  const { data, error, mutate } = useSWR<AxiosResponse<Data>>(url && url, fetcherGet, {
    fallbackData,
  })
  return { data: data?.data, error, mutate }
}
