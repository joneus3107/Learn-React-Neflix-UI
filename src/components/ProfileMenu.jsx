import { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { styled, ClickAwayListener, alpha, Box, Button, Avatar } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Help, PermIdentity, SwitchAccount, Edit } from '@mui/icons-material';
import { useUser } from '../hooks/useUser';
//data
import { USERS } from '../data/user';

const Menu = styled(Box)(({theme}) => ({
	color: theme.palette.text.primary,
	display: 'flex',
	alignItems: 'center',
	gap: '5px',
	cursor: 'pointer',
	padding: '5px',
}))

const UserImage = styled(Box)({
	width: '35px',
	aspectRatio: '1 / 1',
	borderRadius: '5px',
	objectFit: 'cover',
})

const ModalMenu = styled(Box)(({theme}) => ({
	position: 'absolute',
	width: '100%',
	minWidth: '250px',
	top: '100%',
	right: '0',
	padding: '0',
	backgroundColor: theme.palette.background.paper,
}))

const ModalItem = styled(Button)(({theme}) => ({
	color: theme.palette.text.primary,
	width: '100%',
	boxSizing: 'border-box',
	justifyContent: 'flex-start',
	borderRadius: '0',
	'&:hover': {
		backgroundColor: alpha(theme.palette.text.primary, .08),
	},
	'& .MuiTouchRipple-child': {
		backgroundColor: theme.palette.text.primary
	}
}))

function ProfileMenu() {
	const [ isOpen, setIsOpen ] = useState(false);
	const { user } = useContext(UserContext);
	const { logOut, changeUser } = useUser();
	

	return (
		<ClickAwayListener onClickAway={() => setIsOpen(false)}>
			<Box sx={{
				position: 'relative',
			}}>
				<Menu onClick={() => setIsOpen(state => !state)}>
					<UserImage component="img" src={user.cover} alt={user.name} />
					{isOpen ? <ArrowDropUp/> : <ArrowDropDown/> }
				</Menu>
				{isOpen? (
					<ModalMenu component="ul">
						{
							USERS.filter(theUser => theUser.id !== user.id).map(theUser => (
								<ModalItem
									key={theUser.id}
									component="li"
									startIcon={
										<Avatar
											src={theUser.cover}
											alt={theUser.name}
											sx={{
												width: '30px',
												height: '30px',
											}}
											variant="rounded"
										/>
									}
									onClick={() => changeUser(theUser)}
									>{theUser.name}</ModalItem>
							))
						}
						<ModalItem component="li" startIcon={<Edit />}>Quản lý hồ sơ</ModalItem>
						<ModalItem component="li" startIcon={<SwitchAccount />}>Chuyển hồ sơ</ModalItem>
						<ModalItem component="li" startIcon={<PermIdentity />}>Tài khoản</ModalItem>
						<ModalItem component="li" startIcon={<Help />}>Trung tâm hỗ trợ</ModalItem>
						<ModalItem
							component="li"
							sx={(theme)=>({
								borderTop: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`
							})}
							onClick={() => logOut()}
						>Đăng xuất khỏi Netflix</ModalItem>
					</ModalMenu>
				):''}
			</Box>
		</ClickAwayListener>
	)
}

export default ProfileMenu
