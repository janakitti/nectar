import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from './Grid';
import Header1 from '../../Copy/Header1/Header1';
import Card from '../../Containers/Card/Card';
import { Direction } from '../../../shared/PropTypes';

export default {
  title: 'Nectar/Structures/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <div style={{ height: '100vh' }}>
    <Grid {...args}>
      <Card label="">
        <Header1>Left Section</Header1>
      </Card>
      <Card label="">
        <Header1>Left Section</Header1>
      </Card>
      <Card label="">
        <Header1>Left Section</Header1>
      </Card>
      <Card label="">
        <Header1>Left Section</Header1>
      </Card>
    </Grid>
  </div>
);

export const Grid1 = Template.bind({});
Grid1.args = {
  direction: Direction.right,
  isWrapped: true,
};
