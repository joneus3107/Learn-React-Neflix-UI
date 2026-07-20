import { Stack, Box } from "@mui/material";
import ProfileMenu from "./ProfileMenu";
import NoticeMenu from "./NoticeMenu";
import CustomSearchInput from "./CustomSearchInput";

function CornerNav({sx}) {

	return (
		<Stack direction="row" spacing={1} sx={{
			alignItems: 'center',
			...sx
		}}>
			<Box sx={{flex: '1'}}><CustomSearchInput/></Box>
			<Box><NoticeMenu/></Box>
			<Box><ProfileMenu/></Box>
		</Stack>
	);
}

export default CornerNav;