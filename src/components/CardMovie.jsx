import { useState } from 'react'
import { styled, alpha, Box, Typography, Popper, Stack, Grow } from "@mui/material"
import {default as MovieInfo} from './CMovieInfo'
import iconAudio from '../assets/img/common/ico_spatialAudio.svg'

const TheCard = styled(Box)(() => ({
	width: "100%",
	aspectRatio: "336 / 190",
	position: "relative",
	borderRadius: "12px",
	overflow: "hidden",
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
		content: "'TOP'",
		display: "block",
	},
	"&::after": {
		content: "'10'",
		display: "block",
		fontSize: "130%",
	}
}))

const NewEpisode = styled(Box)(({ theme }) => ({
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

function CardMovie({ hightRate = false, newEp = false }) {
	const [anchorEl, setAnchorEl] = useState(null)

	return (
		<Box
			sx={{position: 'relative', zIndex: 5}}
			onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
			onMouseLeave={() => setAnchorEl(null)}
		>
			<TheCard>
				{ hightRate && <HightRate/> }
				{ newEp && <NewEpisode/> }
				<img src="https://vinhphucwater.com.vn/wp-content/uploads/2023/05/no-image.jpg" alt="" loading="lazy" />
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
								<img src="https://vinhphucwater.com.vn/wp-content/uploads/2023/05/no-image.jpg" alt="" />
							</CoverWrapper>
							<InfoWrapper>
								<MovieTitle component="h2">Movie name</MovieTitle>
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
									<Box component='li'><Typography component='time'>0000/00/00</Typography></Box>
									<Box component='li'><Typography>7.5 <Typography component='small'>(1000 voted)</Typography></Typography></Box>
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
