import React, { Component } from 'react';
import { Box, H2, Text, A } from 'styled-system-html';
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'


class GettingStarted extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Box>
				<SiteHeader />
				<Box p={5} mw="1200px" mx="auto" align="center">
					<H2 pt={5} pb={4}>Getting Started Page</H2>
					<Text pb={5}>For more info, go to the <A href="https://johnpolacek.github.io/styled-starter/">Styled Starter Project</A></Text>
				</Box>
				<SiteFooter />
			</Box>
		);
	}
}

export default GettingStarted;
