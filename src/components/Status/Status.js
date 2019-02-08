import React from 'react'
import { Link, navigate } from '@reach/router'
import { getCurrentUser, isLoggedIn, logout } from '../../services/auth'
import { Container, Box, Text } from '@magicsoup.io/stock'
import { P } from '../../styled'

export default (props) => {
  let details
  let color = props.color || 'inherit'
  let linkColor = props.linkColor || 'primary'

  if (!isLoggedIn()) {
    details = (
      <P color={color} mt={0}>
        To get the full app experience, you’ll need to
        {` `}
        <Link to='/app/login' style={{color: linkColor }}>log in</Link>.
      </P>
    )
  } else {
    const { name, email } = getCurrentUser()

    details = (
      <P color={color} mt={0}>
        Logged in as 
        {` `}
        <Link
          to='/app/profile'
          style={{ color: color }}
        >
          {name}
        </Link>
        {` - `}
        <a
          href='/'
          style={{ color: linkColor }}
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          Logout
        </a>
      </P>
    )
  }

  return <div>{details}</div>
}