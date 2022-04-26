import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HSplit from './HSplit';
import Header1 from '../../Copy/Header1/Header1';

export default {
  title: 'Nectar/Structures/HSplit',
  component: HSplit,
} as ComponentMeta<typeof HSplit>;

const Template: ComponentStory<typeof HSplit> = (args) => (
  <div style={{ height: '100vh' }}>
    <HSplit {...args}>
      <div style={{ backgroundColor: 'red' }}>
        <Header1>Top Section</Header1>
      </div>
      <div style={{ backgroundColor: 'blue' }}>
        <Header1>Bottom Section</Header1>
      </div>
    </HSplit>
  </div>
);

export const HSplit1 = Template.bind({});
HSplit1.args = {
  fLeft: 10,
};
