import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: []
}
const API_URL = "http://localhost:3000/users/"
export const createUsersAsyncAction = createAsyncThunk('users/getAllUsersAsync', async (user) => {
    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await response.json(); // return created user



});

export const getAllUsersAsyncAction = createAsyncThunk('users/createUserAsync', async () => {
    const response = await fetch(API_URL);
    return response.json()
});
export const updateUsersAsyncAction = createAsyncThunk('users/updateUserAsync', async (user) => {
    const response = await fetch(API_URL + user.id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response.json()
});

export const deleteUsersAsyncAction = createAsyncThunk('users/deleteUserAsync', async (user) => {
    const response = await fetch(API_URL + user.id, {
        method: "DELETE"
    })
    return user.id
});

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllUsersAsyncAction.fulfilled, ((state, action) => {
            state.users = action.payload
        }))
        builder.addCase(deleteUsersAsyncAction.fulfilled, (state, action) => {
            state.users = state.users.filter((usr) => usr.id !== action.payload)
        })
        builder.addCase(createUsersAsyncAction.fulfilled, (state, action) => {
            state.users.push(action.payload);
        })
        builder.addCase(updateUsersAsyncAction.fulfilled, (state, action) => {
            const updatedUser = action.payload; // must contain id
            const index = state.users.findIndex((u) => u.id === updatedUser.id);
            if (index !== -1) {
                state.users[index] = updatedUser;
            }
        })
    }

})


export default usersSlice.reducer


// extraReducers used for Server Communications 