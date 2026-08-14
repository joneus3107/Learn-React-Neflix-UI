import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { styled, Box, Alert, Chip } from '@mui/material'
import LoadingScreen from './LoadingScreen'

const List = styled(Box)(() => ({
	listStyle: 'none',
	padding: 0,
	letterSpacing: '.05em',
	fontWeight: '500',
	'> :not(:first-child)': {
		marginTop: '10px',
	}
}))

const ItemChip = styled(Chip)(({ theme }) => ({
	display: 'block',
	width: '100%',
	maxWidth: 'max-content',
	height: 'auto',
	borderRadius: '50px',
	boxSizing: 'border-box',
	padding: '.3em .6em',
	cursor: 'pointer',
	[theme.breakpoints.up('md')]: {
		fontSize: '16px',
	},
	[theme.breakpoints.up('lg')]: {
		fontSize: '18px',
	},
}))

function TrendingList({data, loading, error}) {
	const { setSearchParam } = useContext(ThemeContext);

	if(loading) return<LoadingScreen/>
	if (!data) return <Alert severity="error">{error}</Alert>

	return (
		<List component='ul'>
			{data.map((movie) => (
				<Box key={movie.id} component="li">
					<ItemChip onClick={() => setSearchParam(movie.title)} label={movie.title} variant="outlined" />
				</Box>
				))}
		</List>
	)
}

export default TrendingList
