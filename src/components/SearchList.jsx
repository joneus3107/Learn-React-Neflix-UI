import { Grid } from "@mui/material"
import CardMovie from "./CardMovie"

function SearchList() {
	return (
		<Grid spacing={1} container>
			<Grid size={{sx: 4, md: 3, lg: 2}}>
				<CardMovie/>
			</Grid>
		</Grid>
	)
}

export default SearchList
