import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'
import { Div, H3, Nav, Ul, Li, A } from 'styled-system-html'
import DocsPage from './DocsPage'
import theme from '../_Theme'

import Introduction from './design/Introduction'
import Color from './design/Color'
import Typography from './design/Typography'
import Layout from './design/Layout'

const content = {
	'Introduction': Introduction,
	'Color': Color,
	'Typography': Typography,
	'Layout': Layout,
}

export default (props) => (
	<DocsPage title="Design System" content={content} defaultContent='Introduction' theme={theme} />
)