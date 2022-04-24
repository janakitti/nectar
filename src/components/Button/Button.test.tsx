import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';
import { Level } from '../../shared/PropTypes';

describe('Button', () => {
  test('renders the Button component', () => {
    render(<Button type={Level.primary} label="Hello world!" />);
  });
});
