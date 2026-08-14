import { styled, Container, Grid, Typography, Box } from "@mui/material"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { useSearchMovie } from "../hooks/useSearchMovie"
import CardMovie from "../components/CardMovie"
import { LoadingScreen, TrendingList, CButton } from '../components'
import { Link as RouterLink } from "react-router"

const SearchTitle = styled(Typography)(({ theme }) => ({
	fontSize: '30px',
	fontWeight: '500',
	letterSpacing: '0.05em',
	[theme.breakpoints.up('md')]: {
		fontSize: '40px',
	},
	[theme.breakpoints.up('lg')]: {
		fontSize: '45px',
	},
}))

function Search() {
	const { searchParam } = useContext(ThemeContext)
	const { data, error, loading, trending, trendingLoad, trendingErr } = useSearchMovie();

	return (
		<Container maxWidth={false}>
			<Grid container>
				<Grid component="aside" size={{md: 4, lg: 3}} sx={{ display: { xs: "none", md: "block" } }}>
					<SearchTitle component="h2" sx={{marginBottom: '.5em'}}>Xu hướng</SearchTitle>
					<TrendingList data={trending} loading={trendingLoad} error={trendingErr} />
				</Grid>
				<Grid component="article" size={{md: 8, lg: 9}}>
					<SearchTitle component='h1'>Tìm kiếm{searchParam && (`: '${searchParam}'`)}</SearchTitle>
					<Box sx={{mt: 2}}>
						{loading?
							(<LoadingScreen/>)
							:
							(
								<Box>
									{error?
										(<Typography>
											{error.response?.data?.status_message || error.message}
										</Typography>):
										(
										<Grid container spacing={2}>
											{data.map(movie => <Grid key={movie.id} size={{xs: 6, sm: 4, md: 3, lg: 2}}><CardMovie data={movie}/></Grid>)}
										</Grid>
										)
									}

									<Box sx={{
										marginTop: {xs: '30px', md: '50px'},
										textAlign: 'center',
									}}>
										<CButton component={RouterLink} to="/">Quay về trang chủ</CButton>
									</Box>
								</Box>
							)
						}
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Search
