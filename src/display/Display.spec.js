// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('Display renders correctly', () => {
	expect(render(<Display />)).toMatchSnapshot();
});

describe('Default panels display correctly', () => {
	it('Displays unlocked on panel', () => {
		const { getByText } = render(<Display />);
		getByText(/unlocked/i);
	});
	it('Displays Open on panel', () => {
		const { getByText } = render(<Display />);
		getByText(/open/i);
	});
});

describe('Panels render correctly if props are changed', () => {
	it('Displays locked on panel', () => {
		const { getByText } = render(<Display locked={true} />);
		getByText(/locked/i);
	});
	it('Displays closed on panel', () => {
		const { getByText } = render(<Display closed={true} />);
		getByText(/closed/i);
	});
});
