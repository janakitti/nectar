import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './TextArea';

export default {
  title: 'Nectar/Forms/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const TextArea1 = Template.bind({});
TextArea1.args = {
  type: 'text',
  placeholder: 'Enter text',
};
