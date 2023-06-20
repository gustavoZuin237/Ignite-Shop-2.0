import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import LogoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";
import { Handbag } from "phosphor-react";

import Image from "next/image";

import * as Dialog from '@radix-ui/react-dialog'
import CheckoutModal from "../components/checkoutModal";

import { CheckoutContextProvider } from "../contexts/checkoutContext";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CheckoutContextProvider>
        <Header>
          <Image src={LogoImg.src} width={130} height={52} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <Handbag size={24}/>
              </button>
            </Dialog.Trigger>

            <CheckoutModal />
          </Dialog.Root>
        </Header>
        <Component {...pageProps} />
      </CheckoutContextProvider>
    </Container>
  )
}
