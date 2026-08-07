import { styled, Box, Typography, Stack } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'
import CButton from './CButton'
import {default as MovieInfo} from './CMovieInfo'

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

function MainVisual() {
	return (
		<Wrapper>
			<CoverImage component="img" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2025/07/demon-slayer-infinity-castle-key-visual.jpg?w=1600&h=1200&fit=crop" alt="" />
			<Inner>
				<MovieTitle component='h2'>Thanh gươm diệt quỷ</MovieTitle>
				<MovieInfo>
					<Box component='li'><Typography component='time'>0000/00/00</Typography></Box>
					<Box component='li'><Typography>7.5 <Typography component='small'>(1000 voted)</Typography></Typography></Box>
				</MovieInfo>
				<Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis corrupti illo nisi nemo ut totam expedita, fugiat voluptas nihil, suscipit rem at magni aperiam error consectetur! Nulla delectus quidem omnis.</Typography>
				<Stack direction='row' spacing={2} sx={{mt: 3}}>
					<Box><CButton kind="white" startIcon={<PlayArrow/>}>Phát</CButton></Box>
					<Box><CButton>Thông tin khác</CButton></Box>
				</Stack>
			</Inner>
		</Wrapper>
	)
}

export default MainVisual
