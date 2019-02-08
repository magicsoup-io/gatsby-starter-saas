
import React, { Fragment } from 'react'
import { Container, Box, Heading } from '@magicsoup.io/stock'
import { getCurrentUser } from '../../services/auth'
import { P } from '../../styled'

const Profile = () => {
  const { name, email } = getCurrentUser()

  return (
    <Container py={6}>
      <Heading as='h1' variant='h1'>Welcome back, {name}!</Heading>
      <Heading as='h2' variant='h2'>User Data:</Heading>
      <P>User: {name}</P>
      <P>E-Mail: {email}</P>
      <P mt={5} fontWeight={700}>Define other private routes under <code>/src/pages/app.js</code></P>
    </Container>
  )
}

export default Profile