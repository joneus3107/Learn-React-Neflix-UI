import { styled, Box, CircularProgress } from '@mui/material'

const Wrapper = styled(Box)(() => ({
	width: '100%',
	height: '50svh',
	minHeight: '500px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}))

function LoadingScreen() {
	return (
		<Wrapper>
			<CircularProgress/>
		</Wrapper>
	)
}

export default LoadingScreen
