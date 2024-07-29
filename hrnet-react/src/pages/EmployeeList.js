// Dans EmployeeList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { loadEmployees } from '../Redux/employeeSlice';

const EmployeeList = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees.employees);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        // Pas besoin de convertir en Date ici
        dispatch(loadEmployees(storedEmployees));
    }, [dispatch]);

    const columns = [
        {
            name: 'Prénom',
            selector: row => row.firstName,
            sortable: true
        },
        {
            name: 'Nom',
            selector: row => row.lastName,
            sortable: true
        },
        {
            name: 'Date de début',
            selector: row => new Date(row.startDate).toLocaleDateString(),
            sortable: true
        },
        {
            name: 'Département',
            selector: row => row.department,
            sortable: true
        },
        {
            name: 'Date de naissance',
            selector: row => new Date(row.dateOfBirth).toLocaleDateString(),
            sortable: true
        },
        {
            name: 'Rue',
            selector: row => row.street,
            sortable: true
        },
        {
            name: 'Ville',
            selector: row => row.city,
            sortable: true
        },
        {
            name: 'État',
            selector: row => row.state,
            sortable: true
        },
        {
            name: 'Code Postal',
            selector: row => row.zipCode,
            sortable: true
        }
    ];

    return (
        <div className="container">
            <h1>Employés Actuels</h1>
            <DataTable
                columns={columns}
                data={employees}
                pagination
            />
            <Link to="/">Accueil</Link>
        </div>
    );
};

export default EmployeeList;
