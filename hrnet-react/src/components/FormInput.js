// FormInput.js
import React from 'react';

const FormInput = ({ label, type, name, value, onChange, options, required, error }) => {
    return (
        <div className="form-input">
            <label htmlFor={name}>{label}{required && '*'}</label>
            {type === 'select' ? (
                <select id={name} name={name} value={value} onChange={onChange} required={required}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            )}
            {error && <span className="error">{error}</span>}
        </div>
    );
};

export default FormInput;
