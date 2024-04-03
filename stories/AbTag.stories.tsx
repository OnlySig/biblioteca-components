import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbTag, AbTagProps } from '../src/components/AbTag'
import React from 'react'

export default {
    title: 'components/AbTag',
    component: AbTag
} as ComponentMeta<typeof AbTag>

const Template: ComponentStory<typeof AbTag> = (args) => <AbTag {...args}/>

export const Primario = Template.bind({})

Primario.args = {
    texto: 'Text exemple'
} as AbTagProps