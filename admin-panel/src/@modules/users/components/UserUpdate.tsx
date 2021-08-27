import React from "react"
import { UserForm } from "./elements/UserForm"

export const UserUpdate = () => {
	return (
		<div>
			<UserForm
				onFinish={(val) => {
					console.log(val)
				}}
			/>
		</div>
	)
}
