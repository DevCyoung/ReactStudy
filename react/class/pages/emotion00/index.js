//<div className> </div> react 전용 HTML JSX

//css IN JS

//export default 이걸내보내줘

import {MyEmail, MyEmailInput} from '../../styles/emotion00'

export default function EmotionPage(){
    return (
        //Emotion 실습
        //CSS-IN-JS 1. styiled - components 
        //-> styiled componets의 업그레이드버전 emotion 지금 배우는입장에선 둘다 똑같은 코드만 사용한다.
        <div> 
            <MyEmail>이메일: </MyEmail>
            <MyEmailInput type="text"></MyEmailInput>
            <button>클릭하세여</button>
            <img src="/next.svg"></img> 
        </div>
    )
}
//publiuc/next.sgv
