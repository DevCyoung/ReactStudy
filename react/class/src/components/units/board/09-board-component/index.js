
//컴퍼넌트 형식으로 사용할땐 div로 벽만드는게 좋다.
export default function BoardComponent(props) {
    return (
        <div>
            <h1>{props.name}페이지</h1>
            제목: <input type="text" /> <br />
            내용: <input type="text" /> <br />
            <button>{props.name}하기</button> <br />
        </div>
    )
}