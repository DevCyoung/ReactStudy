//import { RedInput, BlueButton } from "./BoardWrite.styles"
import React from "react"
import { IBoardWriteUIProps } from "./BoardWrite.types"

import * as QQQ from "./BoardWrite.styles"



export default function BoardWriteUI(props: IBoardWriteUIProps) {
    return (
        <div>
            작성자 : <QQQ.RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/> <br/>
            내용 : <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}/> <br/>
            제목 : <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/> <br/>    
            <QQQ.BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>{props.isEdit ? "수정" : "등록"}하기
            </QQQ.BlueButton> <br/>
        </div>
    )
}