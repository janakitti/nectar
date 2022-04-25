import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';
import Header1 from '../../Copy/Header1/Header1';
import Body1 from '../../Copy/Body1/Body1';
import ThemeContext from '../../Utility/ThemeContext';
import { defaultTheme } from '../../../theme/theme';

export default {
  title: 'Nectar/Containers/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <ThemeContext theme={defaultTheme}>
    <Card label="e">
      <Header1>Hello Card</Header1>
      <Body1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </Body1>
    </Card>
  </ThemeContext>
);

export const Card1 = Template.bind({});
