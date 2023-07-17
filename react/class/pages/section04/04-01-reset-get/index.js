import axios from "axios"

import Counter from "../../section02/counter"

export default function ResetGetPage(){


    
    // function onClickAsync( ) { 
    //     const result = axios.get("https://koreanjson.com/posts/1");
    //     console.log(result); //Promise
    // }

    // async function onClickSync() {
    //     const result = await axios.get("https://koreanjson.com/posts/1");
    //     console.log(result); // sync result        
    // }

    const onClickAsync = () => {
        const result = axios.get("https://koreanjson.com/posts/1");
        console.log(result); //Promise
    }

    const onClickSync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/2");
        console.log(result);
    }

    return (
        <div>
            <button onClick = {onClickAsync}> RESET-API(비동기) 요청  </button>
            <button onClick = {onClickSync}> RESET-API(동기) 요청  </button>
            <Counter/>
        </div>
    )
}