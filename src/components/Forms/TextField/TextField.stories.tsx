import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from './TextField';
import ThemeContext from '../../Utility/ThemeContext';
import { defaultTheme } from '../../../theme/theme';

export default {
  title: 'Nectar/Forms/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <ThemeContext theme={defaultTheme}>
    <TextField {...args} />
  </ThemeContext>
);

export const TextField1 = Template.bind({});
TextField1.args = {
  type: 'text',
  placeholder: 'Enter text',
};
