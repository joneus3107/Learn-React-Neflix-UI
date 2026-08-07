import { styled, alpha, Button } from '@mui/material'

const CommonButton = styled(Button, {
	shouldForwardProp: (prop) => prop !== 'kind',
})(({ theme, kind }) => ({
	fontSize: '14px',
	fontWeight: '500',
	borderRadius: '9999px',
	transition: 'opacity .3s ease-in-out',
	...(kind === 'normal' && {
		backgroundColor: alpha('#808080', .4),
		color: theme.palette.text.primary,
	}),
	...(kind === 'white' && {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.common.black,
	}),
	[theme.breakpoints.up('md')]: {
		fontSize: '18px',
	},
	'& .MuiButton-startIcon': {
    marginRight: '4px',

    '& svg': {
      fontSize: '150%',
    },
  },
	'&:hover': {
		opacity: ".8"
	}
}))

function CButton({children, kind='normal', ...props}) {


	return (
		<CommonButton kind={kind} {...props}>
			{children}
		</CommonButton>
	)
}

export default CButton
