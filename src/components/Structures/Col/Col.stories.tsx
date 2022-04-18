import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Col from './Col';
import Header1 from '../../Copy/Header1/Header1';
import Card from '../../Containers/Card/Card';
import { Direction } from '../../../shared/PropTypes';
import Row from '../Row';

export default {
  title: 'Nectar/Structures/Col',
  component: Col,
} as ComponentMeta<typeof Col>;

const Template: ComponentStory<typeof Col> = (args) => (
  <div style={{ height: '100vh' }}>
    <Row bgColor="#0000ff">
      <Col bgColor="#ff0000" width={{ md: 1, lg: 2 }}>
        <Header1 pl={1}>One</Header1>
      </Col>
      <Col bgColor="#00ff00" width={{ md: 2, lg: 1 }}>
        <Header1 pl={1}>One</Header1>
      </Col>
    </Row>
  </div>
);

export const Col1 = Template.bind({});
Col1.args = {};
