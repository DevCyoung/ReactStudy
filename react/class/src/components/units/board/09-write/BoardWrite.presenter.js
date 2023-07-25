//import { RedInput, BlueButton } from "./BoardWrite.styles"
import * as QQQ from "./BoardWrite.styles"

export default function BoardWriteUI(props) {
    return (
        <div>
            작성자 : <QQQ.RedInput type="text" onChange={props.onChangeWriter} /> <br/>
            내용 : <input type="text" onChange={props.onChangeContents} /> <br/>
            제목 : <input type="text" onChange={props.onChangeTitle} /> <br/>    
            <QQQ.BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>{props.isEdit ? "수정" : "등록"}하기
            </QQQ.BlueButton> <br/>
        </div>
    )
}