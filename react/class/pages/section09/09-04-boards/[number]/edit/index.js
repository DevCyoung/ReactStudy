import BoardWrite from "../../../../../src/components/units/board/09-write2/BoardWrite.container"
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'



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

export default function GraphqlMutation() {

  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables : {
      number : Number(router.query.number)
    }
  }); //요청할때 달러부분에 값을 넘겨야한다.



  //한줄일 땐 괄호필요없음
  return (
    <div>
      <div>####여기는페이지입니다####</div>
      <BoardWrite isEdit={true} data={data}/>
      <div>####여기는페이지입니다####</div>
    </div>
  )
}
