import * as Dialog from '@radix-ui/react-dialog'

import * as s from '../../styles/components/checkoutModal'
import { X } from 'phosphor-react'

export default function CheckoutModal() {
    return (
        <Dialog.Portal>
            <s.Content>
              <s.Close>
                <X size={24}/>
              </s.Close>

              <s.Title>
                Sacola de compras
              </s.Title>

              <s.CheckoutItemList>
                <s.CheckoutItem>
                  <s.ItemImage>

                  </s.ItemImage>

                  <s.ItemInfo>
                    <h2>Camiseta 1</h2>
                    <s.PriceDisplay>
                      R$ 79,90
                    </s.PriceDisplay>
                    <s.RemoveButton>Remover</s.RemoveButton>
                  </s.ItemInfo>
                </s.CheckoutItem>

                <s.CheckoutItem>
                  <s.ItemImage>

                  </s.ItemImage>

                  <s.ItemInfo>
                    <h2>Camiseta 2</h2>
                      <s.PriceDisplay>
                        R$ 89,90
                      </s.PriceDisplay>
                      <s.RemoveButton>Remover</s.RemoveButton>
                  </s.ItemInfo>

                </s.CheckoutItem>
              </s.CheckoutItemList>

              <s.ConfirmPurchaseContainer>
                <s.ProductAmountContainer>
                  <p>Quantidade</p>
                  <s.ProductAmount>
                    2
                  </s.ProductAmount>
                </s.ProductAmountContainer>

                <s.TotalPriceContainer>
                  <p>Valor total</p>
                  <s.PriceDisplay>
                    R$ 169,80
                  </s.PriceDisplay>
                </s.TotalPriceContainer>

                <s.ConfirmPurchaseButton>
                  Finalizar compra
                </s.ConfirmPurchaseButton>
              </s.ConfirmPurchaseContainer>
            </s.Content>
          </Dialog.Portal>
    )
}