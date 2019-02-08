import React from 'react'
import { Router } from '@reach/router'
import { Container } from '@magicsoup.io/stock'
import {
  Layout,
  Profile,
  Login,
  PrivateRoute,
} from '../components'

const App = () => (
  <Layout>
    <Container>
      <Router>
        <PrivateRoute path='/app/profile' component={Profile} />
        <Login path='/app/login' />
        <PrivateRoute path='/app/' component={Profile} />
      </Router>
    </Container>
  </Layout>
)

export default App