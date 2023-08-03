//import '../styles/globals.css'
//
import Apollo from "../src/commons/apollo"
import Layout from "../src/commons/layout"
import { AppProps } from "antd"

//_app.js 모든페이지 에서 하는 공통 설정을 여기서한다.
// export default function App({ Component, pageProps }) {

//   const client = new ApolloClient({
//     uri: "http://practice.codebootcamp.co.kr/graphql",
//     cache: new InMemoryCache // 컴퓨터에다가 백엔드에서 받아온 데이터 임시로 저장해놓기
//   })

export default function App({ Component }: AppProps): JSX.Element {



  //ApolloProvider 제공자로 감싸기
  //앞으로 <Component {...pageProps} /> //지금보는 페이지 에서 이그래프큐펠 셋팅을 사용할수있도록 제공해줄께
  //이게 있어야 그래프 큐엘이가능하다. 도대체 컴퍼넌트가 뭐길래?
  //페이지도 하나의 페이지컴퍼넌트 궁극적으로 실행되는것은 app.js이다 정확히 말하면 apt.js 로이동
  //그래서 모든것을 여기서 결정할수있음
  //     <div> ==== 여기는 _app.js 커퍼넌트 입니다. ========== </div>  jsX 은 부모가 반드시 있어야합니다 오류
  // 모든페이지 설정가능!


  //따라서 모든 컴퍼넌트가 프로바이더에게 내려받고있기때문에 그래프큐엘을 사용할수있게된다.

  return (
    <div>
      <Component />
      {/* <div> ====여기는 _app.tsx 입니다. ========== </div> */}
      {/* <Apollo> */}
      
        {/* <Layout>          
        </Layout> */}
      {/* </Apollo> */}
      {/* <div> ====여기는 _app.tsx 입니다. ========== </div> */}
    </div>
  )
}