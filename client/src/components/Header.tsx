import { Box, Button, Flex, Text, Link, Image, HStack, Menu, MenuButton, MenuList, MenuItem, MenuDivider, MenuGroup } from "@chakra-ui/react"
import { useBaseContext } from "../contexts/BaseContext"

import { FiChevronLeft, FiChevronDown } from "react-icons/fi"

import NextLink from "next/link"
import { useRouter } from "next/router"

interface HeaderProps {
    back?: boolean
}

export function Header({ back }: HeaderProps) {

    const router = useRouter()

    let currentToken = "0x000"

    if (router.query?.token){
        currentToken = (router.query.token as string).toLowerCase()
    }




    const {
        accounts, inList, myTokenBalance, tokenSymbol, tokens
    } = useBaseContext()

    const address = accounts ?
        `${accounts[0].substr(0, 2)}..${accounts[0].substr(-3)}` :
        "0x..000"

    return (

        
        <Box
            mt="5"
            bg="cyan.800"
            width="100%"
            align="center"
            maxW={1050}
            
        >
            <Flex
                justify="space-between"
                my="15"
                align="center"
                maxW={1050}
                flexWrap="wrap"
           
                mx="5"
                px="5"
                
            >
                <HStack spacing="1" >


                    {back && (<NextLink href="/"><Link ml="-7" mr="5" > <Image size="25px" as={FiChevronLeft} /></Link></NextLink>)}
                    <Text fontSize={["22","34"]} fontWeight="bold">{tokenSymbol} Token Sale</Text>

                </HStack>


             

                <Menu >
                    <MenuButton colorScheme="cyan" as={Button} rightIcon={<FiChevronDown />}>
                        <Text fontSize="15" >{address}</Text>
                    </MenuButton>
                    <MenuList color="gray.600" align="flex">


                        <Box align="start" ml="4">
                            {inList ? (
                                <Text fontWeight="bold" color="green.500">In the Club</Text>
                            ) : (
                                <Text fontWeight="bold" color="red.500">Not in the Club</Text>
                            )}
                        </Box>
                        <Box ml="4" align="start"><b>Balance</b>: {myTokenBalance} {tokenSymbol}</Box>

                        {tokens.length > 0 && (
                            <>
                                <MenuDivider />
                                <MenuGroup title="Tokens" align="start">
                                    {tokens.map(t => <MenuItem key={t.address} isDisabled={currentToken === t.address.toLowerCase()} >
                                        <NextLink  href={`/${t.address}`}>
                                            <Link as="span" _hover={{ textDecoration: "none"}} >
                                                <Text  fontSize="small">- {t.symbol}</Text>
                                            </Link>
                                        </NextLink>

                                        
                                    </MenuItem> )}
                                </MenuGroup>
                            </>
                        )}






                    </MenuList>
                </Menu>





            </Flex>



        </Box>
    )
}