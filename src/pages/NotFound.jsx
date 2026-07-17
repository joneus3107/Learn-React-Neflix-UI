// import React from 'react'
import { Box, Typography, Button, styled, AppBar, Container, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router'

import PageBg from '../assets/img/404/bg.webp'
import Logo from '../assets/img/common/logo.svg'

const Panel = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	padding: '40px 20px',
	background: "no-repeat center / cover",
	backgroundImage: `url(${PageBg})`,
	position: 'relative',
	zIndex: 2,
	'&::before': {
		content: '""',
		display: 'block',
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: '0',
		left: '0',
		zIndex: '-1',
		background: theme.palette.common.black,
		opacity: '.3',
	}
}))

const Wrapper = styled(Box)(({theme}) => ({
	width: '100%',
	boxSizing: 'border-box',
	textShadow: '0 1px 2px #00000091',
	fontWeight: '300',
	lineHeight: '1.3',
	textAlign: 'center',
	[theme.breakpoints.up('sm')]: {
		width: '70svw',
	},
	[theme.breakpoints.up('md')]: {
		width: '50svw',
	}
}))

const PageTitle = styled(Typography)(({ theme }) => ({
	textAlign: 'center',
	fontSize: '2em',
	marginBlock: '0 2vw',
	[theme.breakpoints.up('md')]: {
		fontSize: '3.5em'
	}
}))

const PageText = styled(Typography)(({ theme }) => ({
	fontSize: '1em',
	lineHeight: 'inherit',
	[theme.breakpoints.up('sm')]: {
		fontSize: '1.2em',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '1.5em',
	}
}))

const ButtonWrapper = styled(Box)({
	textAlign: 'center',
	marginTop: '2.5em',
})

const IntroText = styled(Typography)(({ theme }) => ({
	textShadow: '0 1px 2px #00000091',
	position: 'absolute',
	bottom: '1em',
	right: '1em',
	textTransform: 'uppercase',
	fontWeight: '100',
	fontSize: '.7em',
	lineHeight: '1.2',
	[theme.breakpoints.up('md')]: {
		fontSize: '1em',
	},
	'> strong': {
		fontWeight: '500',
		fontSize: '100%'
	}
}))

const PageHeader = styled(AppBar)(({ theme }) => ({
	paddingBlock: '10px',
	background: theme.palette.background.default,
	[theme.breakpoints.up('md')]: {
		paddingBlock: '15px',
	}
}))

const PageLogo = styled(Box)({
	display: 'block',
	width: '100%',
	maxWidth: 'max-content',
	'& > img': {
		display: 'block'
	}
})

function NotFound() {
	return (
		<Stack sx={{minHeight: '100svh'}}>
			<PageHeader position='static' sx={{flexShrink: '0'}}>
				<Container maxWidth={false}>
					<Box>
						<PageLogo component={RouterLink} to="/">
							<img src={Logo} alt="Neflix" width="76" />
						</PageLogo>
					</Box>
				</Container>
			</PageHeader>
			<Panel sx={{flex: '1'}}>
				<Wrapper>
					<PageTitle component="h1">Bạn đi lạc à?</PageTitle>
					<PageText>
						Rất tiếc, chúng tôi không tìm thấy trang đó. <br/>Bạn sẽ thấy rất nhiều thứ để khám phá trên trang chủ.
					</PageText>
					<ButtonWrapper><Button variant="contained" component={RouterLink} to="/">Trang chủ Netflix</Button></ButtonWrapper>
				</Wrapper>
				<IntroText>Từ <Typography component="strong">Thanh Gươm Diệt Quỷ: Vô Hạn Thành</Typography></IntroText>
			</Panel>
		</Stack>
	)
}

export default NotFound
