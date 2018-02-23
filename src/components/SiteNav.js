import { Nav, Flex, Box, H1, A, Img, Text, Button } from 'styled-system-html';
import Link from 'next/link'
import SiteNavLink from './SiteNavLink'
import SiteNavLinkExternal from './SiteNavLinkExternal'

export default (props) => (
	<Box bg="base" position="relative" style={{zIndex:9999}}>
		<Nav bg="rgba(0,0,0,.2)" align='left' px={[2,0,2]}>
	    	<Flex wrap="wrap">
    			<SiteNavLink url="/" isCurrent={props.current === 'Index'}>Styled Starter</SiteNavLink>
    			<SiteNavLink url="/about" isCurrent={props.current === 'About'}>About</SiteNavLink>
    			<SiteNavLink url="/design" isCurrent={props.current === 'Design'}>Design</SiteNavLink>
    			<Box ml="auto">
    				<SiteNavLinkExternal url="https://github.com/johnpolacek/styled-starter">
    					<Img position="relative" style={{top:'3px',left:'-1px'}} src={(props.current === 'Index' ? '.' : '..') + '/static/images/github.svg'} height="18" alt="Octocat" /> Github
    				</SiteNavLinkExternal>
    			</Box>
	    	</Flex>
		</Nav>
	</Box>
)