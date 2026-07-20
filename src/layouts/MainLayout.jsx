import { Box } from "@mui/material"
import { MainHeader as Header } from "../components"
import { Outlet } from "react-router"

function MainLayout() {
	return (
		<>
			<Header/>
			<Box component="main">
				<Outlet/>
			</Box>
		</>
	)
}

export default MainLayout
