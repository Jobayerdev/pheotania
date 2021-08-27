import { Navigate, PartialRouteObject } from "react-router-dom"

import PermissionTypeCreatePage from "./PermissionTypeCreatePage"
import PermissionTypeListPage from "./PermissionTypeListPage"
import PermissionTypeUpdatePage from "./PermissionTypeUpdatePage"
import PermissionsCreatePage from "./PermissionsCreatePage"
import PermissionsListPage from "./PermissionsListPage"
import PermissionsUpdatePage from "./PermissionsUpdatePage"
import RoleCreatePage from "./RoleCreatePage"
import RoleUpdatePage from "./RoleUpdatePage"
import UserRoleListPage from "./UserRoleListPage"

export const PermissionRoutes: PartialRouteObject[] = [
	{ path: "", element: <Navigate to="/permissions/list" /> },
	{ path: "list", element: <PermissionsListPage /> },
	{ path: "create", element: <PermissionsCreatePage /> },
	{ path: "update/:id", element: <PermissionsUpdatePage /> },
	{
		path: "types",
		children: [
			{ path: "", element: <Navigate to="/permissions/types/list" /> },
			{ path: "list", element: <PermissionTypeListPage /> },
			{ path: "create", element: <PermissionTypeCreatePage /> },
			{ path: "update/:id", element: <PermissionTypeUpdatePage /> },
		],
	},
	{
		path: "roles",
		children: [
			{ path: "", element: <Navigate to="/permissions/roles/list" /> },
			{ path: "list", element: <UserRoleListPage /> },
			{ path: "update/:id", element: <RoleUpdatePage /> },
			{ path: "create", element: <RoleCreatePage /> },
		],
	},
]
