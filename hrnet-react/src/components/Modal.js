// src/components/Modal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onRequestClose, content }) => (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        {content}
        <button onClick={onRequestClose}>Close</button>
    </Modal>
);

export default CustomModal;
