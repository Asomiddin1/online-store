import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	serValue:''
}

export const authSlice = createSlice({
	name: 'serP',
	initialState,
	reducers: {
		
	},
})

export const {signUserFailure, signUserStart, signUserSuccess, logoutUser} = authSlice.actions
export default authSlice.reducer;
