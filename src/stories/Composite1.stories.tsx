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
import { ThemeContext } from '../components';
import { defaultTheme } from '../theme/theme';
import HSplit from '../components/Structures/HSplit';

export default {
  title: 'Nectar/Composites/Composite1',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeContext theme={defaultTheme}>
    <div style={{ height: '100vh' }}>
      <VSplit fLeft={15}>
        <div style={{ backgroundColor: '#eeeeee' }}>
          <HSplit fTop={10}>
            <VContainer alignItems="center" justifyContent="center">
              <Header1>Nectar</Header1>
            </VContainer>
            <VContainer alignItems="center" px={1} py={1} gap={1}>
              <Card>
                <Header1>Card 1</Header1>
              </Card>
              <Card>
                <Header1>Card 1</Header1>
              </Card>
              <Card>
                <Header1>Card 1</Header1>
              </Card>
              <Card>
                <Header1>Card 1</Header1>
              </Card>
            </VContainer>
          </HSplit>
        </div>
        <VSplit fRight={10}>
          <VContainer px={1} py={1}>
            <Header1 pb={1}>Form</Header1>
            <TextField type="text" label="" placeholder="Enter text" pb={1}></TextField>
            <TextArea placeholder="Enter body"></TextArea>
          </VContainer>
          <div style={{ backgroundColor: '#eeeeee' }}></div>
        </VSplit>
      </VSplit>
    </div>
  </ThemeContext>
);

export const Composition = Template.bind({});
