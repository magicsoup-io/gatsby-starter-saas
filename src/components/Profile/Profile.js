
import React, { Fragment } from 'react'
import { Container, Box, Heading, Card } from '@magicsoup.io/stock'
import { getCurrentUser } from '../../services/auth'
import { P } from '../../styled'

const Profile = () => {
  const { name, email } = getCurrentUser()

  return (
    <Container>
      <Heading as='h1' variant='h1'>Welcome back, {name}!</Heading>
      <Card 
        variant='grey' 
        maxWidth={600} 
        p={5} 
        mb={5}
        ml={4}>
        <Heading as='h2' variant='h3'>User Data:</Heading>
        <P>
          User: {name}<br/>
          E-Mail: {email}
        </P>
      </Card>
    </Container>
  )
}

export default Profile