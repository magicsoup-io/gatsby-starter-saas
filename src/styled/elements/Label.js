// styled-components based extension
import React from 'react'
import styled from 'styled-components'
import { Text } from '@magicsoup.io/stock'

const Label = styled(Text)`
  line-height: 1.55;
  display: flex;
  flex-direction: column;

  strong{
    font-weight: 700;
  }
`

Label.defaultProps = {
  as: 'label',
  fontSize: 3,
  m: 0,
  p: 0,
  pt: 3,
}

export default Label