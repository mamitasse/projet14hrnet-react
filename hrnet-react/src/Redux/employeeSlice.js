import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: JSON.parse(localStorage.getItem('employees')) || []
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
            localStorage.setItem('employees', JSON.stringify(state.employees));
        },
        loadEmployees: (state, action) => {
            state.employees = action.payload;
        }
    }
});

export const { addEmployee, loadEmployees } = employeeSlice.actions;

export default employeeSlice.reducer;
