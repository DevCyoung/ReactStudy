import {useMutation, gql} from '@apollo/client'

import { IMutation, IMutationCreateBoardArgs } from '../../../src/commons/types/generated/types';
import React from 'react';
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
  

    //const [writer, setWrite] = useState<string | number>("");

  
    //const [myFun] = useMutation<결과타입, 변수타입>(myGraphQLSetting);
    const [myFun] = useMutation<Pick<IMutation, "createBoard" >, IMutationCreateBoardArgs>(myGraphQLSetting);

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