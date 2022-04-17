import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button';
import { Direction, Level } from '../shared/PropTypes';
import Grid from '../components/Structures/Grid/Grid';
import VSplit from '../components/Structures/VSplit';
import Card from '../components/Containers/Card/Card';
import Header1 from '../components/Copy/Header1';

export default {
  title: 'Nectar/Composites/CardLayout',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div>
    <VSplit fLeft={10}>
      <div>
        <Grid direction={Direction.down}>
          {['One', 'Two', 'Three', 'Four', 'Five'].map((i) => (
            <Card label="">
              <Header1>{i}</Header1>
            </Card>
          ))}
        </Grid>
      </div>
      <Grid direction={Direction.right}>
        {['One', 'Two', 'Three', 'Four', 'Five'].map((i) => (
          <Card label="">
            <Header1>{i}</Header1>
          </Card>
        ))}
      </Grid>
    </VSplit>
  </div>
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
