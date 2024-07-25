import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CreateEmployee from '../pages/CreateEmployee';
import { BrowserRouter as Router } from 'react-router-dom';

describe('CreateEmployee Component', () => {
    test('renders the CreateEmployee form', () => {
        render(
            <Router>gv v     
                <CreateEmployee />
            </Router>
        );

        expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Street/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Department/i)).toBeInTheDocument();
    });

    test('allows user to fill out the form', () => {
        render(
            <Router>
                <CreateEmployee />
            </Router>
        );

        fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByLabelText(/Street/i), { target: { value: '123 Main St' } });
        fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'Anytown' } });
        fireEvent.change(screen.getByLabelText(/Zip Code/i), { target: { value: '12345' } });

        expect(screen.getByLabelText(/First Name/i).value).toBe('John');
        expect(screen.getByLabelText(/Last Name/i).value).toBe('Doe');
        expect(screen.getByLabelText(/Street/i).value).toBe('123 Main St');
        expect(screen.getByLabelText(/City/i).value).toBe('Anytown');
        expect(screen.getByLabelText(/Zip Code/i).value).toBe('12345');
    });

    test('shows modal on form submission', async () => {
        render(
            <Router>
                <CreateEmployee />
            </Router>
        );

        fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByLabelText(/Street/i), { target: { value: '123 Main St' } });
        fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'Anytown' } });
        fireEvent.change(screen.getByLabelText(/Zip Code/i), { target: { value: '12345' } });

        fireEvent.click(screen.getByText(/Save/i));

        await waitFor(() => expect(screen.getByText(/Employee Created!/i)).toBeInTheDocument());
    });
});
