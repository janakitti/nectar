import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Body1 from './Body1';

export default {
  title: 'Nectar/Copy/Body1',
  component: Body1,
} as ComponentMeta<typeof Body1>;

const Template: ComponentStory<typeof Body1> = (args) => (
  <Body1>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book. It has survived not only five centuries,
    but also the leap into electronic typesetting, remaining essentially unchanged. It was
    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of
    Lorem Ipsum.
  </Body1>
);

export const B1 = Template.bind({});
