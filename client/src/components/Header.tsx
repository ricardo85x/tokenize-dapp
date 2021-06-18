import { Box, Flex, Text } from "@chakra-ui/react"
import { useBaseContext } from "../contexts/BaseContext"

export function Header() {

    const {
        accounts, inList, myTokenBalance
    } = useBaseContext()

    const address = accounts ?
        `${accounts[0].substr(0, 5)}...${accounts[0].substr(-5)}` :
        "0x000...0000"

    return (
        <Box
            bg="#2F2F2F"
            width="100%"
            align="center"
        >
            <Flex
                justify="space-between"
                p="15"
                align="center"
                maxW={1030}
            >
                <Text fontSize="34" fontWeight="bold">Pog Token Sale</Text>

                <Flex bg="black" p="3" borderRadius="10" fontWeight="bold" align="flex-end" justify="center" direction="column">
                    <Text fontSize="15" >{address}</Text>
                    <Flex direction="row">
                        {inList ? (
                            <Text fontSize="12" mr="1" color="green.500">approved</Text>
                        ) : (
                            <Text fontSize="12" mr="1" color="red.500">not approved</Text>
                        )}
                        <Text fontSize="12" color="blue.500">{myTokenBalance} SPX</Text>
                    </Flex>
                </Flex>


            </Flex>



        </Box>
    )
}