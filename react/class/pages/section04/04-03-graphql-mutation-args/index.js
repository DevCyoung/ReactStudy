import {useMutation, gql} from '@apollo/client'

//graph ql setting 을 위한 gql

const myGraphQLSetting = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }
  }
`

export default function GraphqlMutation() {

    //실행시키고 싶은함수
    //use는 Hoock 이다.
    const [myFun] = useMutation(myGraphQLSetting);

    const onClickSubmit = async () => {
        const result = await myFun({
          variables: {  //$ or variables
             writer: "훈이",
             title: "안녕하세요!!",
             contents: "반갑습니다!"
          }
        });
        console.log(result);
    }

    //한줄일 땐 괄호필요없음
    return (
        <button onClick = {onClickSubmit}> GRAPHQL API 요청 하기 </button>
    )
}