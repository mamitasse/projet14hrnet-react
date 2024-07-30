import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { loadEmployees } from '../Redux/employeeSlice';
import './EmployeeList.css'; // Import du fichier CSS

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
    const [sortedEmployees, setSortedEmployees] = useState([]);
    const [sortDirection, setSortDirection] = useState('asc');

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        dispatch(loadEmployees(storedEmployees));
    }, [dispatch]);

    useEffect(() => {
        setSortedEmployees(employees);
    }, [employees]);

    const handleSort = () => {
        const sortedData = [...employees];
        sortedData.sort((a, b) => {
            const dateA = new Date(a.startDate);
            const dateB = new Date(b.startDate);
            return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
        });
        setSortedEmployees(sortedData);
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };

    const columns = [
        {
            name: <span>First<br />Name</span>,
            selector: row => row.firstName,
            sortable: true,
            sortFunction: handleSort,
            headerClassName: 'dataTable-header',
            className: 'dataTable-cell'
        },
        {
            name: <span>Last<br />Name</span>,
            selector: row => row.lastName,
            sortable: true,
            headerClassName: 'dataTable-header',
            className: 'dataTable-cell'
        },
        {
            name: <span>Start<br />Date</span>,
            selector: row => new Date(row.startDate).toLocaleDateString(),
            sortable: true,
            headerClassName: 'dataTable-header',
            className: 'dataTable-cell'
        },
        {
            name: 'Department',
            selector: row => row.department,
            sortable: true,
            headerClassName: 'dataTable-header',
            className: 'dataTable-cell'
        },
        {
            name: <span>Date of<br />Birth</span>,
            selector: row => new Date(row.dateOfBirth).toLocaleDateString(),
            sortable: true,
            headerClassName: 'dataTable-header',
            className: 'dataTable-cell'
        },
        {
            name: 'Street',
            selector: row => row.street,
            sortable: true,
            headerClassName: 'dataTable-header',
            className: 'dataTable-cell'
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true,
            headerClassName: 'dataTable-header',
            className: 'dataTable-cell'
        },
        {
            name: 'State',
            selector: row => stateAbbreviations[row.state] || row.state,
            sortable: true,
            headerClassName: 'dataTable-header',
            className: 'dataTable-cell'
        },
        {
            name: <span>Zip <br/>Code</span>,
            selector: row => row.zipCode,
            sortable: true,
            headerClassName: 'dataTable-header',
            className: 'dataTable-cell'
        }
    ];
    

    return (
        <div className="container">
            <h1>Current Employees</h1>
            <DataTable
                columns={columns}
                data={sortedEmployees}
                pagination
                onSort={handleSort}
                sortServer
            />
            <Link to="/">Accueil</Link>
        </div>
    );
};

export default EmployeeList;
