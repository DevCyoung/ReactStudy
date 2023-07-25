//import { RedInput, BlueButton } from "./BoardWrite.styles"
import * as QQQ from "./BoardWrite.styles"

export default function BoardWriteUI(props) {
    return (
        <div>
            작성자 : <QQQ.RedInput type="text" onChange={props.bbb} />
            내용 : <input type="text" onChange={props.ccc} />
            제목 : <input type="text" onChange={props.ddd} />
            <QQQ.BlueButton onClick={props.aaa}> GRAPHQL API 요청 하기 </QQQ.BlueButton>
        </div>
    )
}


export function BoardWriteUI2(props) {
    return (
        <div>
            작성자2 : <QQQ.RedInput type="text" onChange={props.bbb} />
            내용2 : <input type="text" onChange={props.ccc} />
            제목3 : <input type="text" onChange={props.ddd} />
            <QQQ.BlueButton onClick={props.aaa}> GRAPHQL API 요청 하기 </QQQ.BlueButton>
        </div>
    )
}