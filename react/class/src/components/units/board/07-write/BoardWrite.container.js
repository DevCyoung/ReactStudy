import { useMutation } from '@apollo/client'
import { useState } from 'react';

import DefaultUI, { BoardWriteUI2 } from './BoardWrite.presenter';
import { myGraphQLSetting } from './BoardWrite.queries';
//컨트롤 + i 불들어오는거선택

export default function BoardWrite(props) {

  const [writer, setWrite] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [isActive, setIsActive] = useState(false);

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

    if (event.target.value && title && contents) {
      setIsActive(true);
    }
    else 
    {
      setIsActive(false);
    }
  }

  const onChangeTitle = (event) => {
    setContents(event.target.value);

    if (writer && title && event.target.value) {
      setIsActive(true);
    }
    else 
    {
      setIsActive(false);
    }
  }

  const onChangeContents = (event) => {
    setTitle(event.target.value);

    if (writer && contents && event.target.value) {
      setIsActive(true);
    }
    else 
    {
      setIsActive(false);
    }
  }




  return (
    <div>
      <BoardWriteUI2
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeContents={onChangeContents}
        onChangeTitle={onChangeTitle}
        isActive={isActive}
      />
    </div>
  )
}