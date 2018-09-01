import { Flex, Box } from 'grid-styled'
import { Div, Nav, Img, Span } from 'styled-system-html';
import Link from 'next/link'
import SiteNavLink from './SiteNavLink'
import SiteNavLinkExternal from './SiteNavLinkExternal'

export default (props) => (
    <Div bg="base" position="fixed" zIndex="9999" width={1}>
        <Nav bg="rgba(0,0,0,.2)" textAlign='left' px={[2,0,2]}>
            <Flex flexWrap="wrap" fontSize={[1,2]}>
                <SiteNavLink url="/" isCurrent={props.current === 'Index'}>Styled Starter</SiteNavLink>
                <SiteNavLink url="/about" isCurrent={props.current === 'About'}>About</SiteNavLink>
                <SiteNavLink url="/design" isCurrent={props.current === 'Design'}>Design</SiteNavLink>
                <SiteNavLink url="/components" isCurrent={props.current === 'Components'}>Components</SiteNavLink>
                <Box ml="auto">
                    <Div position={['absolute','relative']} top={['36px',0]} right="0">
                        <SiteNavLinkExternal url="https://github.com/johnpolacek/styled-starter">
                            <Img position="relative" css={{top:'3px',left:'-1px',height:'18px'}} src={(props.current === 'Index' ? '.' : '..') + '/static/images/github.svg'} alt="Octocat" /> Github
                        </SiteNavLinkExternal>
                    </Div>
                </Box>
            </Flex>
        </Nav>
    </Div>
)