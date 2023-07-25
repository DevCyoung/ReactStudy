import React from "react";

export default function TypeScriptPage(){
    
    //타입스크립트의 타입추론
    let aaa = "안녕하세여";    
    
    //타입명시
    let bbb:string = "반갑습니다";
    //bbb = 10;

    // 타입명시가 필요한 상황
    let ccc:number | string = 1000;    
    ccc = "1000d원";    

    //숫자타입
    let ddd:number = 10;
    //ddd = 철수
    
    //불린타입
    let eee: boolean = true;
    eee = false;
    //eee = "false"; // false도 boolean에선 true

    //배열타입
    let fff:number[] = [1,2,3,4,5];
    //let xxx:number[] = [1,2,3,4,5, "안녕하세요"];

    //let www:string[] = ["철수", "영히", 10];

    let hhh:(string | number)[] = ["철수", "영희", "훈이", 10]; //타입을 추론해서 어떤타입사용하는지 알아보기

    //객체타입
    interface IProfile{
        name: string
        age: number | string
        school: string
        hobby?: string        
    }

    //hobby?: string  있어도되고 없어도되고


    // const profile = {
    //     name: "철수",
    //     age: 8,
    //     school: "다람쥐 초등학교"
    // }

    //profile.name = "훈이";

    //profile.age = "8살"; ..No
    //profile.hobby = "수영" ..No


    const profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐 초등학교"
    }
    
    profile.name = "훈이";
    profile.age = "8살";
    profile.hobby = "수영";


    // 함수타입
    function add(num1: number, num2: number, unit: string): string { //return Type
        return num1 + num2 + unit
    }    
    const result = add(1000, 2000, "원"); //타입을 알수있다
    
    //화살표함수
    const add2 = (num1: number, num2: number, unit: string): string => {
        return num1 + num2 + unit;        
    }

    add2(2, 3,"ㅇ");
    

    //add("철수", 2000, "원"); No





    
    return (
        <div>            
        </div>        
    )
}