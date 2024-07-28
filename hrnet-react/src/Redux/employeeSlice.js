import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: []
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        }
    }
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
