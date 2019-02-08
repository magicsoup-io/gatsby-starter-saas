import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import Header from '../Header'
import Footer from '../Footer'
import { Box } from '@magicsoup.io/stock'

import theme from '../../styled/theme'
import GlobalStyle from '../../styled/global-styles'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <Fragment>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Box 
              as='main' 
              py={6}>
              {children}
            </Box>
            <Footer />
          </Fragment>
        )}
      />
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
