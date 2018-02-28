import { Box, H2, Text, A } from 'styled-system-html'
import SiteFooter from '../components/SiteFooter'

export default (props) => (
	<Box>
		<Box p={6} mw="1200px" mx="auto" align="center">
			<H2 pt={5} pb={4}>Index Page</H2>
			<Text pb={5}>For more info, go to the <A href="https://johnpolacek.github.io/styled-starter/">Styled Starter Project</A></Text>
		</Box>
		<SiteFooter />
	</Box>
)
