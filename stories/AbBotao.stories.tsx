import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbBotao, AbBotaoProps } from '../src/components/AbBotao'
export default {
    title: 'components/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args}/>

export const Primario = Template.bind({})
Primario.args = {
    texto: 'Botão Primario',
    tipo: 'primario'
} as AbBotaoProps

export const Secundario = Template.bind({})
Secundario.args = {
    texto: 'Botão Secundário',
    tipo: 'secundario'
} as AbBotaoProps