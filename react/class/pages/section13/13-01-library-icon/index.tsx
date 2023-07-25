import React from "react"

import {UpCircleOutlined} from "@ant-design/icons"
import styled from "@emotion/styled"
import type { MouseEvent } from "react"


const MyIcon = styled(UpCircleOutlined)`
    color:  aqua;
    font-size: 50px;

`

export default function LibraryIconPage() {

    const onClickDelete = (event: MouseEvent<HTMLDivElement>): void => {        
        alert(event.currentTarget.id);
    }



    return (
        <div id="삭제할게시글ID" >
            <MyIcon onClick={onClickDelete}/>                   
        </div>
    )
}