import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	serValue:''
}

export const authSlice = createSlice({
	name: 'serP',
	initialState,
	reducers: {
		searchDetail: state => {
			state.isLoading = true
		},
	},
})

export const {} = authSlice.actions
export default authSlice.reducer;
