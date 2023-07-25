import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router';
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

  const router = useRouter();
  const [myFun] = useMutation(myGraphQLSetting);

  const [writer, setWrite] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  //use는 Hoock 이다. //실행시키고 싶은함수
  const onClickSubmit = async () => {
    try {
      const result = await myFun({
        variables: {  //$ or variables
          writer: writer,
          title: title,
          contents: contents
        }
      });

      console.log(result);
      console.log(result.data.createBoard.number);
      
      const url = `/section05/05-05-dynamic-routing-moved-mutation/${result.data.createBoard.number}`;
      router.push(uri);

    } catch (error) {
      alert(error.message);
    }
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
      <div>Write    : <input type="text" onChange={onChangeWriter}/></div>
      <div>Title    : <input type="text" onChange={onChangeContents}/></div>
      <div>Contents : <input type="text" onChange={onChangeTitle}/></div>

      <button onClick={onClickSubmit}> GRAPHQL API 요청 하기 </button>
    </div>
  )
}