import { useQuery, useMutation, gql } from '@apollo/client'
import { Fragment } from 'react';
//쿼리를담을 변수

//목록을전체 다가져오기
//10개씩 날라오는이유 백엔드에서 그냥 그렇게 만들어서
const FETCH_BOARDS = gql`
  query {
    fetchBoards{
      number
      writer
      title
      contents
    }
  }
`

// const DELETE_BOARD = gql`
//   mutation {
//     deleteBoard(number: 1){
//       message
//     }
//   }
// `

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int){
    deleteBoard(number: $number){
      message
    }
  }
`


export default function StaticRoutingPage() {

  //쿼리문은 {}
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  //console.log(data?.fetchBoards);

  //event.target은 이태그이다.

  const onClickDelete = (event) => {

    deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }]
    })

  }

  return (
    //jsx라서 감싸줘야함
    //이건 자바스크립트야! 알려주기위해서 {}로 감싼다.
    //1 제목 작성자
    <div>
      <div>        
        {data?.fetchBoards.map((el, index) => (      
          //특별한 이유가없으면 Fragment로 감싸자 div는 1개더 그려야함
          //Fragment란? <></>    <Fragment></Fragment>
          //키입력방법 
          <div key={el.number}> {/*index는 게시글ㅇ ㅣ삭제될때 다음 게시글이 올라오면서 기존 index와 동일한 값을 가지게 된다. 유일하지않다*/}
            <span> <input type="checkbox"></input></span>
            <span style={{ margin: "10px" }}>{el.number}</span>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <span style={{ margin: "10px" }}>
              <button id={el.number} onClick={onClickDelete}>삭제</button>
            </span>
          </div>
        ))}
      </div>
    </div>

  )
}