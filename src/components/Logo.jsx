import LogoImage from '../assets/img/common/logo.svg'
import { Box, styled } from '@mui/material'
import { Link as RouterLink } from 'react-router'

const PageLogo = styled(Box)({
	display: 'block',
	width: '100%',
	maxWidth: 'max-content',
	'& > img': {
		display: 'block'
	}
})

function Logo({ clickable = true, size = 76 }) {
  const image = <img src={LogoImage} alt="Netflix" width={size} />;

  if (!clickable) {
    return <PageLogo>{image}</PageLogo>;
  }

  return (
    <PageLogo
      component={RouterLink}
      to="/"
      aria-label="Trang chủ Netflix"
    >
      {image}
    </PageLogo>
  );
}

export default Logo
