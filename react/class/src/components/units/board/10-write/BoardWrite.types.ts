//Props를위한 객체타입만들기
//any는 모든타입 왠만하면 쓰지마셈
import { ChangeEvent, MouseEvent } from "react"

export interface IBoardWriteProps {
    isEdit: boolean
    data?: any
}

export interface IMyVariables {
    number: number
    writer?: string
    title?: string
    contents?: string
}

export interface IBoardWriteUIProps {
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
    onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    isEdit: boolean
    data?: any
}