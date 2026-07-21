import { IconButton } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';

function NoticeMenu() {
	return (
		<>
			<IconButton sx={{
				padding: {xs: '4px', md: '8px'}
			}}>
				<NotificationsIcon/>
			</IconButton>
		</>
	)
}

export default NoticeMenu
