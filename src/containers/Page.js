import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Div, Text, H3 } from 'styled-system-html'
import theme 	from '../_Theme'
import Head		from './Head'
import SiteNav from '../components/SiteNav'

export default (props) => (
	<div>
	    <Head />
	    <ThemeProvider theme={theme}>
	    	<Div fontFamily={theme.font}>
	    		<SiteNav current={props.name} />
				<div>
					{props.children}
				</div>
			</Div>
    	</ThemeProvider>
  	</div>
)