// lib
import { Dispatch, SetStateAction, VFC } from "react"
import toast, { Toaster } from "react-hot-toast"

// components
import Button from "@mui/material/Button"

/**
 * 写真アップロードボタン
 */

type Props = {
  text?: string
  width?: string
  height?: string
  disable?: boolean
  setFile: Dispatch<SetStateAction<unknown>>
}
const UploadButton: VFC<Props> = ({
  text,
  width = "100px",
  height = "30px",
  disable = false,
  setFile,
}) => {
  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null || event.target.files.length === 0) {
      return false
    }

    const file = event.target.files[0]
    const sizeLimit = 5000000

    // ファイル形式バリデーション
    if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
      toast.error("jpeg, ,png のファイル形式を選択してください。")
      return false
    }

    // ファイルサイズバリデーション
    if (file.size > sizeLimit) {
      toast.error("画像は5MB以下の画像を指定してください。")
      return false
    }

    // ファイル => base64変換
    new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.onload = (file) => {
        resolve(file.target?.result)
      }
      fileReader.onerror = (error) => reject(error)
      fileReader.readAsDataURL(file)
    })
      .then((base64File) => {
        setFile(base64File)
      })
      .catch((err) => {
        toast.error(err)
      })
  }

  const grayStyles = {
    width: width,
    fontWeight: "bold",
    backgroundColor: "rgba(255,255,255,0.5)",
    border: "3px solid",
    borderColor: "#858585",
    color: "#858585",
    borderRadius: "10px",
    height: height,
    "&:hover": {
      backgroundColor: "rgba(200,200,200,0.2)",
      border: "3px solid",
      borderColor: "#4d4d4d",
      color: "#4d4d4d",
    },
    "&:active": {
      backgroundColor: "rgba(200,200,200,0.2)",
      border: "3px solid",
      borderColor: "#4d4d4d",
      color: "#4d4d4d",
    },
    "&:focus": {
      backgroundColor: "rgba(200,200,200,0.2)",
      border: "3px solid",
      borderColor: "#4d4d4d",
      color: "#4d4d4d",
    },
  }

  return (
    <Button sx={grayStyles} variant="outlined" disabled={disable} component="label">
      {text ? text : "写真選択"}
      <input
        type="file"
        accept="image/*"
        name="fileInput"
        onChange={handleFile}
        className="hidden"
      />
      <Toaster position="bottom-center" />
    </Button>
  )
}

export default UploadButton
