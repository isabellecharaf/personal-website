import React from 'react';
import { Global, css } from '@emotion/react';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata();  
    
 return(
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        * + * {
          margin-top: 1rem;
    
        }

        html,
        body {
          margin: auto;

          color: #111;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 12px;
          line-height: 1.4;

          /* remove margin for the main div that Gatsby mounts into */
          > div {
            margin-top: 5rem;
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #222;
          line-height: 1.1;

          + * {
            margin-top: 3rem;
          }
        }

        strong {
          color: #222;
        }

        li {
          margin-top: 0.25rem;
        }
      `}
    />

<Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description"  content={description} />
</Helmet>
    <Header />
    <main
      css={css`
        margin: 2rem auto;
        max-width: 890px;
        px;
      `}
    >
      {children}
    </main>
  </>
); }

export default Layout;

