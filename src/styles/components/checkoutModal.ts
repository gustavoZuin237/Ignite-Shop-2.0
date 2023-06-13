import { styled } from ".."
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content, {
    minWidth: '30rem',
    height: '100vh',
    background: '$gray800',
    padding: '3rem',

    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(37%, -50%)',

    display: 'flex',
    flexDirection: 'column',
})

export const Close = styled(Dialog.Close, {
    position: 'absolute',
    top: '1.5rem',
    left: '27rem',

    cursor: 'pointer',
    transition: '0.2s',
    background: 'transparent',
    border: 0,
    color: '$gray300',

    '&:hover': {
        opacity: 0.8
    }
})

export const Title = styled(Dialog.Title, {
    fontSize: '$lg',
    lineHeight: '1.6',
    marginBottom: '2rem'
})

export const CheckoutItemList = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem'
})

export const CheckoutItem = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem'
})

export const ItemImage = styled('div', {
    width: '6.25rem',
    height: '5.875rem',
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: '8px'
})

export const ItemInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    
    h2: {
        color: '$gray300',
        fontSize: '$md',
        fontWeight: 400,
        marginBottom: '0.5rem'
    }
})

export const PriceDisplay = styled('strong', {
    color: '$gray100',
    fontSize: '$md'
})

export const RemoveButton = styled('button', {
    background: 'transparent',
    border: 0,
    color: '$green500',
    marginTop: '0.5rem',
    transition: '0.2s',

    fontWeight: 700,
    fontSize: '1rem',
    textAlign: 'left',

    '&:hover': {
        cursor: 'pointer',
        color: '$green300'
    }
})

export const ConfirmPurchaseContainer = styled('div', {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
})

export const ProductAmountContainer = styled('span', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1rem'
})

export const ProductAmount = styled('p', {
    fontSize: '1.125rem',
})

export const TotalPriceContainer = styled('span', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: '$md',

    strong: {
        fontSize: '$xl'
    }
})

export const ConfirmPurchaseButton = styled('button', {
    backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        marginTop: '3.625rem',
        cursor: 'pointer',
        fontSize: '$md',
        fontWeight: 'bold',

        '&:disabled': {
            opacity: '0.6',
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
        }
})