import styled from "@emotion/styled"

const Wrapper = styled.div`
    height: 50px;
    background-color: blue;
`

export default function LayoutHeader() : JSX.Element {
    return (
        <div>
            <Wrapper>Layout 헤더 입니다</Wrapper>            
        </div>
    )
}