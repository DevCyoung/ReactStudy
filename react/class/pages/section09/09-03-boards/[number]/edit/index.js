import BoardWrite from "../../../../../src/components/units/board/09-write/BoardWrite.container"

export default function GraphqlMutation() {

  //한줄일 땐 괄호필요없음
  return (
    <div>
      <div>####여기는페이지입니다####</div>
      <BoardWrite isEdit={true}/>
      <div>####여기는페이지입니다####</div>
    </div>
  )
}
