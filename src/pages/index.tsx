import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { HomeContainer, Product } from "../styles/pages/home";
import { Handbag } from "phosphor-react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { GetStaticProps } from "next";

import { stripe } from "../lib/stripe";
import Stripe from "stripe";

import { useContext } from "react";
import { CheckoutContext } from "../contexts/checkoutContext";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    url: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.8,
      spacing: 48,
    },
  });

  const { setProductsList } = useContext(CheckoutContext);

  setProductsList(products);

  return (
    <>
      <Head>
        <title>Home | Ignite Shop 2.0</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <Link href={`/product/${product.id}`} prefetch={false}>
                  <button>
                    <Handbag size={32} />
                  </button>
                </Link>
              </footer>
            </Product>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: new Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: (60 * 60) / 2, // * 2 Horas
  };
};
