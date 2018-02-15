import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'styled-system-html';
import Introduction from './design/Introduction';
import Color from './design/Color';
import Font from './design/Font';
import TypeScale from './design/TypeScale';
import Headings from './design/Headings';
import Lists from './design/Lists';
import TextElements from './design/TextElements';
import Paragraph from './design/Paragraph';
import Layout from './design/Layout';
import Components from './design/Components';
import Buttons from './design/Buttons';
import Cards from './design/Cards';
import Forms from './design/Forms';
import ReactDOM from 'react-dom';
import {Catalog} from 'catalog';
import theme from '../_Theme';


class Design extends Component {
	constructor() {
		super();
		this.renderCatalog = this.renderCatalog.bind(this);
	}

	renderCatalog() {
		const catalogTheme = {
			// Colors
			background: theme.colors.gray0 || '#F2F2F2',
			textColor: theme.colors.black,
			codeColor: theme.colors.gray || '#AAA',
			linkColor: theme.colors.base,

			// NavigationBar background color, but also sometimes used as a foreground
			// or border color.
			lightColor: '#D6D6D6',

			// Used in PageHeader
			pageHeadingBackground: theme.colors.base,
			pageHeadingTextColor: '#fff',

			// Used in Menu and PageHeader to make sure the top parts have
			// the same height.
			pageHeadingHeight: 200,

			// Used for navigation bar
			navBarBackground: '#fff',
			navBarTextColor: theme.colors.blue || theme.colors.black,

			// Used in ResponsiveTabs (tab text), Download specimen (title text).
			// Typography: headings.
			brandColor: theme.colors.base,

			sidebarColor: '#fff',
			sidebarColorActive: theme.colors.gray1 || '#D1312E',
			sidebarColorText: theme.colors.gray9 || '#003B5C',
			sidebarColorTextActive: theme.colors.base,
			sidebarColorLine: theme.colors.gray0 || '#EBEBEB',
			sidebarColorHeading: theme.colors.base,

			// Used in the html, react, and image specimens.
			bgLight: theme.colors.gray0 || '#F2F2F2',
			bgDark: theme.colors.gray8 || '#333333',

			// Fonts
			fontFamily: theme.font + "'Roboto', sans-serif",
			fontHeading: theme.font + "'Roboto', sans-serif",
			fontMono: theme.monospace + "'Roboto Mono', monospace",
		};

		// See catalog/DefaultTheme.js - https://github.com/interactivethings/catalog/blob/master/src/DefaultTheme.js
		ReactDOM.render(
		  	<Catalog
			    title='Styled Starter Design System'
			    theme={catalogTheme}
			    pages={[
			      	{
				        path: '/',
				        title: 'Introduction',
				        content: () => {
					    	return <Introduction theme={theme} />
					    }
					},
					{
				        path: '/color',
				        title: 'Color',
				        content: () => {
					    	return <Color theme={theme} />
					    }
					},
					{
						title: 'Typography',
						pages: [
							{
								path: '/font',
						        title: 'Font',
						        content: () => {
							    	return <Font theme={theme} />
							    }
							},
							{
								path: '/type-scale',
						        title: 'Type Scale',
						        content: () => {
							    	return <TypeScale theme={theme} />
							    }
							},
							{
								path: '/text-elements',
						        title: 'Text Elements',
						        content: () => {
							    	return <TextElements theme={theme} />
							    }
							},
							{
								path: '/headings',
						        title: 'Headings',
						        content: () => {
							    	return <Headings theme={theme} />
							    }
							},
							{
								path: '/paragraph',
						        title: 'Paragraph',
						        content: () => {
							    	return <Paragraph theme={theme} />
							    }
							},
							{
								path: '/lists',
						        title: 'Lists',
						        content: () => {
							    	return <Lists theme={theme} />
							    }
							}
						]
					},
					{
				        path: '/layout',
				        title: 'Layout',
				        content: () => {
					    	return <Layout theme={theme} />
					    }
					},
					{
						title: 'Components',
						pages: [
							{
								path: '/overview',
						        title: 'Overview',
						        content: () => {
							    	return <Components theme={theme} />
							    }
							},
							{
								path: '/buttons',
						        title: 'Buttons',
						        content: () => {
							    	return <Buttons theme={theme} />
							    }
							},
							{
								path: '/cards',
						        title: 'Cards',
						        content: () => {
							    	return <Cards theme={theme} />
							    }
							},
							{
								path: '/forms',
						        title: 'Forms',
						        content: () => {
							    	return <Forms theme={theme} />
							    }
							},
						]
				    }
			    ]}
			/>,
			document.getElementById('design-container')
		)
	}

	componentDidMount() {
		this.renderCatalog();
	}

	render() {
		return (
			<Box>
				<div id="design-container" />
			</Box>
		);
	}
}

Design.propTypes = {
	theme: PropTypes.object
}

export default Design;
