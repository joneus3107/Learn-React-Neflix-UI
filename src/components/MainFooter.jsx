import { styled, Box, Container, Stack, IconButton, Grid, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = styled(Box)(() => ({
	paddingBlock: "20px",
}))

const SocialList = styled(Stack)(()=>({
	listStyle: 'none',
}))

const SocialBtn = styled(IconButton)(() => ({
}))

const NavList = styled(Grid)(({ theme }) => ({
	listStyle: 'none',
	color: theme.palette.text.grey,
	fontSize: "13px",
	userSelect: 'none',
	marginBottom: '-1em',
	marginLeft: '-1em',
}))

const NavItem = styled(Grid)(() => ({
	marginBottom: '1em',
	paddingLeft: '1em',
}))

const NavLink = styled(Box)(({ theme }) => ({
	textDecoration: 'none',
	color: 'inherit',
	willChange: 'color',
	transition: '.3s color ease-in-out',
	':hover': {
		color: theme.palette.text.primary
	}
}))

const Copyright = styled(Typography)(({ theme })=>({
	color: theme.palette.text.grey,
	fontSize: '13px',
	marginTop: '1.5em',
	userSelect: 'none',
}))

function MainFooter() {
	return (
		<Footer component="footer">
			<Container maxWidth="md">
				<SocialList component="ul" direction='row' spacing={1}>
					<Box component="li"><SocialBtn component={RouterLink} to="/"><FacebookIcon/></SocialBtn></Box>
					<Box component="li"><SocialBtn component={RouterLink} to="/"><InstagramIcon/></SocialBtn></Box>
					<Box component="li"><SocialBtn component={RouterLink} to="/"><XIcon/></SocialBtn></Box>
					<Box component="li"><SocialBtn component={RouterLink} to="/"><YouTubeIcon/></SocialBtn></Box>
				</SocialList>
					<NavList component="ul" container>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Mô tả âm thanh</NavLink></NavItem>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Trung tâm trợ giúp</NavLink></NavItem>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Thẻ quà tặng</NavLink></NavItem>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Trung tâm đa phương tiện</NavLink></NavItem>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Quan hệ với nhà đầu tư</NavLink></NavItem>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Việc làm</NavLink></NavItem>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Cửa hàng Netflix</NavLink></NavItem>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Điều khoản sử dụng</NavLink></NavItem>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Quyền riêng tư</NavLink></NavItem>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Thông báo pháp lý</NavLink></NavItem>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Quyền riêng tư</NavLink></NavItem>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Thông tin doanh nghiệp</NavLink></NavItem>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Liên hệ với chúng tôi</NavLink></NavItem>
						<NavItem component="li" size={{sx: 12, sm: 6, md: 4, lg: 3}}><NavLink component={RouterLink} to="/">Đạo luật về giao dịch thương mại được chỉ định</NavLink></NavItem>
					</NavList>
					<Copyright component="p">© 1997-2026 Netflix, Inc.</Copyright>
			</Container>
		</Footer>
	)
}

export default MainFooter
