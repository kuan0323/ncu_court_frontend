import '../styles/globals.css'
import type { AppProps } from 'next/app'

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
