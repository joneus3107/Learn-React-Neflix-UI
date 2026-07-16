import { Box, Typography } from '@mui/material';
import { useUser } from '../../hooks/useUser';
import styles from './style.module.css';

function UserCard({ user, click = false }) {
	const { changeUser } = useUser();

	return (
		<Box onClick={() => {
			if( !click ) return;
			changeUser(user)
		}} className={`${styles.userCard} ${click?styles.clickable:''}`}>
			<Box className={styles.thumbnail}>
				<img src={user.cover} alt={`profile - ${user.name}`} />
			</Box>
			<Typography className={styles.caption}>{user.name}</Typography>
		</Box>
	)
}

export default UserCard
