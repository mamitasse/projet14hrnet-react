import React, { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import './CreateEmployee.css';
import FormInput from '../components/FormInput';
import DatePickerInput from '../components/DatePickerInput';
import AddressForm from '../components/AddressForm';

// Lazy load CustomModal
const CustomModal = lazy(() => import('../components/Modal'));

const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];

const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"];

const CreateEmployee = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        startDate: new Date(),
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: departments[0]
    });

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date, name) => {
        setFormData({ ...formData, [name]: date });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.firstName) errors.firstName = "First Name is required";
        if (!formData.lastName) errors.lastName = "Last Name is required";
        if (!formData.dateOfBirth) errors.dateOfBirth = "Date of Birth is required";
        if (!formData.startDate) errors.startDate = "Start Date is required";
        if (!formData.street) errors.street = "Street is required";
        if (!formData.city) errors.city = "City is required";
        if (!formData.state) errors.state = "State is required";
        if (!formData.zipCode) errors.zipCode = "Zip Code is required";
        if (!formData.department) errors.department = "Department is required";

        setFormErrors(errors);
        if (Object.keys(errors).length > 0) {
            alert("Tous les champs sont obligatoires");
        }
        return Object.keys(errors).length === 0;
    };

    const saveEmployee = () => {
        if (validateForm()) {
            const employees = JSON.parse(localStorage.getItem('employees')) || [];
            const newEmployee = {
                ...formData,
                dateOfBirth: formData.dateOfBirth.toISOString(),
                startDate: formData.startDate.toISOString(),
            };
            employees.push(newEmployee);
            localStorage.setItem('employees', JSON.stringify(employees));
            setModalIsOpen(true);
        }
    };

    return (
        <div className="container">
            <h1>HRnet</h1>
            <Link to="/employee-list">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form id="create-employee">
                <FormInput
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    error={formErrors.firstName}
                />
                <FormInput
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    error={formErrors.lastName}
                />
                <DatePickerInput
                    label="Date of Birth"
                    selected={formData.dateOfBirth}
                    onChange={(date) => handleDateChange(date, 'dateOfBirth')}
                    name="dateOfBirth"
                    error={formErrors.dateOfBirth}
                />
                <DatePickerInput
                    label="Start Date"
                    selected={formData.startDate}
                    onChange={(date) => handleDateChange(date, 'startDate')}
                    name="startDate"
                    error={formErrors.startDate}
                />
                <AddressForm
                    formData={formData}
                    handleChange={handleChange}
                    formErrors={formErrors}
                    states={states}
                />
                <FormInput
                    label="Department"
                    type="select"
                    name="department"
                    options={departments}
                    value={formData.department}
                    onChange={handleChange}
                    required
                    error={formErrors.department}
                />
            </form>
            <button onClick={saveEmployee}>Save</button>
            <Suspense fallback={<div>Loading...</div>}>
                {modalIsOpen && (
                    <CustomModal
                        isOpen={modalIsOpen}
                        onClose={() => setModalIsOpen(false)}
                    >
                        <h2>Employee Created!</h2>
                        <button onClick={() => setModalIsOpen(false)}>Close</button>
                    </CustomModal>
                )}
            </Suspense>
        </div>
    );
};

export default CreateEmployee;