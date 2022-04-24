import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import { Level } from '../../shared/PropTypes';
import { ThemeProvider } from 'styled-components';
import ThemeContext from '../Utility/ThemeContext';

export default {
  title: 'Nectar/Forms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeContext
    theme={{
      colors: {
        primary0: '#00ff00',
      },
    }}
  >
    <Button {...args} />
  </ThemeContext>
);

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  label: 'Primary',
  type: Level.primary,
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  label: 'Secondary',
  type: Level.secondary,
};
