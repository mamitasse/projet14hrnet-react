// src/pages/CreateEmployee.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../store/employeeSlice';
import { Link } from 'react-router-dom';

const CreateEmployee = () => {
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        startDate: '',
        department: '',
        dateOfBirth: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEmployee(employee));
    };

    return (
        <div className="container">
            <h1>HRnet</h1>
            <Link to="/employee-list">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input 
                    type="text" 
                    id="first-name" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    aria-label="First Name"
                    required 
                />

                <label htmlFor="last-name">Last Name</label>
                <input 
                    type="text" 
                    id="last-name" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange}
                    aria-label="Last Name"
                    required 
                />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker 
                    selected={formData.dateOfBirth} 
                    onChange={(date) => handleDateChange(date, 'dateOfBirth')} 
                    aria-label="Date of Birth"
                    required 
                    id="date-of-birth"
                />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker 
                    selected={formData.startDate} 
                    onChange={(date) => handleDateChange(date, 'startDate')}
                    aria-label="Start Date"
                    required 
                    id="start-date"
                />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input 
                        id="street" 
                        type="text" 
                        name="street" 
                        value={formData.street} 
                        onChange={handleChange}
                        aria-label="Street"
                        required 
                    />

                    <label htmlFor="city">City</label>
                    <input 
                        id="city" 
                        type="text" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange}
                        aria-label="City"
                        required 
                    />

                    <label htmlFor="state">State</label>
                    <select 
                        name="state" 
                        id="state" 
                        value={formData.state} 
                        onChange={handleChange}
                        aria-label="State"
                        required 
                    >
                        {states.map((state) => (
                            <option key={state.abbreviation} value={state.abbreviation}>
                                {state.name}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input 
                        id="zip-code" 
                        type="number" 
                        name="zipCode" 
                        value={formData.zipCode} 
                        onChange={handleChange}
                        aria-label="Zip Code"
                        required 
                    />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select 
                    name="department" 
                    id="department" 
                    value={formData.department} 
                    onChange={handleChange}
                    aria-label="Department"
                    required 
                >
                    {departments.map((dept) => (
                        <option key={dept} value={dept}>
                            {dept}
                        </option>
                    ))}
                </select>
            </form>

            <button onClick={saveEmployee}>Save</button>

            <Suspense fallback={<div>Loading...</div>}>
                {modalIsOpen && (
                    <CustomModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                        <h2>Employee Created!</h2>
                        <button onClick={() => setModalIsOpen(false)}>Close</button>
                    </CustomModal>
                )}
            </Suspense>
        </div>
    );
};

export default CreateEmployee;