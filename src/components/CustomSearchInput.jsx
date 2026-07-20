import { styled, alpha, ClickAwayListener, Box, IconButton, InputBase, Stack, Collapse } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react'

const InputField = styled(Box)({
	display: 'flex',
	justifyContent: 'flex-end',
})

const InputStack = styled(Stack)(({ theme }) => ({
	alignItems: 'center',
	maxWidth: '300px',
	boxSizing: 'border-box',
	borderRadius: '50px',
	padding: '5px',
	overflow: 'hidden',
	transition: '.3s border',
}))

function CustomSearchInput() {
	const [open, setOpen] = useState(false)

	return (
		<ClickAwayListener onClickAway={() => {setOpen(false)}}>
			<InputField>
				<InputStack direction="row" sx={(theme) => ({
					border: `1px solid ${open?alpha(theme.palette.text.primary, .3) : 'transparent'}`
				})}>
					<IconButton onClick={() => {setOpen(true)}} disabled={open}>
						<SearchIcon/>
					</IconButton>
					<Collapse in={open} orientation="horizontal" timeout={500}><InputBase/></Collapse>
				</InputStack>
			</InputField>
		</ClickAwayListener>
	)
}

export default CustomSearchInput
