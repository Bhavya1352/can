import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import InputField from './InputField';

describe('InputField', () => {
  it('renders with label and placeholder', () => {
    render(<InputField label="Name" placeholder="Enter your name" />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });

  it('calls onChange when the value changes', () => {
    const handleChange = vi.fn();
    render(<InputField label="Name" onChange={handleChange} />);
    const input = screen.getByLabelText('Name');
    fireEvent.change(input, { target: { value: 'John Doe' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('displays helper text', () => {
    render(<InputField label="Name" helperText="Please enter your full name" />);
    expect(screen.getByText('Please enter your full name')).toBeInTheDocument();
  });

  it('displays an error message when invalid', () => {
    render(<InputField label="Name" errorMessage="This field is required" invalid />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('is disabled when the disabled prop is true', () => {
    render(<InputField label="Name" disabled />);
    const input = screen.getByLabelText('Name');
    expect(input).toBeDisabled();
  });

  it('shows a loading spinner when loading', () => {
    render(<InputField label="Name" loading />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});