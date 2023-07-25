import {useQuery,gql} from '@apollo/client'

//쿼리를담을 변수
const FETCH_BOARD = gql`
query {
    fetchBoard(number: 203){
      number
      writer
      title
      contents
    }
  }
`

export default function StaticRoutingPage(){

    //쿼리문은 {}
    const {data} = useQuery(FETCH_BOARD);

    console.log(data);

    return (
        //jsx라서 감싸줘야함
        //이건 자바스크립트야! 알려주기위해서 {}로 감싼다.
        <div>
            <div> 3번게시글 이동이 완료되었습니다. </div>
            <div> 작성자 : {data?.fetchBoard.number} </div> 
            <div> 제목 : {data?.fetchBoard.title} </div> 
            <div> 내용 : {!data ? "데이터있다!" : "데이터없다!"} </div>
            <div> 내용 : {data ? "데이터있다!" : "데이터없다!"} </div>
        </div>
    
    )
}