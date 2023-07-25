import styled from '@emotion/styled'

export const RedInput = styled.input`
    border-color : red;       
`

export const BlueButton = styled.button`
    width : 200px;
    height : 30px;
    background-color : ${(props) =>
        props.isActive ? "red" : "blue"
    };
`
