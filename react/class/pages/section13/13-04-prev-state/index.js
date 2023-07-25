import {useState} from "react"

export default function Counter(){
    //let count = 0 let 리액트 전용 html에서 변경을 감지하지못하기때문에 state를 사용해야함

    const [count, setCount] = useState(0) //react에서 제공하는기능

    
    function OnClickCountUp(){
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        //setCount( (prev) => {
        //    prev + 1
        //}
        //);  
        console.log("world!");

        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    function OnClickCountDown(){
        setCount(count - 1);
    }

    //부모요소가 있어야함
    return (
        <div>
            <div id="qqq"> {count} </div>
            <button onClick={OnClickCountUp}>카운트 올리기!!</button>
            {/* <button onClick={OnClickCountDown}>카운트 내리기!!</button> */}
        </div>
    )
}

