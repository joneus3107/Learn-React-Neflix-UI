import { useContext } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router';
import { UserContext } from '../contexts/UserContext';

import { USERS } from '../data/user';
import { Box, Stack, Typography } from '@mui/material';
import { UserCard } from '../components';
import { useUser } from '../hooks/useUser';

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
	const { user } = useContext(UserContext);
	const { changeUser } = useUser();
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from || '/';
	if (user) {
    return <Navigate to={from} replace />;
  }

	const changeUserHandler = newUser => {
		changeUser(newUser);
		navigate(from, {replace: true})
	}


	return (
		<Box sx={style_wrapper}>
			<Box sx={{
				padding: '20px'
			}}>
				<Typography component="h1" sx={style_title}>Ai đang xem?</Typography>
				<Stack spacing={{xs: 1, sm: 2}} direction='row' useFlexGap sx={style_stack}>
					{ USERS.map(user => (
					<Box key={user.id}>
						<UserCard user={user} onClick={() => changeUserHandler(user)} />
					</Box>
					)) }
				</Stack>
			</Box>
		</Box>
	)
}

export default UserList
