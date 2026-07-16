import cover01 from '../assets/img/user_cover/cover_01.png';
import cover02 from '../assets/img/user_cover/cover_02.png';
import cover03 from '../assets/img/user_cover/cover_03.png';
import cover04 from '../assets/img/user_cover/cover_04.png';
import cover05 from '../assets/img/user_cover/cover_05.png';

import { Box, Stack, Typography } from '@mui/material';
import { UserCard } from '../components';

const USERS = [
  { id: 1, name: 'User 1', cover: cover01 },
  { id: 2, name: 'User 2', cover: cover02 },
  { id: 3, name: 'User 3', cover: cover03 },
  { id: 4, name: 'User 4', cover: cover04 },
  { id: 5, name: 'User 5', cover: cover05 },
];

const style_wrapper = {
	width: '100%',
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

const style_title = {
	textAlign: 'center',
	fontWeight: '400',
	fontSize: {sm: '30px', md: '46px'},
	lineHeight: '1.2',
	marginBlock: '0 .6em',
}

const style_stack = {
	flexWrap: 'wrap',
	justifyContent: 'center'
}

function UserList() {
	return (
		<Box sx={style_wrapper}>
			<Box sx={{
				padding: '20px'
			}}>
				<Typography component="h1" sx={style_title}>Ai đang xem?</Typography>
				<Stack spacing={{xs: 1, sm: 2}} direction='row' useFlexGap sx={style_stack}>
					{ USERS.map(user => (
					<Box key={user.id}>
						<UserCard user={user} click={true} />
					</Box>
					)) }
				</Stack>
			</Box>
		</Box>
	)
}

export default UserList
