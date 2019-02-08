
import React, { Fragment } from "react"
import { Container, Box, Heading } from '@magicsoup.io/stock'
import { getCurrentUser } from "../../services/auth"
import { P } from "../../styled"

const Profile = () => {
  const { name } = getCurrentUser()

  return (
    <Container py={6}>
      <Heading as="h1" variant="h1">Welcome back, {name}!</Heading>
      <P>Define other private routes under /pages/app.js</P>
    </Container>
  )
}

export default Profile