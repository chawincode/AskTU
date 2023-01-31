import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.css'
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  return <SSRProvider><Component {...pageProps} /></SSRProvider>;
}
