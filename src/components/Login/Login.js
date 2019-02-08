import React, { Fragment } from 'react'
import { Redirect } from '@reach/router'
import Form from '../Form'
import { handleLogin, isLoggedIn, getCurrentUser } from '../../services/auth'
import { Container, Card, Heading } from '@magicsoup.io/stock'

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
    user: null,
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

  componentDidMount() {
    if (isLoggedIn()) {
      let user = getCurrentUser()
      this.setState({ 
        user: user
      })
    }
  }

  render() {
    const { user } = this.state
    if(user){
      return <Redirect to='/app/profile' noThrow />
    }else{
      return (
        <Container maxWidth={800}>
          <Card variant='grey' p={4} pt={5} my={5}>
            <Heading variant='h1' as='h1'>Log in</Heading>
            <Form
              handleUpdate={e => this.handleUpdate(e)}
              handleSubmit={e => this.handleSubmit(e)}
            />
          </Card>
        </Container>
      )
    }
  }
}

export default Login