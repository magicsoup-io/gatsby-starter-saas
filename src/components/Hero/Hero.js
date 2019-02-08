import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Flex, Box, Heading, Text } from '@magicsoup.io/stock'

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
        pt={6}
        alignItems="center"
      >
        <Box>
          <Heading as="h1" variant="h1">
            {data.heroJson.displayTitle}
          </Heading>
          <Text>
            {data.heroJson.subTitle}
          </Text>
        </Box>
      </Flex>
    )}
  />
)

export default Hero
