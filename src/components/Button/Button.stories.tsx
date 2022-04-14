import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import { Level } from '../../shared/PropTypes';

export default {
  title: 'Nectar/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

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
