// lib
import { useEffect, useState } from "react"
import moment from "moment"

/**
 * タイマーhooks
 */

export const useTimer = () => {
  const [now, setNow] = useState(0)
  const [start, setStart] = useState(0)
  const interval = now - start
  const duration = moment.duration(interval)

  useEffect(() => {
    return () => clearInterval()
  }, [])

  const startTimer = () => {
    setInterval(() => {
      setNow(new Date().getTime())
    }, 100)
    setStart(new Date().getTime())
  }

  return { duration, startTimer }
}
