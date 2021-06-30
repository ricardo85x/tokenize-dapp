import { Box, Button, Flex, Text, Link, Image, HStack, Menu, MenuButton, MenuList, MenuItem, MenuDivider, MenuGroup } from "@chakra-ui/react"
import { useBaseContext } from "../contexts/BaseContext"

import { FiChevronLeft, FiChevronDown } from "react-icons/fi"

import NextLink from "next/link"

interface HeaderProps {
    back?: boolean
}

export function Header({ back }: HeaderProps) {

    const {
        accounts, inList, myTokenBalance, tokenSymbol, tokens
    } = useBaseContext()

    const address = accounts ?
        `${accounts[0].substr(0, 5)}...${accounts[0].substr(-5)}` :
        "0x000...0000"

    return (

        
        <Box
            bg="cyan.800"
            width="100%"
            
            align="center"
            
        >
            <Flex
                justify="space-between"
                py="15"
                align="center"
                maxW={1100}
                px="10"
                
            >
                <HStack spacing="1" >


                    {back && (<NextLink href="/"><Link ml="-7" > <Image size="25px" as={FiChevronLeft} /></Link></NextLink>)}
                    <Text fontSize="34" fontWeight="bold">{tokenSymbol} Token Sale</Text>

                </HStack>


             

                <Menu >
                    <MenuButton colorScheme="cyan" as={Button} rightIcon={<FiChevronDown />}>
                        <Text fontSize="15" >{address}</Text>
                    </MenuButton>
                    <MenuList color="gray.600" align="flex">


                        <Box align="start" ml="4">
                            {inList ? (
                                <Text fontWeight="bold" color="green.500">Approved</Text>
                            ) : (
                                <Text fontWeight="bold" color="red.500">Not Approved</Text>
                            )}
                        </Box>
                        <Box ml="4" align="start"><b>Balance</b>: {myTokenBalance} {tokenSymbol}</Box>

                        {tokens.length > 0 && (
                            <>
                                <MenuDivider />
                                <MenuGroup title="Tokens" align="start">
                                    {tokens.map(t => <MenuItem key={t.address}>
                                        <NextLink href={`/${t.address}`}>
                                            <Link>
                                                <Text fontSize="small">- {t.symbol}</Text>
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