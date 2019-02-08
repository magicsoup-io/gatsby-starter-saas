import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Home from "../components/Home"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

const App = () => (
  <Layout>
    <Status />
    <Router>
      <PrivateRoute path="/app/profile" component={Home} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App