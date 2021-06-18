import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "../styles/theme"
import {BaseContextProvider} from '../contexts/BaseContext';

function MyApp({ Component, pageProps }) {
  return  (

    <ChakraProvider resetCSS theme={theme}>

      <BaseContextProvider >
        <Component {...pageProps} />
      </BaseContextProvider>
      
    </ChakraProvider>


  )
}

export default MyApp

