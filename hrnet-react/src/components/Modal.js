import React from 'react';
import 'react-modal-component-tasse2'; // Assurez-vous que ce composant existe et fonctionne correctement
import './Modal.css';

const CustomModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close croix" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;

