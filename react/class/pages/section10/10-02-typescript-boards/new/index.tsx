import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container"
import React from "react"

export default function GraphqlMutation() {

  //한줄일 땐 괄호필요없음
  return (
    <div>
      <div>####냠냠####</div>      
      <BoardWrite isEdit={false}/>
      <div>####념념####</div>
    </div>
  )
}
