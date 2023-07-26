import styled from "@emotion/styled"

const Wrapper = styled.div`
    height: 50px;
    background-color: magenta;
`

export default function LayoutNavigation() : JSX.Element {
    return (
        <div>
            <Wrapper>Layout 네비게이션 입니다.</Wrapper>            
        </div>
    )
}