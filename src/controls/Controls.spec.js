// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test('Display renders correctly', () => {
	expect(render(<Controls />)).toMatchSnapshot();
});

describe('Default controls are showing', () => {
	it('shows lock gate button', () => {
		const { getByText } = render(<Controls />);
		getByText(/lock gate/i);
	});

	it('shows close gate button', () => {
		const { getByText } = render(<Controls />);
		getByText(/close gate/i);
	});
});

describe('Buttons show correctly when props are changed', () => {
	it('Button says unlock gate when gate is locked', () => {
		const { getByText } = render(<Controls locked={true} />);
		getByText(/unlock gate/i);
	});
	it('Button says open gate when gate is closed', () => {
		const { getByText } = render(<Controls closed={true} />);
		getByText(/open gate/i);
	});
});

describe('Buttons open/close button toggles the closed property correctly', () => {
	it('closed prop changes from false to true when button is clicked', () => {
		const toggleClosedMock = jest.fn();
		const { getByText } = render(<Controls toggleClosed={toggleClosedMock} closed={false} />);
		const button = getByText(/close gate/i);
		fireEvent.click(button);
		expect(toggleClosedMock).toHaveBeenCalled();
		expect(toggleClosedMock).toBeCalledWith(false);
	});
});
