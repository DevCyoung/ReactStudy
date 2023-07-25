import {useRouter} from 'next/router'
//리액트의 업그레이드 next

export default function StaticRoutingPage(){

    const router = useRouter();

    const onClickMove1= () =>{
        router.push("/section05/05-04-dynamic-routing-moved-query/1"); //주소창에 치는것처럼 입력        
    }

    const onClickMove2 = () =>{
        router.push("/section05/05-04-dynamic-routing-moved-query/2"); //주소창에 치는것처럼 입력        
    }

    const onClickMove3 = () =>{
        router.push("/section05/05-04-dynamic-routing-moved-query/3"); //주소창에 치는것처럼 입력        
    }

    return (
        <div>
            <button onClick={onClickMove1}> 1번 query 게시글로이동하기 </button>
            <button onClick={onClickMove2}> 2번 query 게시글로이동하기 </button>
            <button onClick={onClickMove3}> 3번 query 게시글로이동하기 </button>
        </div>        
    )
}