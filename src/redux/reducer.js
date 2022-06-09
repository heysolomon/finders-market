import { combineReducers } from '@reduxjs/toolkit'
import usersSlice from './users-slice';
// import shopReducer from './Shopping/shopping-reducer'

const reducer = combineReducers({
   user: usersSlice
})

export default reducer;