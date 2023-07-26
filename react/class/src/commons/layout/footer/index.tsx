import styled from "@emotion/styled"

const Wrapper = styled.div`
    height: 50px;
    background-color: gray;
`


export default function LayoutFotter() : JSX.Element {
    return (
        <div>
            <Wrapper>Layout 푸터 입니다</Wrapper>            
        </div>
    )
}