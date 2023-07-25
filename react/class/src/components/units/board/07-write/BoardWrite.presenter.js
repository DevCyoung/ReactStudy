//import { RedInput, BlueButton } from "./BoardWrite.styles"
import * as QQQ from "./BoardWrite.styles"

export default function BoardWriteUI(props) {
    return (
        <div>
            작성자 : <QQQ.RedInput type="text" onChange={props.onChangeWriter} />
            내용 : <input type="text" onChange={props.onChangeContents} />
            제목 : <input type="text" onChange={props.onChangeTitle} />
            <QQQ.BlueButton onClick={props.onClickSubmit}> GRAPHQL API 요청 하기 </QQQ.BlueButton>
        </div>
    )
}

export function BoardWriteUI2(props) {
    return (
        <div>
            <div> 작성자2 : <QQQ.RedInput type="text" onChange={props.onChangeWriter} /> </div>
            <div> 내용2 : <QQQ.RedInput type="text" onChange={props.onChangeContents} /> </div>
            <div> 제목3 : <QQQ.RedInput type="text" onChange={props.onChangeTitle} /> </div>
            <div>GRAPHQL API 요청 하기 <QQQ.BlueButton onClick={props.onClickSubmit} isActive={props.isActive}> </QQQ.BlueButton></div>
        </div>
    )
}