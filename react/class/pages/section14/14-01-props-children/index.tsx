import PropsExample from "../14-01-props-children-example"

export default function PropsChildrenPage() {
    return (
        <div>
            <div>####PropsChildrenPage!####</div>
            <PropsExample school="다람쥐 초등학교">
                <div>                    
                    <div>비밀번호를 입력하세요 <input></input></div>
                </div>
            <div>First</div>
            </PropsExample>
            <div>Last</div>
            <div>####PropsChildrenPage!####</div>
        </div>
    )
}