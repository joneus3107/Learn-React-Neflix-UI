import { styled, alpha, ClickAwayListener, Box, IconButton, InputBase, Stack, Collapse } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { ThemeContext } from '../contexts/ThemeContext';
import { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router';

const InputField = styled(Box)({
	display: 'flex',
	justifyContent: 'flex-end',
})

const InputStack = styled(Stack)(() => ({
	alignItems: 'center',
	maxWidth: '300px',
	boxSizing: 'border-box',
	borderRadius: '50px',
	padding: '5px',
	overflow: 'hidden',
	transition: '.3s border',
}))

function CustomSearchInput({ redirect = false }) {
	const { searchParam, setSearchParam } = useContext(ThemeContext)
	const [open, setOpen] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	const handleChange = inputVal => {
		setSearchParam(inputVal)
		if(redirect && location.pathname !== '/search') {
			navigate('/search')
		}
	}

	return (
		<ClickAwayListener onClickAway={() => {setOpen(false)}}>
			<InputField>
				<InputStack direction="row" sx={(theme) => ({
					border: `1px solid ${open?alpha(theme.palette.text.primary, .3) : 'transparent'}`
				})}>
					<IconButton onClick={() => {setOpen(true)}} disabled={open} sx={{
						padding: {xs: '4px', md: '8px'}
					}}>
						<SearchIcon/>
					</IconButton>
					<Collapse in={open} orientation="horizontal" timeout={500}><InputBase sx={{width: { xs: 85, sm: 130, md: 220 }}} value={searchParam} onChange={e => handleChange(e.target.value)} /></Collapse>
				</InputStack>
			</InputField>
		</ClickAwayListener>
	)
}

export default CustomSearchInput
