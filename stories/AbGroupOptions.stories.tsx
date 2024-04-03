import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbGroupOptions, AbGrupoOpcoesProps } from '../src/components/AbGroupOptions'
export default {
    title: 'components/AbGroupOptions',
    component: AbGroupOptions
} as ComponentMeta<typeof AbGroupOptions>

const Template: ComponentStory<typeof AbGroupOptions> = (args) => <AbGroupOptions {...args} />

export const Padrao = Template.bind({})
Padrao.args = { 
    opcoes: [
        {
            id: 1,
            titulo: 'E-book',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 2,
            titulo: 'Impresso',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 3,
            titulo: 'Impresso + E-book',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mob'
        }
    ]
} as AbGrupoOpcoesProps