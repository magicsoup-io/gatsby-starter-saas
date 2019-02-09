import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Heading, Container, Box, Flex, Link as MagicLink } from '@magicsoup.io/stock'
import { Menu, P } from '../../styled'
import { isLoggedIn, logout } from '../../services/auth'
import Status from '../Status';

const Header = ({ siteTitle, props }) => (
  <Menu>
    <Container width='100%'>
      <Flex 
        justifyContent='space-between'
        flexWrap='wrap'
        alignItems='center'>
        <Heading as='h1' variant='h1' style={{fontSize: 25}}>
          <Link
            to='/'
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Heading>
        <P color='white' mt={0}>
          <Link to='/' style={{color: '#d3d2d1', paddingRight: '20px' }}>Home</Link>
          <Link to='/app/plans' style={{color: '#d3d2d1', paddingRight: '20px' }}>Pricing</Link>
          <Link to='/app/profile' style={{color: '#d3d2d1', paddingRight: '20px' }}>Profile</Link>
        </P>
        <Box mb={[2,0]}><Status color='white' linkColor='#d3d2d1' /></Box>
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
