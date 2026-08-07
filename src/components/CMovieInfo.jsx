import { styled, Stack, Box } from '@mui/material'

const MovieInfo = styled(Stack)(({theme}) => ({
	listStyle: 'none',
	padding: '0',
	alignItems: 'center',
	'& small': {
		fontSize: '80%',
		fontWeigth: '400'
	}
}))

const MovieInfoDivider = styled(Box)(({theme}) => ({
	width: '6px',
	aspectRatio: '1/1',
	borderRadius: '50%',
	background: theme.palette.grey[400],
	flexShrink: '0',
	[theme.breakpoints.up('md')]: {
		width: '8px',
	}
}))

function CMovieInfo({children, component = "ul"}) {
	return (
		<MovieInfo
			component={component}
			direction='row'
			divider={<MovieInfoDivider/>}
			spacing={1}
			useFlexGap
		>
			{children}
		</MovieInfo>
	)
}

export default CMovieInfo
