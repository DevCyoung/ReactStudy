import { useMutation } from '@apollo/client'
import { useState } from 'react';

import DefaultUI from './BoardWrite.presenter';
import { UPDATE_BOARD, myGraphQLSetting } from './BoardWrite.queries';
import { useRouter } from 'next/router';
//컨트롤 + i 불들어오는거선택

export default function BoardWrite(props) {

  const [writer, setWrite] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const router = useRouter();

  //실행시키고 싶은함수
  //use는 Hock 이다.
  const [myFun] = useMutation(myGraphQLSetting);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await myFun({
      variables: {  //$ or variables
        writer: writer,
        title: title,
        contents: contents
      }
    });
    
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
  }

  const onClickUpdate = async () => {
    const result = await updateBoard({
      variables : {
        number: Number(router.query.number),
        writer: writer,
        title: title,
        contents: writer,
      }
    });

    console.log("update");
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
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

  return (
    <div>
      <div>###BoardWrite</div>
      <DefaultUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeContents={onChangeContents}
        onChangeTitle={onChangeTitle}
        isEdit={props.isEdit}/>
      <div>###BoardWrite</div>
    </div>
  )
}