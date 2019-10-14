// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';
import Controls from '../controls/Controls';

test('Display renders correctly', () => {
	expect(render(<Dashboard />)).toMatchSnapshot();
});
