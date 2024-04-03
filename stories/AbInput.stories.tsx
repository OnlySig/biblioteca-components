import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbInput, AbInputProps } from '../src/components/AbInput'

export default {
  title: 'components/AbInput',
  component: AbInput,
  argTypes: {
    label: {
        control: 'text'
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbInput>;

const Template: ComponentStory<typeof AbInput> = (args) => <AbInput {...args} />;

export const AbCampoTextoComponent = Template.bind({})
AbCampoTextoComponent.args = {
    label: 'Uma label interessante',
    placeholder: 'Um placeholder interessante'
} as AbInputProps