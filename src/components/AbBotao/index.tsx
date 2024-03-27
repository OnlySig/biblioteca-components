import React from "react"
import styled from "styled-components"

const BotaoStyled = styled.button`
    cursor: pointer;
    background-color: #EB9B00;
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: #FFF;
    font-size: 20px;
    transition: .3s;
    &:hover {
        background-color: #B87900;
        border-color: #B87900;
    }
`

export const AbBotao = () => {
    return(
        <BotaoStyled>
            Clique aqui!
        </BotaoStyled>
    )
}