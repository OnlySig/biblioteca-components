import React from "react"
import styled from "styled-components"

const StyledTag = styled.div `
    color: #FFF;
    background-color: #EB9B00;
    font-size: 24px;
    width: fit-content;
    padding: 24px 32px;
    font-family: sans-serif;
    font-weight: 700;
    p {
        margin: 0;
    }
`
export interface AbTagProps {
    texto: string
}

export const AbTag = ({texto}:AbTagProps) => {
    return(
        <StyledTag>
            <p>{texto}</p>
        </StyledTag>
    )
}