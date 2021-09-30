import 'tailwindcss/tailwind.css'
import Header from '../components/Header'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp
