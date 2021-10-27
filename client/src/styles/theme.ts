import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({

    styles: {
        global: {
            body: {
                bgGradient: "linear(to-b, gray.600, gray.400)",
                color: 'gray.50'
            }
        }
    }
})