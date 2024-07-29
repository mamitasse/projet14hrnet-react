
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
            <h1>Create Employee</h1>
            <form onSubmit={handleSubmit}>
                <input name="firstName" value={employee.firstName} onChange={handleChange} placeholder="First Name" />
                <input name="lastName" value={employee.lastName} onChange={handleChange} placeholder="Last Name" />
                {/* Add other fields here */}
                <button type="submit">Save</button>
            </form>
            <Link to="/employee-list">View Current Employees</Link>
        </div>
    );
};

export default CreateEmployee;