import React, { Fragment } from "react"
import { ThemeProvider } from 'styled-components'
import theme from './src/styled/theme'
import GlobalStyle from './src/styled/global-styles'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        {element}
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  )
}