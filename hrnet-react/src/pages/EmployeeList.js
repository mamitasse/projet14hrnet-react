// Dans EmployeeList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { loadEmployees } from '../Redux/employeeSlice';

const stateAbbreviations = {
    "Alabama": "AL",
    "Alaska": "AK",
    "American Samoa": "AS",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "District Of Columbia": "DC",
    "Federated States Of Micronesia": "FM",
    "Florida": "FL",
    "Georgia": "GA",
    "Guam": "GU",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Marshall Islands": "MH",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Northern Mariana Islands": "MP",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Palau": "PW",
    "Pennsylvania": "PA",
    "Puerto Rico": "PR",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virgin Islands": "VI",
    "Virginia": "VA",
    "Washington": "WA",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY"
};

const EmployeeList = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees.employees);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        dispatch(loadEmployees(storedEmployees));
    }, [dispatch]);

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
            name: 'Départment',
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
            name: 'Contry',
            selector: row => row.city,
            sortable: true
        },
        {
            name: 'State',
            selector: row => stateAbbreviations[row.state] || row.state,
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
            <Link to="/">Accueil</Link>
        </div>
    );
};

export default EmployeeList;
