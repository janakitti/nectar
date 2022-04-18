import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button';
import { Direction, Level } from '../shared/PropTypes';
import Grid from '../components/Structures/Grid/Grid';
import VSplit from '../components/Structures/VSplit';
import Card from '../components/Containers/Card/Card';
import Header1 from '../components/Copy/Header1';
import TextField from '../components/Forms/TextField';
import TextArea from '../components/Forms/TextArea';
import VContainer from '../components/Structures/VContainer';

export default {
  title: 'Nectar/Composites/Forms1',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ height: '100vh' }}>
    <VSplit fLeft={10}>
      <div style={{ backgroundColor: '#eeeeee' }}></div>
      <VSplit fRight={10}>
        <VContainer>
          <Header1 pb={1}>Form</Header1>
          <TextField type="text" label="" placeholder="Enter text" pb={1}></TextField>
          <TextArea placeholder="Enter body"></TextArea>
        </VContainer>
        <div style={{ backgroundColor: '#eeeeee' }}></div>
      </VSplit>
    </VSplit>
  </div>
);

export const Composition = Template.bind({});
Composition.args = {};
