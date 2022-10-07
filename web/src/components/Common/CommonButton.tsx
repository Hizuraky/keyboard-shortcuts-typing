// lib
import { VFC } from "react"
import Button from "@mui/material/Button"
import { useRouter } from "next/router"

/**
 * 共通ボタン
 */

type Props = {
  text?: string
  type?: "contained" | "outlined" | "back"
  width?: string
  onClick?: () => void
  disable?: boolean
}
const CommonButton: VFC<Props> = ({
  text,
  type = "contained",
  width = "200px",
  onClick,
  disable = false,
}) => {
  const router = useRouter()

  const containedStyles = {
    width: width,
    backgroundColor: "#1C73BD",
    borderRadius: "10px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#065DA6",
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: "#065DA6",
      boxShadow: "none",
    },
    "&:focus": {
      backgroundColor: "#065DA6",
      boxShadow: "none",
    },
  }

  const outlinedStyles = {
    width: width,
    fontWeight: "bold",
    backgroundColor: "rgba(255,255,255,0.5)",
    border: "3px solid",
    borderColor: "#1C73BD",
    color: "#1C73BD",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "rgba(200,200,200,0.2)",
      border: "3px solid",
      borderColor: "#065DA6",
      color: "#065DA6",
    },
    "&:active": {
      backgroundColor: "rgba(200,200,200,0.2)",
      border: "3px solid",
      borderColor: "#065DA6",
      color: "#065DA6",
    },
    "&:focus": {
      backgroundColor: "rgba(200,200,200,0.2)",
      border: "3px solid",
      borderColor: "#065DA6",
      color: "#065DA6",
    },
  }

  const styles = type === "contained" ? containedStyles : outlinedStyles

  return (
    <Button
      sx={styles}
      variant={type === "contained" ? "contained" : "outlined"}
      color="primary"
      onClick={type === "back" ? () => router.back() : onClick}
      disabled={disable}
    >
      {text ? text : "戻る"}
    </Button>
  )
}

export default CommonButton
