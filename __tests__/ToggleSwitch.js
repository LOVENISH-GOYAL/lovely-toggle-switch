import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleSwitch from '../src/ToggleSwitch';

describe('ToggleSwitch', () => {
  it('renders without crashing', () => {
    render(<ToggleSwitch keyId="test" checked={false} onChange={() => {}} disabled={false} />);
  });

  // it('renders correctly with labels', () => {
  //   const { getByLabelText } = render(<ToggleSwitch keyId="test" checked={false} onChange={() => {}} disabled={false} />);
    
  //   const yesLabel = getByLabelText('Yes');
  //   const noLabel = getByLabelText('No');

  //   expect(yesLabel).toBeInTheDocument();
  //   expect(noLabel).toBeInTheDocument();
  // });

  it('calls onChange when clicked', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<ToggleSwitch keyId="test" checked={false} onChange={onChangeMock} disabled={false} />);
    fireEvent.click(getByRole('checkbox'));
    expect(onChangeMock).toHaveBeenCalled();
  });

  // Add more tests as needed
});
