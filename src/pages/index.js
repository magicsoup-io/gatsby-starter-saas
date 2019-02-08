import React from 'react'

import {
  Hero,
  Layout,
  SEO,
} from '../components'

import { 
  Container 
} from '@magicsoup.io/stock'

import { Link } from 'gatsby'
import { P } from '../styled'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
        <Hero />
        <P fontSize={3}>
          <Link to='/pages/readme'>Go to Readme</Link>
        </P>
    </Container>
  </Layout>
)

export default IndexPage
