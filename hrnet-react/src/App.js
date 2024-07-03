// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<CreateEmployee />} />
                <Route path="/employee-list" element={<EmployeeList />} />
            </Routes>
        </Router>
    );
};

export default App;
