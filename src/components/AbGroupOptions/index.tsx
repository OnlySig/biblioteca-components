import React, { useState } from "react"
import styled from "styled-components"

const StyledSection = styled.section<{ selecionado: boolean }>`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    border-radius: 8px;
    border: 1px solid ${props => props.selecionado ? '#002F52' : '#EB9B00'};
    background: ${props => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFF'};
    padding: 10px 40px;
    width: fit-content;
    font-family: sans-serif;
    margin: 10px;
    header{
        color: ${props => props.selecionado ? '#FFF' : '#EB9B00' };
        font-size: 12px;
        font-weight: 400;
    }
    strong{
        color: ${props => props.selecionado ? '#FFF' : '#EB9B00' };
        font-size: 16px;
        font-weight: 700;
    }
    footer{
        color: ${props => props.selecionado ? '#FFF' : 'rgba(0, 0, 0, .54)' };
    }
`
export interface AbGrupoOpcao {
    id: number
    titulo: string
    corpo: string
    rodape: string
}

export interface AbGrupoOpcoesProps {
    opcoes: AbGrupoOpcao[]
    valorPadrao?: AbGrupoOpcao | null
    onChange?: (opcao: AbGrupoOpcao) => void
}

export const AbGroupOptions = ({ opcoes, onChange, valorPadrao }:AbGrupoOpcoesProps) => {
    const [selec, setSelec] = useState<AbGrupoOpcao | null >(valorPadrao ?? null)
    const aoSelecionar = (opcao: AbGrupoOpcao): void => {
        setSelec(opcao)
        if(onChange)onChange(opcao)
    }
    return(
        <>
            {opcoes.map(opcao => 
                <StyledSection onClick={()=>aoSelecionar(opcao)} key={opcao.id} selecionado={selec?.id === opcao.id}>
                    <header>{opcao.titulo}</header>
                    <div>
                        <strong>{opcao.corpo}</strong>
                    </div>
                    <footer>
                        {opcao.rodape}
                    </footer>
                </StyledSection>
            )}
        </>
    )
} 