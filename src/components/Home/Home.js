
import React, { Fragment } from "react"
import { getCurrentUser } from "../../services/auth"

const Home = () => {
  const { name } = getCurrentUser()

  return (
    <Fragment>
      <p>Welcome back, {name}!</p>
    </Fragment>
  )
}

export default Home