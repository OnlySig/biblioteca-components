import React from "react"
import styled from "styled-components"

const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 589px;
    font-family: sans-serif;
    label{
        color: #002F52;
        font-weight: 700;
        font-size: 16px;
    }
    input{
        padding: 10px 24px;
        border-radius: 24px;
        border: 1px solid #002F52;
    }
    ::placeholder{
        color: #A4A4A4;
    }
`

export interface AbInputProps {
    label: string
    placeholder: string
    type?: 'text' | 'email' | 'password' | 'date'
    value: string
    onChange: (value: string) => void
}

export const AbInput = ({ label, placeholder, type = 'text', onChange, value }:AbInputProps) => {
    return(
        <StyledInput>
            <label htmlFor={label}>{label}</label>
            <input type={type} id={label} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)}/>
        </StyledInput>
    )
}