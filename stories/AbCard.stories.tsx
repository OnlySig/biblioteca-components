import { ComponentMeta } from '@storybook/react'
import { AbCard } from '../src/components/AbCard'
import React from 'react'
export default {
    title: 'components/AbCard',
    component: AbCard
} as ComponentMeta<typeof AbCard>

export const CardComponent = () => {
    return (<AbCard>
        <h1>Olá, eu sou um card</h1>
    </AbCard>)
}