import { PageHeader, Spin } from "antd"
import { useNavigate, useParams } from "react-router-dom"

import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { Paths } from "@shared/enums"
import PermissionUpdateForm from "../components/PermissionUpdateForm"
import { usePermission } from "../hooks/usePermission"
import { useUpdatePermission } from "../hooks/useUpdatePermission"

const PermissionsUpdatePage = () => {

    const navigate = useNavigate()
	const { id } = useParams()
	const { data, isLoading } = usePermission({ id })

	const updatePermissionMutation = useUpdatePermission({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.PermissionsList)
			},
		},
	})

    return isLoading ? (
		<Spin />
	) : (
		<Authorization allowedAccess={["PermissionModify"]}>
			<PageHeader onBack={() => null} title="Update Permission" />
			<PermissionUpdateForm
				initialValues={{
					title: data?.data?.payload?.title,
				}}
				onFinish={(values) => updatePermissionMutation.mutateAsync({ ...values, id })}
			/>
		</Authorization>
	)
};

export default PermissionsUpdatePage;