import React, { ReactNode } from "react"
import styled from "styled-components"
const ContainerCard = styled.div `
    padding: 48px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #FFF;
    max-width: 725px;
`
interface ICard {
    children: ReactNode
}

export const AbCard = ({ children } : ICard) => {
    return (
        <ContainerCard>
            {children}
        </ContainerCard>
    )
}
