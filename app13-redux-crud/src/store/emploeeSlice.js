import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    employeesDetails: []
}
export const getEmployeesFromServer = createAsyncThunk('employees/getEmployees', async (success, { rejectWithValue }) => {
    try {
        const resposne = await fetch("http://localhost:3000/users")
        if (!resposne.ok) {
            return rejectWithValue("Failed to fetch users")
        }
        const data = resposne.json();
        return data
    } catch (error) {
        return rejectWithValue(err.message);
    }
})

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEmployeesFromServer.fulfilled, (state, action) => {
            console.log( action.payload)
            state.employees = action.payload
        })
        builder.addCase(getEmployeesFromServer.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload || "Something went wrong";
        })
        builder.addCase(getEmployeesFromServer.pending, (state, action) => {
            state.status = "loading";
            state.error = null;
        })
    }
})

export default employeeSlice.reducer