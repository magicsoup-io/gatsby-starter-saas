import styled, { css } from 'styled-components'
import { themeGet } from 'styled-system'
import { Box } from '@magicsoup.io/stock'

const Menu = styled(Box)(props => css`
  background-color: ${themeGet('colors.primary', 'purple')};
  font-family: ${themeGet('fonts.sans', 'Arial')};
  position: fixed;
  width: 100%;
  display: flex;
  transition: background-color 300ms linear;
`)

Menu.defaultProps = {
  as: 'nav'
}

export default Menu
