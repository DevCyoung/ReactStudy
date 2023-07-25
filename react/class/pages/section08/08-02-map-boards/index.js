import { useQuery, gql } from '@apollo/client'

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

export default function StaticRoutingPage() {

    //쿼리문은 {}
    const { data } = useQuery(FETCH_BOARDS);

    console.log(data?.fetchBoards);

    return (
        //jsx라서 감싸줘야함
        //이건 자바스크립트야! 알려주기위해서 {}로 감싼다.
        //1 제목 작성자
        <div>
            <div>
                {data?.fetchBoards.map(el => (
                    <div>
                        <span> <input type = "checkbox"></input></span>
                        <span style={{margin: "10px"}}>{el.number}</span>
                        <span style={{margin: "10px"}}>{el.title}</span>
                        <span style={{margin: "10px"}}>{el.writer}</span>                        
                    </div>
                ))}
            </div>
        </div>

    )
}