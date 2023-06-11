import { styled } from "..";

export const Container = styled('div', {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
    paddingBottom: '5rem',
})

export const Header = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1100,
    margin: '0 auto',

    button: {
        width: '3rem',
        height: '3rem',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        border: 0,
        color: '$gray300',
        fontWeight: 'bold',
        backgroundColor: '$gray800',
        borderRadius: '6px',
        transition: '0.2s',

        cursor: 'pointer',

        '&:hover': {
            color: '$white'
        }
    }
})