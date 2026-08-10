import { styled, Box, Typography, Stack } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'
import CButton from './CButton'
import {default as MovieInfo} from './CMovieInfo'
import { BASE_IMAGE } from "../app/config"

const Wrapper = styled(Box)(({theme}) => ({
	width: 'calc(100% - 40px)',
	minHeight: '400px',
	aspectRatio: '880 / 404',
	marginInline: 'auto',
	position: 'relative',
	zIndex: '2',
	overflow: 'hidden',
	borderRadius: '24px',
	background: theme.palette.background.paper,
	color: theme.palette.text.primary,
	fontWeight: '500',
	display: 'flex',
	alignItems: 'flex-end',
	[theme.breakpoints.up('md')]: {
		borderRadius: '35px'
	},
	'&::before': {
		content: "''",
		display: 'block',
		position: 'absolute',
		zIndex: '-1',
		width: '100%',
		height: '100%',
		top: '0',
		left: '0',
		background: theme.palette.background.paper,
		opacity: '.3'
	}
}))

const Inner = styled(Box)(({theme}) => ({
	width: '100%',
	maxWidth: '750px',
	boxSizing: 'border-box',
	padding: '20px',
	[theme.breakpoints.up('md')]: {
		padding: '40px',
	}
}))

const MovieTitle = styled(Typography)(({ theme }) => ({
	fontSize: '20px',
	textShadow: `0 0 20px ${theme.palette.primary.main}`,
	marginBlock: '0 1em',
	[theme.breakpoints.up('md')]: {
		fontSize: '30px',
	},
	[theme.breakpoints.up('lg')]: {
		fontSize: '40px',
	},
}))

const CoverImage = styled(Box)({
	display: 'block',
	position: 'absolute',
	zIndex: '-2',
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	top: '0',
	left: '0',
})

function MainVisual({data}) {
	if(!data) return;

	return (
		<Wrapper id={data.id}>
			<CoverImage component="img" src={`${BASE_IMAGE}w780${data.backdrop_path}`} alt="" />
			<Inner>
				<MovieTitle component='h2'>{data.title}</MovieTitle>
				<MovieInfo>
					<Box component='li'><Typography component='time' dateTime={data.release_date}>{data.release_date}</Typography></Box>
					<Box component='li'><Typography>{data.vote_average.toFixed(1)} <Typography component='small'>({data.vote_count} voted)</Typography></Typography></Box>
				</MovieInfo>
				<Typography>{data.overview}</Typography>
				<Stack direction='row' spacing={2} sx={{mt: 3}}>
					<Box><CButton kind="white" startIcon={<PlayArrow/>}>Phát</CButton></Box>
					<Box><CButton>Thông tin khác</CButton></Box>
				</Stack>
			</Inner>
		</Wrapper>
	)
}

export default MainVisual
