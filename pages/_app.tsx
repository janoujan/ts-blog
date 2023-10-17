import '../styles/global.css';
import { appProps } from 'next/app';

export default function App({ Component, pageProps }: appProps) {
  return <Component {...pageProps} />;
}
