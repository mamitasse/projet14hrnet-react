// src/pages/EmployeeList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';


const EmployeeList = () => {
    const employees = useSelector((state) => state.employees);

    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
            sortable: true
        },
        {
            name: 'Start Date',
            selector: row => new Date(row.startDate).toLocaleDateString(),
            sortable: true
        },
        {
            name: 'Department',
            selector: row => row.department,
            sortable: true
        },
        {
            name: 'Date of Birth',
            selector: row => new Date(row.dateOfBirth).toLocaleDateString(),
            sortable: true
        },
        {
            name: 'Street',
            selector: row => row.street,
            sortable: true
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true
        },
        {
            name: 'State',
            selector: row => row.state,
            sortable: true
        },
        {
            name: 'Zip Code',
            selector: row => row.zipCode,
            sortable: true
        }
    ];

    return (
        <div className="container">
            <h1>Current Employees</h1>
            <DataTable
                columns={columns}
                data={employees}
                pagination
            />
            <Link to="/">Home</Link>
        </div>
    );
};

export default EmployeeList;
