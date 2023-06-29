import * as Dialog from "@radix-ui/react-dialog";

import * as s from "../../styles/components/checkoutModal";
import { X } from "phosphor-react";

import { useContext } from "react";
import { CheckoutContext, Product } from "../../contexts/checkoutContext";

import Image from "next/image";

export default function CheckoutModal() {
  const { checkoutProducts } = useContext(CheckoutContext);

  function calculateTotalPrice(prices: Product[]) {
    let values = [];
    let totalPrice = 0;

    prices.map((product) => {
      values = [...values, product.price];
    });

    totalPrice = values.reduce((sum, num) => sum + num, 0);

    return new Intl.NumberFormat("pt-Br", {
      style: "currency",
      currency: "BRL",
    }).format(totalPrice);
  }

  return (
    <Dialog.Portal>
      <s.Content>
        <s.Close>
          <X size={24} />
        </s.Close>

        <s.Title>Sacola de compras</s.Title>

        <s.CheckoutItemList>
          {checkoutProducts.map((product) => {
            return (
              <s.CheckoutItem key={product.id}>
                <s.ItemImage>
                  <Image
                    src={product.imageUrl}
                    width={102}
                    height={93}
                    alt=""
                  />
                </s.ItemImage>

                <s.ItemInfo>
                  <h2>{product.name}</h2>
                  <s.PriceDisplay>{product.formattedPrice}</s.PriceDisplay>
                  <s.RemoveButton>Remover</s.RemoveButton>
                </s.ItemInfo>
              </s.CheckoutItem>
            );
          })}
        </s.CheckoutItemList>

        <s.ConfirmPurchaseContainer>
          <s.ProductAmountContainer>
            <p>Quantidade</p>
            <s.ProductAmount>{checkoutProducts.length}</s.ProductAmount>
          </s.ProductAmountContainer>

          <s.TotalPriceContainer>
            <p>Valor total</p>
            <s.PriceDisplay>
              {calculateTotalPrice(checkoutProducts)}
            </s.PriceDisplay>
          </s.TotalPriceContainer>

          <s.ConfirmPurchaseButton>Finalizar compra</s.ConfirmPurchaseButton>
        </s.ConfirmPurchaseContainer>
      </s.Content>
    </Dialog.Portal>
  );
}
