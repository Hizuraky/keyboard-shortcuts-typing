// lib
import type { NextPage } from "next"
import { useState } from "react"
import { useRouter } from "next/router"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Dialog, Button } from "@mui/material"
import toast from "react-hot-toast"

// components
import CommonButton from "src/components/Common/CommonButton"
import UploadButton from "src/components/UploadButton"
import Input from "src/components/Common/CommonInput"
import Icon from "src/components/Common/CommonIcon"
import TitleImg from "src/components/TitleImg"

// hooks
import { useUserRecoil, useRouterRecoil } from "src/hooks/useRecoil"

// utils
import { UserEditSchema } from "src/schemas"
import { EP, fetcherPut } from "src/fetch/fetcher"

/**
 * WD011_プロフィール編集画面
 */

type InputType = {
  name: string
}
type TitleType = {
  id: number
  name: string
  url: string
}
const ProfileEditPage: NextPage = () => {
  const router = useRouter()
  const { user, setUser } = useUserRecoil()
  const { params } = useRouterRecoil()

  const [uploadIcon, setIcon] = useState<unknown>()
  const [isOpen, setOpen] = useState(false)
  const [selectedTitle, setSelectedTitle] = useState<TitleType>(params?.title)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({
    resolver: yupResolver(UserEditSchema),
  })

  const onClickEdit: SubmitHandler<InputType> = async (Inputs) => {
    const { err } = await fetcherPut(EP.userEdit(), {
      name: Inputs.name,
      icon: uploadIcon ? String(uploadIcon) : user!.icon,
      title_id: selectedTitle.id,
    })
    if (err) {
      toast.error(err.data.message)
    } else {
      setUser({
        id: user!.id,
        name: Inputs.name,
        icon: uploadIcon ? String(uploadIcon) : user!.icon,
        title: selectedTitle,
        email: user!.email,
        level: user!.level,
        level_point: user!.level_point,
        play_time: user!.play_time,
        clear_times: user!.clear_times,
      })
      toast.success("プロフィールを編集しました")
      router.back()
    }
  }

  const grayStyles = {
    width: "100px",
    fontWeight: "bold",
    backgroundColor: "rgba(255,255,255,0.5)",
    border: "3px solid",
    borderColor: "#858585",
    color: "#858585",
    borderRadius: "10px",
    height: "30px",
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
    <div className="flex flex-col w-full items-center bg-white p-10">
      <h2>プロフィール編集</h2>
      <div className="my-5 flex flex-col items-center">
        <div className="my-3">
          <Icon src={uploadIcon ? String(uploadIcon) : user?.icon} size={150} />
        </div>
        <UploadButton setFile={setIcon} />
      </div>
      <div className="w-full mb-10">
        <Input
          register={register}
          errors={errors}
          schema="name"
          label="ユーザー名"
          defaultValue={user?.name}
        />
      </div>
      <div className="border-[1px] border-solid border-gray-400 flex items-center rounded-md w-full h-[90px] mb-10">
        <div className="border-r-[1px] border-solid border-gray-400 border-t-0 w-[30%] h-full border-b-0 border-l-0 flex items-center justify-center text-gray-600 flex-col">
          <p>称号</p>
        </div>
        <div className="flex items-center justify-between w-[70%] px-5">
          {selectedTitle && <TitleImg title={selectedTitle} width="m" />}
          <Button sx={grayStyles} variant="outlined" onClick={() => setOpen(true)}>
            称号選択
          </Button>
        </div>
      </div>
      <div className="flex w-3/5 justify-between">
        <CommonButton type="back" />
        <CommonButton onClick={handleSubmit(onClickEdit)} text="編集" />
      </div>
      <Dialog open={isOpen} onClose={() => setOpen(false)}>
        <div className="flex flex-col py-10 px-20 items-center justify-center font-semibold">
          <p className="font-bold text-xl">取得した称号</p>
          <div className="flex mt-5 w-full justify-between">
            <div className="w-full flex my-1 items-center justify-between flex-col">
              {params?.titles?.map((title: TitleType, i: number) => (
                <TitleImg
                  width="m"
                  title={title}
                  onClick={setSelectedTitle}
                  selected={selectedTitle}
                  key={i}
                />
              ))}
            </div>
          </div>
          <CommonButton
            onClick={() => setOpen(false)}
            text="閉じる"
            type="outlined"
            width="150px"
          />
        </div>
      </Dialog>
    </div>
  )
}

export default ProfileEditPage
