import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './TextArea';
import ThemeContext from '../../Utility/ThemeContext';
import { defaultTheme } from '../../../theme/theme';

export default {
  title: 'Nectar/Forms/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <ThemeContext theme={defaultTheme}>
    <TextArea {...args} />
  </ThemeContext>
);

export const TextArea1 = Template.bind({});
TextArea1.args = {
  placeholder: 'Enter text',
};
