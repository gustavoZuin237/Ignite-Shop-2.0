import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

import Stripe from "stripe";
import { stripe } from "../../lib/stripe";

import axios from "axios";

import { useContext } from "react";
import { CheckoutContext } from "../../contexts/checkoutContext";

import { useState } from "react";
import { useRouter } from "next/router";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    formattedPrice: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const router = useRouter();

  const { checkoutProducts, setCheckoutProducts } = useContext(CheckoutContext);

  async function handleAddToCart() {
    try {
      setIsCreatingCheckoutSession(true);

      setCheckoutProducts([product, ...checkoutProducts]);

      router.push("/");
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao adicionar a sacola!");
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop 2.0</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.formattedPrice}</span>

          <p>{product.description}</p>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleAddToCart}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_NzBvSoJLk0o5iA" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        url: product.url,
        price: price.unit_amount / 100,
        formattedPrice: new Intl.NumberFormat("pt-Br", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // * 1 hora
  };
};
