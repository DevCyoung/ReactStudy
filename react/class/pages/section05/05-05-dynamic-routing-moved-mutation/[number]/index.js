import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

import { number } from 'prop-types';

//쿼리를담을 변수
const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number){
      number
      writer
      title
      contents
    }
  }
`

export default function StaticRoutingPage() {

  //쿼리문은 {}
  // const { data } = useQuery(FETCH_BOARD, {
  //   variables : {
  //     number : 1
  //   }
  // }); //요청할때 달러부분에 값을 넘겨야한다.

  const router = useRouter();
  console.log(router);

  const { data } = useQuery(FETCH_BOARD, {
    variables : {
      number : Number(router.query.number)
    }
  }); //요청할때 달러부분에 값을 넘겨야한다.

  //console.log(data);

  return (
    //jsx라서 감싸줘야함
    //이건 자바스크립트야! 알려주기위해서 {}로 감싼다.
    <div>
      <div> {router.query.number} 번게시글 이동이 완료되었습니다. </div>
      <div> 작성자 : {data?.fetchBoard?.writer} </div>
      <div> 제목 : {data?.fetchBoard?.title} </div>
      <div> 내용 : {data?.fetchBoard?.contents} </div>
    </div>

  )
}