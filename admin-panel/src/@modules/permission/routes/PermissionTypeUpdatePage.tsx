import { PageHeader, Spin } from "antd"
import { useNavigate, useParams } from "react-router-dom"

import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { Paths } from "@shared/enums"
import PermissionTypeUpdateForm from "../components/elements/PermissionTypeUpdateForm"
import { usePermissionType } from "../hooks/usePermissionType"
import { useUpdatePermissionType } from "../hooks/useUpdatePermissionType"

const PermissionTypeUpdatePage = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { data, isLoading } = usePermissionType({ id })

	const updatePermissionTypeMutation = useUpdatePermissionType({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.PermissionsTypeList)
			},
		},
	})

	return isLoading ? (
		<Spin />
	) : (
		<Authorization allowedAccess={["PermissionTypeModify"]}>
			<PageHeader onBack={() => null} title="Update Permission Type" />
			<PermissionTypeUpdateForm
				initialValues={{
					title: data?.data?.payload?.title,
				}}
				onFinish={(values) => updatePermissionTypeMutation.mutateAsync({ ...values, id })}
			/>
		</Authorization>
	)
}

export default PermissionTypeUpdatePage
