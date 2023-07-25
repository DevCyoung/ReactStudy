import {useRouter} from 'next/router'
//리액트의 업그레이드 next

export default function StaticRoutingPage(){

    const router = useRouter();

    const onClickMove1= () =>{
        router.push("/section05/05-02-static-routing-moved-board/1"); //주소창에 치는것처럼 입력        
    }

    const onClickMove2 = () =>{
        router.push("/section05/05-02-static-routing-moved-board/2"); //주소창에 치는것처럼 입력        
    }

    const onClickMove3 = () =>{
        router.push("/section05/05-02-static-routing-moved-board/3"); //주소창에 치는것처럼 입력        
    }

    return (
        <div>
            <button onClick={onClickMove1}> 1번 게시글로이동하기 </button>
            <button onClick={onClickMove2}> 2번 게시글로이동하기 </button>
            <button onClick={onClickMove3}> 3번 게시글로이동하기 </button>
        </div>        
    )
}