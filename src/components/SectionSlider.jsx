import { SectionTitle } from "../styles/components"
import SliderMovie from "./SliderMovie"
import { Container, Box } from "@mui/material"

function SectionSlider({title, data}) {

	if(!title && !data) return;

	return (
		<Box component="section" sx={{
			paddingBlock: {
				xs: "30px",
				md: "50px"
			}
		}}>
			<Container maxWidth={false} sx={{paddingInline: {xs: "20px", md: "60px"}}}>
				<SectionTitle component="h2">{title}</SectionTitle>
			</Container>
			<SliderMovie/>
		</Box>
	)
}

export default SectionSlider
