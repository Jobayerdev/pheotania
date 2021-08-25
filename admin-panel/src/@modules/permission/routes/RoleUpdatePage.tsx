import { PageHeader, Spin } from "antd"
import { useNavigate, useParams } from "react-router-dom"

import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { Paths } from "@shared/enums"
import RoleUpdateForm from "../components/RoleUpdateForm"
import { useRole } from "@modules/permission/hooks/useRole"
import { useUpdateRole } from "@modules/permission/hooks/useUpdateRole"

const RoleUpdatePage = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { data, isLoading } = useRole({ id })

	const updateRoleMutation = useUpdateRole({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.RolesList)
			},
		},
	})


	return isLoading ? (
		<Spin />
	) : (
		<Authorization allowedAccess={["RoleModify"]}>
			<PageHeader onBack={() => null} title="Update Role" />
			<RoleUpdateForm
				initialValues={{
					title: data?.data?.payload?.title,
				}}
				onFinish={(values) => updateRoleMutation.mutateAsync({ ...values, id })}
			/>
		</Authorization>
	)
}

export default RoleUpdatePage
