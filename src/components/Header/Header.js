import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Heading, Container, Box, Flex } from '@magicsoup.io/stock'
import { Menu } from '../../styled'

const Header = ({ siteTitle, props }) => (
  <Menu>
    <Container width='100%'>
      <Flex justifyContent='space-between' alignItems='center'>
        <Heading as='h1'>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Heading>
        <Link
          to="/app/profile"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Profile
        </Link>
      </Flex>
    </Container>
  </Menu>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
