import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput = ({ label, selected, onChange, name, error }) => (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <DatePicker
            selected={selected}
            onChange={date => onChange(date, name)}
            aria-label={label}
            required
        />
        {error && <p className="error">{error}</p>}
    </div>
);

export default DatePickerInput;
