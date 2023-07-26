import {useState} from "react"

export default function SimpleChild2(props){    
    function OnClickCountUp(){
        props.setCount(prev => prev + 1);
    }

    //부모요소가 있어야함
    return (
        <div>            
            <button onClick={OnClickCountUp}>카운트 올리기!!</button>
        </div>
    )
}

