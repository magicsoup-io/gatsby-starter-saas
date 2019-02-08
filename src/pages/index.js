import React from 'react'

import {
  Hero,
  Layout,
  SEO,
  Status,
} from '../components'

import { 
  Container ,
  Box,
  Flex,
} from '@magicsoup.io/stock'

import { Link } from 'gatsby'
import { P } from '../styled'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
        <Hero />
        <Flex fontSize={3} pt={2} justifyContent='flex-end'>
          <Link to='/pages/readme'>Go to Readme →</Link>
        </Flex>
        <Box pt={6}>
          <hr/>
          <Status />
        </Box>
    </Container>
  </Layout>
)

export default IndexPage
