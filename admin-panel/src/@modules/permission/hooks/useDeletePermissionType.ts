import { QueryConfig, queryClient } from "@shared/config"

import { PermissionTypesService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type PermissionTypeDeleteType = {
	config?: QueryConfig<typeof PermissionTypesService.delete>
}

export const useDeletePermissionType = ({config}: PermissionTypeDeleteType) => {
	
	return useMutation({
		onMutate: async (deletedPermissionType: any) => {
            await queryClient.cancelQueries("userPermissionTypeList")
            const previousPermissionType = queryClient.getQueryData<any[]>("userPermissionTypeList")
            queryClient.setQueryData(
                "userPermissionTypeList",
                previousPermissionType?.filter((pt) => {
                    return pt.id !== deletedPermissionType
                })
            )

            return { previousPermissionType }
        },
        onError: (_, __, context: any) => {
            if (context?.previousUsers) {
                queryClient.setQueryData("userPermissionTypeList", context.previousUsers)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries("userPermissionTypeList")
            notification.success({
                type: "success",
                message: "Permission type deleted",
            })
        },
		...config,
		mutationFn: PermissionTypesService.delete,
	})
}