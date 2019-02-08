
const primary = 'purple'
const fontSizes = [
  12, 16, 18, 22, 26, 30, 42, 50
]
const space = [
  0, 4, 8, 16, 32, 64, 128, 256
]

export default {
  ...fontSizes,
  ...space,
  breakpoints: ['40em', '52em', '64em'],
  colors: {
    primary: primary,
    grey: '#EFEFEE',
    greyDark: '#9B9B9B',
  },
  fonts: {
    sans: '"Overpass", system-ui, sans-serif'
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  Button: {
    fontSize: fontSizes[3],
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: primary,
      '&:hover': {
        color: '#fff',
      }
    },
    white: {
      color: '#fff',
      backgroundColor: 'rgba(255,255,255,0.2)',
      boxShadow: 'inset 0 0 0 2px',
      fontWeight: 400,
      '&:hover': {
        color: primary,
        backgroundColor: '#fff'
      }
    }
  },
  headings: {
    h1: {
      fontSize: fontSizes[6],
      fontWeight: 400,
    },
    h2: {
      fontSize: fontSizes[5],
      fontWeight: 400,
    },
    h3: {
      fontSize: fontSizes[4],
      fontWeight: 400,
    },
    h4: {
      fontSize: fontSizes[2],
      fontWeight: 400,
    }
  },
  icons: {
    defaultDisplay: 'flex',
    defaultSize: '16px',
    sizeMini: '16px',
    sizeMedium: '32px',
    sizeLarge: '64px'
  }
}