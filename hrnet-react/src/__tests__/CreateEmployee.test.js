// src/tests/CreateEmployee.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateEmployee from '../pages/CreateEmployee';


// Mock Modal.setAppElement
jest.mock('react-modal', () => {
    const modal = jest.requireActual('react-modal');
    modal.setAppElement = () => {};
    return modal;
});

beforeEach(() => {
    localStorage.clear();
});

test('renders Create Employee form', () => {
    const { getByLabelText, getByText } = render(<CreateEmployee />);
    expect(getByLabelText('First Name')).toBeInTheDocument();
    expect(getByText('Save')).toBeInTheDocument();
});

test('submits form and saves employee data', () => {
    const { getByLabelText, getByText } = render(<CreateEmployee />);

    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Street'), { target: { value: '123 Main St' } });
    fireEvent.change(getByLabelText('City'), { target: { value: 'Anytown' } });
    fireEvent.change(getByLabelText('Zip Code'), { target: { value: '12345' } });

    fireEvent.click(getByText('Save'));

    // Check if the modal is opened
    expect(getByText('Employee Created!')).toBeInTheDocument();

    // Check if data is saved in localStorage
    const employees = JSON.parse(localStorage.getItem('employees'));
    expect(employees).toHaveLength(1);
    expect(employees[0].firstName).toBe('John');
    expect(employees[0].lastName).toBe('Doe');
});

test('renders modal on form submission', () => {
    const { getByLabelText, getByText } = render(<CreateEmployee />);

    fireEvent.change(getByLabelText('First Name'), { target: { value: 'Jane' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });

    fireEvent.click(getByText('Save'));

    expect(getByText('Employee Created!')).toBeInTheDocument();
});

test('date pickers are functioning correctly', () => {
    const { getByLabelText } = render(<CreateEmployee />);

    // Check if date pickers are present
    expect(getByLabelText('Date of Birth')).toBeInTheDocument();
    expect(getByLabelText('Start Date')).toBeInTheDocument();
});
