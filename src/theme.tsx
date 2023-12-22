const colors = {
    primary: 'hsl(47, 88%, 63%)',
    neutral: {
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 50%)',
        black: 'hsl(0, 0%, 7%)',
    }
} as const

const fontWeights = {
    bold: 800,
    semiBold: 600
} as const

const fontSizes = {
    basic: '1rem',
    paragraph: '1rem',
    heading: '2rem'
} as const

export const theme = {
    colors,
    fontWeights,
    fontSizes
} as const