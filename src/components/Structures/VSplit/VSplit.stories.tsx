import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import VSplit from './VSplit';
import Header1 from '../../Copy/Header1/Header1';

export default {
  title: 'Nectar/Structures/VSplit',
  component: VSplit,
} as ComponentMeta<typeof VSplit>;

const Template: ComponentStory<typeof VSplit> = (args) => (
  <div style={{ height: '100vh' }}>
    <VSplit {...args}>
      <div style={{ backgroundColor: 'red' }}>
        <Header1>Left Section</Header1>
      </div>
      <div style={{ backgroundColor: 'blue' }}>
        <Header1>Right Section</Header1>
      </div>
    </VSplit>
  </div>
);

export const VSplit1 = Template.bind({});
VSplit1.args = {
  fLeft: 20,
};
