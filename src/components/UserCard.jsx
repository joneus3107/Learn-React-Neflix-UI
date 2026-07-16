import { Box, Typography, styled } from '@mui/material';
import { useUser } from '../hooks/useUser';

const Card = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'clickable'
})(({theme, clickable}) => ({
	color: 'grey',
	willChange: 'color',
	width: '128',
	...(clickable && {
		cursor: 'pointer',
		transition: 'color .3s ease-in-out',
		'& .thumbnail': {
			position: 'relative',
			'&::before': {
				content: '""',
				position: 'absolute',
				top: '0',
				left: '0',
				display: 'block',
				width: '100%',
				height: '100%',
				border: '2px solid currentColor',
				borderRadius: 'inherit',
				opacity: '0',
				transition: 'opacity .3s ease-in-out',
			}
		},
		'&:hover': {
			color: theme.palette.text.primary,
			'& .thumbnail': {
				'&::before': {
					opacity: '1',
				}
			}
		},
	})
}))

const Thumbnail = styled(Box)({
	display: 'block',
	width: '100%',
	aspectRatio: '1 / 1',
	overflow: 'hidden',
	borderRadius: '4px',
	'& img': {
		display: 'block',
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	}
})

const Caption = styled(Typography)({
	fontSize: '17',
	lineHeight: '1.2',
	textAlign: 'center',
	textOverflow: 'ellipsis',
	overflow: 'hidden',
	marginBlock: '.6em 0',
})

function UserCard({ user, click = false }) {
	const { changeUser } = useUser();

	return (
		<Card clickable={click} onClick={() => {
			if( !click ) return;
			changeUser(user)
		}}>
			<Thumbnail className="thumbnail">
				<img src={user.cover} alt={`profile - ${user.name}`} />
			</Thumbnail>
			<Caption>{user.name}</Caption>
		</Card>
	)
}

export default UserCard
