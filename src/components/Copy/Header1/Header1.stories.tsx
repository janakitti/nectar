import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header1 from './Header1';

export default {
  title: 'Nectar/Copy/Header1',
  component: Header1,
} as ComponentMeta<typeof Header1>;

const Template: ComponentStory<typeof Header1> = (args) => <Header1>Header 1</Header1>;

export const H1 = Template.bind({});
