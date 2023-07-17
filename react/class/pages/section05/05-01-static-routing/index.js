import {useRouter} from 'next/router' 
//리액트의 업그레이드 next

export default function StaticRoutingPage(){

    const router = useRouter();

    const onClickMove = () =>{
        router.push("/section05/05-01-static-routing-moved"); //주소창에 치는것처럼 입력        
    }




    return <button onClick={onClickMove}> 페이지 이동하기 !! </button>
}