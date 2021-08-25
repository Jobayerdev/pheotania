import { CoreAxiosInstance } from "./../config/axios/core-axios-instantance"
import { IAuthCredential } from "@shared/interfaces"
import { baseService } from "@shared/base/base.service"

const END_POINT: string = "/auth"

export const AuthService = {
	...baseService(END_POINT),
	login: (payload: IAuthCredential) => {
		return CoreAxiosInstance.post(`${END_POINT}`, payload)
	},
}

// class AAuthService {
// 	END_POINT: string = "/auth"

// 	login(payload: IAuthCredential) {
// 		console.log(this.END_POINT, "I am called")
// 		return CoreAxiosInstance.post(`${END_POINT}`, payload)
// 	}
// }

// export const _AAuthService = new AAuthService()
