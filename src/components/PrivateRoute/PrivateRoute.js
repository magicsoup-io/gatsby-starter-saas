import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from '@reach/router'
import { isLoggedIn } from '../../services/auth'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to login page.
    return <Redirect to='/app/login' noThrow/>
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute