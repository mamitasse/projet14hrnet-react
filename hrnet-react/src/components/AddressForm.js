import React from 'react';
import FormInput from './FormInput';

const AddressForm = ({ formData, handleChange, formErrors, states }) => (
    <fieldset className="address">
        <legend>Address</legend>
        <FormInput
            label="Street"
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
            error={formErrors.street}
        />
        <FormInput
            label="City"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            error={formErrors.city}
        />
        <div className="form-group">
            <label htmlFor="state">State</label>
            <select
                name="state"
                id="state"
                value={formData.state}
                onChange={handleChange}
                aria-label="State"
                required
            >
                {states.map(state => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                        {state.name}
                    </option>
                ))}
            </select>
            {formErrors.state && <p className="error">{formErrors.state}</p>}
        </div>
        <FormInput
            label="Zip Code"
            type="number"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
            error={formErrors.zipCode}
        />
    </fieldset>
);

export default AddressForm;
