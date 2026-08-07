import { styled, Typography } from "@mui/material";

export const SectionTitle = styled(Typography)(({ theme }) => ({
	fontSize: "16px",
	fontWeight: 500,
	marginBottom: "10px",
	[theme.breakpoints.up('md')]: {
		fontSize: "24px"
	}
}))