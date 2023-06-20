import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: "$gray900",
        color: "$gray100",
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,
    },

    '::-webkit-scrollbar': {
        width: '4px',
        transition: '0.2s',
        borderRadius: '100vw'
    },
    
    '::-webkit-scrollbar-track': {
        background: '$gray800'
    },
    
    '::-webkit-scrollbar-thumb': {
        background: '$green500',
        borderRadius: '100vw'
    },
    
    '::-webkit-scrollbar-thumb:hover': {
        background: '$green300'
    }
})