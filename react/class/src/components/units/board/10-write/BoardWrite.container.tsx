import { useMutation } from '@apollo/client'
import { useState, ChangeEvent } from 'react';

import DefaultUI from './BoardWrite.presenter';
import { UPDATE_BOARD, myGraphQLSetting } from './BoardWrite.queries';
import { useRouter } from 'next/router';
//컨트롤 + i 불들어오는거선택

import React from 'react';

import { IBoardWriteProps } from './BoardWrite.types';
import { IMyVariables } from './BoardWrite.types';


//데이터가 있어도되고 없어도되고 ? 문법

export default function BoardWrite(props: IBoardWriteProps) {

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
    router.push(`/section10/10-02-typescript-boards/${result.data.createBoard.number}`);
  }

  const onClickUpdate = async () => {


    const  myvariables:IMyVariables = {
      number: Number(router.query.number)
    }
    
    if (writer !== ""){
      myvariables.writer = writer;
    }

    if (title !== ""){
      myvariables.title = title;
    }

    if (contents !== ""){
      myvariables.title = contents;
    }

    // const result = await updateBoard({
    //   variables : {
    //     number: Number(router.query.number),
    //     writer: writer,
    //     title: title,
    //     contents: writer,
    //   }
    // });
    const result = await updateBoard({
      variables : myvariables
    });

    console.log("update");
    router.push(`/section10/10-02-typescript-boards/${result.data.updateBoard.number}`);
  }

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWrite(event.target.value);
  }

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
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
        isEdit={props.isEdit}
        data={props.data} // undefind 이거나 data이거 나둘중하나!
        /> 
      <div>###BoardWrite</div>
    </div>
  )
}