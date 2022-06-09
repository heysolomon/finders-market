import { createSlice } from "@reduxjs/toolkit";
import { api } from "./services/api";


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload;
        }
    }
})

const {getUsers} = usersSlice.actions

export default usersSlice.reducer;

// Actions


export const fetchUsers = () => async dispatch => {
    try {
        await api.get('/users')
        .then((response) => dispatch(getUsers(response.data)))
    } catch (e) {
        return console.error(e)
    }
}