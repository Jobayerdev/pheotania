import { Outlet, useRoutes } from "react-router-dom"

import { DashboardRoutes } from "@modules/dashboard"
import DefaultDashboardPage from "@modules/dashboard/routes/default-dashboard-page-component"
import MainLayout from "@shared/components/layout/main-layout.component"
import NotFound from "@shared/components/NotFound"
import { PermissionRoutes } from "@modules/permission"
import { UsersRoutes } from "@modules/users"

const App = () => {
	let pathName = window.location.pathname
	return (
		<MainLayout>
			{pathName === "/" ? <DefaultDashboardPage /> : ""}
			<Outlet />
		</MainLayout>
	)
}

const ProtectedRoutes = () => {
	const routes = [
		{
			path: "dashboard",
			children: DashboardRoutes,
		},
		{
			path: "users",
			children: UsersRoutes,
		},
		{
			path: "permissions",
			children: PermissionRoutes,
		},
	]

	return useRoutes([
		{
			path: "",
			element: <App />,
			children: routes,
		},
		{
			path: "*",
			element: <NotFound />,
		},
	])
}

export default ProtectedRoutes
