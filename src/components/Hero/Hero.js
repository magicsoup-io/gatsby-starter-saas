import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Flex, Box, Heading, Text } from '@magicsoup.io/stock'
import { P } from '../../styled'

const Hero = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        heroJson {
          displayTitle
          subTitle
        }
      }
    `}
    render={data => (
      <Flex
        p={4}
        pt={[6,7]}
        alignItems='center'
        bg='greyLight'
      >
        <Box>
          <Heading as='h1' variant='h1' fontSize={[6,7,8]} m={0}>
            {data.heroJson.displayTitle}
          </Heading>
          <P>
            {data.heroJson.subTitle}
          </P>
        </Box>
      </Flex>
    )}
  />
)

export default Hero
