import React, { Fragment } from 'react'
import { navigate } from 'gatsby'
import Form from '../Form'
import { handleLogin, isLoggedIn } from '../../services/auth'
import { Container, Box, Heading } from '@magicsoup.io/stock'

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <Container maxWidth={800}>
        <Box bg='grey' p={4} pt={5} my={5}>
          <Heading variant='h1' as='h1'>Log in</Heading>
          <Form
            handleUpdate={e => this.handleUpdate(e)}
            handleSubmit={e => this.handleSubmit(e)}
          />
        </Box>
      </Container>
    )
  }
}

export default Login