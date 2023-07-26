


export default function SimpleChild1(props){
    return (
        <div>
            <div id="qqq"> {props.count} </div>
            <button onClick={props.onClickCount}>카운트 올리기!!</button>            
        </div>
    )
}

