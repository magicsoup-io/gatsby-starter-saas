import React from "react"
import { Link, navigate } from "@reach/router"
import { getCurrentUser, isLoggedIn, logout } from "../../services/auth"
import { Container, Box, Text } from '@magicsoup.io/stock'
import { P } from '../../styled'

export default () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <Text color='white'>
        To get the full app experience, you’ll need to
        {` `}
        <Link to="/app/login" style={{color: 'white' }}>log in</Link>.
      </Text>
    )
  } else {
    const { name, email } = getCurrentUser()

    details = (
      <Text color='white'>
        Logged in as 
        {` `}
        <Link
          to="/app/profile"
          style={{ color: 'white' }}
        >
          {name}
        </Link>
        {` - `}
        <a
          href="/"
          style={{ color: 'white' }}
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          Logout
        </a>
      </Text>
    )
  }

  return <div>{details}</div>
}