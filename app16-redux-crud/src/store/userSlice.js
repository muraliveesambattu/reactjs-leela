import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: []
}
const API_URL = "http://localhost:3000/users"
export const createUsersAsyncAction = createAsyncThunk('users/getAllUsersAsync', () => { });

export const getAllUsersAsyncAction = createAsyncThunk('users/createUserAsync', async () => {
    console.log(
        "createUserAsyncAction Called !!!"
    );
    const response = await fetch(API_URL);
    return response.json()
});
export const updateUsersAsyncAction = createAsyncThunk('users/updateUserAsync', () => { });
export const deleteUsersAsyncAction = createAsyncThunk('users/deleteUserAsync', () => { });

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllUsersAsyncAction.fulfilled,((state,action)=>{
            state.users = action.payload
        }))
    }

})


export default usersSlice.reducer


// extraReducers used for Server Communications 