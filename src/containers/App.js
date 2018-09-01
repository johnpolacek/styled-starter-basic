import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Head		from './Head'
import SiteNav from '../components/SiteNav'
import { Div, Text, H3 } from 'styled-system-html';
import theme from '../_Theme'
import Page from './Page'

class App extends Component {

	render() {
		return (
			<Page theme={theme} />
		)
	}
}

export default App

