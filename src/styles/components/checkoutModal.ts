import { styled } from ".."
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.75)',
})

export const Title = styled(Dialog.Title, {
    
})

export const Content = styled(Dialog.Content, {
    width: '30rem',
    background: 'red'
})

export const Close = styled(Dialog.Close, {

})