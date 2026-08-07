import { useState, useEffect } from "react"
import { MainLayoutContext } from "../contexts/MainLayoutContext"
import { Box } from "@mui/material"
import { MainHeader as Header, MainFooter as Footer } from "../components"
import { Outlet } from "react-router"

function MainLayout() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		
	}, [])

	return (
		<MainLayoutContext.Provider value={{isLoading, setIsLoading}}>
			<Header/>
			<Box component="main" sx={{
				paddingBlock: {xs: '10px', md: '30px'}
			}}>
				<Outlet/>
			</Box>
			<Footer/>
		</MainLayoutContext.Provider>
	)
}

export default MainLayout
