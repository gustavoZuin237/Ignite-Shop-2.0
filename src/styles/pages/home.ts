import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    minHeight: 656,
    marginLeft: 'auto'
})

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'grab',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    img: {
        maxWidth: '100%',
        objectFit: 'cover'
    },

    '&:active': {
        cursor: 'grabbing',
    },

    footer: {
        position: "absolute",
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '1.5rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        div: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
        },

        strong: {
            fontSize: '$lg',
            color: '$gray100',
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300',
        },

        button: {
            width: '3.5rem',
            height: '3.5rem',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            border: 0,
            color: '$white',
            fontWeight: 'bold',
            backgroundColor: '$green500',
            borderRadius: '6px',
            transition: '0.2s',

            cursor: 'pointer',

            '&:hover': {
                backgroundColor: '$green300',
            }
        }
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1
        }
    }
})