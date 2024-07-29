import React from 'react';
import FormInput from './FormInput';

// Le composant AddressForm est une partie du formulaire utilisé pour saisir l'adresse de l'employé
const AddressForm = ({ formData, handleChange, formErrors, states }) => (
    <fieldset className="address">
        <legend>Address</legend>
        
        {/* Champ de saisie pour la rue */}
        <FormInput
            label="Street"
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
            error={formErrors.street}
        />
        
        {/* Champ de saisie pour la ville */}
        <FormInput
            label="City"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            error={formErrors.city}
        />
        
        {/* Champ de sélection pour l'état */}
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
                {/* Boucle à travers les états et créer une option pour chacun */}
                {states.map(state => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                        {state.name}
                    </option>
                ))}
            </select>
            {/* Afficher un message d'erreur si le champ état n'est pas valide */}
            {formErrors.state && <p className="error">{formErrors.state}</p>}
        </div>
        
        {/* Champ de saisie pour le code postal */}
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

