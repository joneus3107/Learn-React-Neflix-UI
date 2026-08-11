import { useState } from 'react'
import { styled, alpha, useTheme, useMediaQuery, Box, Typography, Popper, Stack, Grow } from "@mui/material"
import {default as MovieInfo} from './CMovieInfo'
import iconAudio from '../assets/img/common/ico_spatialAudio.svg'
import { BASE_IMAGE } from "../app/config"

const TheCard = styled(Box)(({ theme }) => ({
	width: "100%",
	aspectRatio: "500 / 750",
	position: "relative",
	borderRadius: "5px",
	overflow: "hidden",
	[theme.breakpoints.up('md')]: {
		borderRadius: "12px",
	},
	"> img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	}
}))

const HightRate = styled(Box)(({ theme }) => ({
	position: "absolute",
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.text.primary,
	textAlign: 'center',
	borderBottomRightRadius: "12px",
	fontWeight: "500",
	lineHeight: "1.1",
	padding: ".6em .4em",
	fontSize: "10px",
	[theme.breakpoints.up('md')]: {
		fontSize: "12px",
	},
	"&::before": {
		content: "'HIGH'",
		display: "block",
	},
	"&::after": {
		content: "'RATED'",
		display: "block",
		fontSize: "130%",
	}
}))

const UpComing = styled(Box)(({ theme }) => ({
	borderTopLeftRadius: "5px",
	borderTopRightRadius: "5px",
	overflow: "hidden",
	display: "flex",
	position: "absolute",
	left: "50%",
	bottom: "0",
	transform: "translateX(-50%)",
	fontSize: "10px",
	[theme.breakpoints.up('md')]: {
		fontSize: "14px",
	},
	"&::before, &::after": {
		padding: ".2em 1em",
		fontWeight: "500",
		flexShrink: "0"
	},
	"&::before": {
		content: "'Tập mới'",
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.primary,
	},
	"&::after": {
		content: "'Xem ngay'",
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.text.black,
		display: "none",
		[theme.breakpoints.up('sm')]: {
			display: "block",
		}
	},
}))

const TheBox = styled(Box)(({ theme }) => ({
	borderRadius: "6px",
	overflow: "hidden",
	boxShadow: `0 3px 10px ${alpha(theme.palette.secondary.contrastText, .75)}`,
	backgroundColor: theme.palette.background.paper,
	width: "504px",
	maxWidth: "85svw",
	[theme.breakpoints.up('sm')]: {
		maxWidth: "50svw"
	}
}))

const CoverWrapper = styled(Box)({
	position: "relative",
	width: "100%",
	aspectRatio: "504 / 284",
	"> img": {
		display: "block",
		width: "100%",
		height: "100%",
		objectFit: "cover",
	}
})

const InfoWrapper = styled(Box)({
	padding: "10px 20px 20px",
	"> :last-child": {
		marginBottom: "0",
	}
})

const MovieTitle = styled(Typography)(({ theme }) => ({
	fontSize: "16px",
	fontWeight: "500",
	marginBottom: "16px",
	[theme.breakpoints.up('md')]: {
		fontSize: "22px",
	}
}))

function CardMovie({data}) {
	const [anchorEl, setAnchorEl] = useState(null)
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
	const bindEvent = isDesktop?{
		onMouseEnter: (event) => setAnchorEl(event.currentTarget),
		onMouseLeave: () => setAnchorEl(null)
	}:{
		onClick: () => {console.log('click')}
	}
	const today = new Date().toISOString().slice(0, 10);
	const isUpcoming = data.release_date && data.release_date > today;

	return (
		<Box
			sx={{position: 'relative', zIndex: 5}}
			{...bindEvent}
		>
			<TheCard>
				{ (data.vote_average.toFixed(1) >= 8.5) && <HightRate/> }
				{ isUpcoming && <UpComing/> }
				<img src={`${BASE_IMAGE}w500${data.poster_path}`} alt="" loading="lazy" />
			</TheCard>
			<Popper
					open={Boolean(anchorEl)}
					anchorEl={anchorEl}
					sx={{zIndex: 5}}
					placement='bottom'
					modifiers={[
						{
							name: 'offset',
							options: {
								offset: ({ reference, popper }) => [
									0,
									-(reference.height + popper.height) / 2,
								],
							},
						},
					]}
					transition
				>
					{({ TransitionProps }) => (
						<Grow {...TransitionProps} timeout={{enter: 800, exit: 400}}>
							<TheBox>
								<CoverWrapper>
									<img src={`${BASE_IMAGE}w780${data.backdrop_path}`} alt="" />
								</CoverWrapper>
								<InfoWrapper>
									<MovieTitle component="h2">{data.title}</MovieTitle>
									<Stack direction="row" spacing={1} useFlexGap sx={{
										listStyle: 'none',

									}}>
										<Box component="li">
											<Box
												component="img"
												src={iconAudio}
												alt="Spatial audio"
												width="100"
											/>
										</Box>
									</Stack>
									<MovieInfo>
										<Box component='li'><Typography component='time' dateTime={data.release_date}>{data.release_date}</Typography></Box>
										<Box component='li'><Typography>{data.vote_average.toFixed(1)} <Typography component='small'>({data.vote_count} voted)</Typography></Typography></Box>
									</MovieInfo>
								</InfoWrapper>
							</TheBox>
						</Grow>
					)}
					
				</Popper>
			
		</Box>
	)
}

export default CardMovie
