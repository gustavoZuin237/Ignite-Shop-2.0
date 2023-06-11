import * as Dialog from '@radix-ui/react-dialog'

import * as s from '../../styles/components/checkoutModal'

export default function CheckoutModal() {
    return (
        <Dialog.Portal>
            <s.Overlay />

            <s.Content>
              <s.Title>
                Titúlo
              </s.Title>

              <s.Close />
            </s.Content>
          </Dialog.Portal>
    )
}