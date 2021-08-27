import { Button, PageHeader } from "antd"

import { Authorization } from "@modules/auth"
import { Paths } from "@shared/enums"
import React from "react"
import { UsersList } from "../components/UsersList"
import { useNavigate } from "react-router-dom"

export const UsersPage = () => {
	const navigate = useNavigate()
	return (
		<Authorization allowedAccess={["UserView"]}>
			<PageHeader
				onBack={() => navigate(-1)}
				title="Users List"
				extra={[
					<Button onClick={() => navigate(Paths.UserCreate)} type="primary">
						Create
					</Button>,
				]}
			/>
			<UsersList />
		</Authorization>
	)
}
