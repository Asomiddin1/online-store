import axios from "./api";

export const AuthService = {
	async userRegister(user) {	
		const {data} = await axios.post('/users', {user})
		return data
	},

	async userLogin(user) {
		const {data} = await axios.post('/users/api/login', {user})
		return data
	},
	async getUser() {
		const {data} = await axios.get('/user')
		return data
	},
}

export default AuthService
