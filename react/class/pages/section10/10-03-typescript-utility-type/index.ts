export interface IProfile {
    name: string
    age: number
    school: string
    hobby?: string
}

// export interface IProfile2 {
//     name: string
//     age: number
//     school: string
//     hobby: string
// }

// 1. Partial 타입
type aaa = Partial<IProfile>

//2.Rqeuiired 타입
//모든물음표 삭제
type bbb = Required<IProfile>


//3. Pick Type
type ccc = Pick<IProfile, "name" | "age">


//4. Omit 타입
type ddd = Omit<IProfile, "school">

//5.Recod 타입
type eee = "철수" | "영희" | "훈이" // union 타입
let child:eee = "훈이";

type fff = Record<eee, IProfile>


//keyof
type ggg = keyof IProfile // "name" | "age" | "shcool" | "hoby"
let myprofile:ggg = "age";


//type 과 인터페이스의차이 => 선언 병합
export interface IProfile {
    candy: number    //선언 병합으로 추가됨
}


//응용
let profile: Partial<IProfile> = {
    candy : 1
}