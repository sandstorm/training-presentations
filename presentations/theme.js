import {github} from '@code-surfer/themes'

// Has to be imported into a deck like so to work properly:
// import { baseTheme } from '../../theme.js
// export const theme = baseTheme
export const baseTheme = {
  ...github,
  styles: {
    ...github.styles,
    Slide: {
      padding: '100px',
    },
    ul: {
      lineHeight: '1.3em',
    },
    blockquote: {
      fontWeight: '400',
      backgroundColor: '#03a9f42e',
      borderRadius: '8px',
      padding: '0.5em',
      margin: '0.5em',
      textAlign: 'justify',
    },
    p: {
      margin: '0',
    },
  },
}
