import { VStack, Text, Input, Button } from "@chakra-ui/react"
import { useBaseContext } from "../contexts/BaseContext"
import { SubmitHandler, useForm } from 'react-hook-form'
import { ethers } from 'ethers'


export function BuyTokenComponent() {

    const {  currentSupply, tokenSymbol, accounts, tokenRate,  myTokenSaleContract } = useBaseContext()
    const { register, handleSubmit } = useForm()


    const handleBuyTokens: SubmitHandler<{tokens: number}> = async (data) => {

        if (data.tokens > 0 && accounts && myTokenSaleContract) {
          myTokenSaleContract.buyTokens(accounts[0], {
            value: ethers.BigNumber.from(data.tokens),
          })
        }
      }

    return (
        <VStack fontWeight="bold" spacing="5" align="flex-start">

            <Text color="yellowgreen">Current Token Supply {currentSupply} {tokenSymbol}</Text>

            <VStack as="form" onSubmit={handleSubmit(handleBuyTokens)} spacing="2" align="flex-start">
                <Text>How many tokens you want to buy?</Text>
                <Input   {...register("tokens")} defaultValue="5" label="amount" type="number" />
                <Button size="lg" colorScheme="blackAlpha" type="submit">Buy Tokens</Button>
                <Text  fontSize="12" color="red.300"> * Only {tokenRate} wei each</Text>
            </VStack>

            <Text>You can also send weis to the following address to obtain tokens</Text>
            <Text fontSize="14" color="red.300">Token value in ETH: {ethers.utils.formatUnits(tokenRate, "ether")}</Text>

            <Text fontSize="14" color="green.300">Address to send wei: {myTokenSaleContract && myTokenSaleContract.address}</Text>

        </VStack>
    )
}