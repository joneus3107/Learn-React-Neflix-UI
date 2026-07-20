import { AppBar, Container, Box, styled, Stack } from '@mui/material'
import GlobalNav from './GlobalNav'
import Logo from './Logo'
import CornerNav from './CornerNav'

const PageHeader = styled(AppBar)(({ theme }) => ({
	background: theme.palette.background.default,
	paddingBlock: '10px',
	[theme.breakpoints.up('md')]: {
		paddingBlock: '15px',
	}
}))

function MainHeader() {
	return (
		<PageHeader component="header" position="sticky">
			<Container maxWidth={false}>
				<Stack spacing={2} direction='row' sx={{alignItems: 'center'}}>
					<Box component="h1" sx={{ flexShrink: '0' }}>
						<Logo/>
					</Box>
					<GlobalNav/>
					<CornerNav sx={{ flex: '1' }} />
				</Stack>
			</Container>
		</PageHeader>
	)
}

export default MainHeader
