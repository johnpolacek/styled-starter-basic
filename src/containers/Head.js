import Head from 'next/head'

export default (props) => (
	<Head>
    	<meta charSet="utf-8" />
    	<link rel="mask-icon" href={'./static/favicon.svg'} />
    	<link rel="icon" type="image/x-icon" className="js-site-favicon" href={props.prefix + '/static/favicon.ico'} />
	    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
	    <meta name="theme-color" content="#000000" />
	    <title>Styled Starter | Starter Kit with React, Next.js and Styled Components</title>
    </Head>
)
