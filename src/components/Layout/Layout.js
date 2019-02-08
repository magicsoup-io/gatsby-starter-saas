import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../Header'
import Footer from '../Footer'
import { Box } from '@magicsoup.io/stock'

const Layout = ({ children }) => (
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
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
