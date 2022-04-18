import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button';
import { Direction, Level } from '../shared/PropTypes';
import Grid from '../components/Structures/Grid/Grid';
import VSplit from '../components/Structures/VSplit';
import Card from '../components/Containers/Card/Card';
import Header1 from '../components/Copy/Header1';
import VContainer from '../components/Structures/VContainer';
import Body1 from '../components/Copy/Body1';

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
            <VContainer>
              <Header1 pb={0.5}>This is a card</Header1>
              <Body1 pb={0.5}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </Body1>
              <Button
                type={Level.primary}
                label="
                  Click me"
              />
            </VContainer>
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
