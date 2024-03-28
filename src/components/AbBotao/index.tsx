import React from "react"
import styled, { css } from "styled-components"
export interface AbBotaoProps {
    texto?: string
    tipo?: 'primario' | 'secundario'
    onClick?: () => void
}
const BotaoStyled = styled.button<AbBotaoProps>`
    cursor: pointer;
    background-color: ${(props: AbBotaoProps)=> props.tipo === 'primario' ? '#EB9B00' : '#FFF'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: AbBotaoProps)=> props.tipo === 'primario' ? '#FFF' : '#EB9B00' };
    font-size: 20px;
    transition: .3s;
    ${(props: AbBotaoProps)=> props.tipo === 'primario' 
        ? css`
            &:hover {
                background-color: #B87900;
                border-color: #B87900;
            }`
        : css`
            &:hover {
                color: #B87900;
                border-color: #B87900;
            }`
    };
`

export const AbBotao = ({ onClick, texto, tipo = 'primario' }:AbBotaoProps) => {
    return(
        <BotaoStyled onClick={onClick} tipo={tipo}>
            {texto}
        </BotaoStyled>
    )
}

