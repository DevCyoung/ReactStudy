import { useState } from "react"

export default function SignupStatePage() {

    const [sEmail, setEmail] = useState("");
    const [sPassword, setPassword] = useState("");
    const [sEmailError, setEmailError] = useState(" ");    

    function OnChangeEmail(event){ // event가 들어온다.
        console.log(event); // 나의 행동
        console.log(event.target);
        console.log(event.target.value);

        setEmail(event.target.value);
    }

    function OnChangePassword(event){
        setPassword(event.target.value);
    }

    function OnClickSignup(event) { //on 뒤의함수들은 event 가 파라미터로 들어올수있음 event 핸들러라함
        console.log("########sing up########")
        console.log(sEmail);
        console.log(sPassword);

        //1. 데이터 유효성 검증
        //const myEmail = document.getElementById("qqq").value

        if (sEmail.includes("@") === false) {
            //alert("이메일이 올바르지 않습니다!! @가 없음!!")
            setEmailError("이메일이 올바르지 않습니다!! @가 없음!!");                        
            //document.getElementById("myError").innerText = "이메일이 올바르지 않습니다!! @가 없음!!";            
        } else {
            //2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수. API 호출)
            //=> 나중에

            //3. 성공알람 보여주기
            setEmailError("");
            alert("회원 가입을 축하합니다!");            
        }

    }

    return (
        <div>
            이메일: <input type="text" onChange={OnChangeEmail} />
            {/*<div id = "myError"> </div>*/}

            <div>{sEmailError}</div>

            비밀번호: <input type="password" onChange={OnChangePassword}/>
            <button onClick={OnClickSignup}>회원가입</button>
        </div>
    )
}