// import React from 'react'
import { Stack, Button, styled, alpha } from '@mui/material'
import { Link as RouterLink } from 'react-router'

const NavMenu = styled(Stack)(({theme}) => ({
	display: 'none',
	fontSize: '16px',
	lineHeight: '1.2',
	[theme.breakpoints.up('md')]: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	}
}))

const NavItem = styled(Button)(({ theme }) => ({
	color: theme.palette.text.primary,
	display: "block",
	borderRadius: '24px',
	padding: '.6em 1em',
	boxSizing: 'border-box',
	minWidth: '85px',
	textAlign: 'center',
	'&:hover': {
		backgroundColor: alpha(theme.palette.text.primary, .08),
	},
	'& .MuiTouchRipple-child': {
		backgroundColor: theme.palette.text.primary
	}
}))

function GlobalNav() {
	return (
		<NavMenu component="nav">
			<NavItem component={RouterLink} to="/">Trang Chủ</NavItem>
			<NavItem component={RouterLink} to="/">Series</NavItem>
			<NavItem component={RouterLink} to="/">Phim</NavItem>
			<NavItem component={RouterLink} to="/">Mới & Phổ biến</NavItem>
			<NavItem component={RouterLink} to="/">Danh sách của tôi</NavItem>
			<NavItem component={RouterLink} to="/">Duyệt tìm theo ngôn ngữ</NavItem>
		</NavMenu>
	)
}

export default GlobalNav
