import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import LogoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";

/* import Image from "next/image"; 
  * NextJS uses this component to render images in a very good way... but it requires fixed width and height to be set in the component props, so i'm not gonna use it for now
*/

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={LogoImg.src} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
