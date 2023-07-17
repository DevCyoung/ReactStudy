import {useMutation, gql} from '@apollo/client'
import { useState } from 'react';

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

    const [writer, setWrite] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();

    //실행시키고 싶은함수
    //use는 Hock 이다.
    const [myFun] = useMutation(myGraphQLSetting);

    const onClickSubmit = async () => {
        const result = await myFun({
          variables: {  //$ or variables
             writer: writer,             
             title: title,
             contents: contents
          }
        });
        console.log(result);
    }

    const onChangeWriter = (event) => {
      setWrite(event.target.value);
    }

    const onChangeContents = (event) => {
      setTitle(event.target.value);
    }

    const onChangeTitle = (event) => {
      setContents(event.target.value);
    }

    //한줄일 땐 괄호필요없음
    return (
        <div>
          작성자 : <input type = "text" onChange = {onChangeWriter} />
          내용 : <input type = "text" onChange = {onChangeContents} />
          제목 : <input type = "text" onChange = {onChangeTitle} />
          <button onClick = {onClickSubmit}> GRAPHQL API 요청 하기 </button>
        </div>
        
    )
}
