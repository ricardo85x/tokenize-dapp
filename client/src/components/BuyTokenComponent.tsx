import { VStack, Text, Input, Button } from "@chakra-ui/react"
import { useBaseContext } from "../contexts/BaseContext"
import { SubmitHandler, useForm } from 'react-hook-form'
import { ethers } from 'ethers'
import { toast } from "react-toastify"

export function BuyTokenComponent() {

    const {  currentSupply, tokenSymbol, accounts, tokenRate,  myTokenSaleContract, myTokenContract } = useBaseContext()
    const { register, handleSubmit } = useForm()

    const handleBuyTokens: SubmitHandler<{tokens: number}> = async (data) => {

        if (data.tokens > 0 && accounts && myTokenSaleContract) {

          const totalValue = ethers.BigNumber.from(tokenRate).mul(ethers.BigNumber.from(data.tokens))

          console.log("TOTALValue", totalValue.toNumber())

          try {
            await myTokenSaleContract.buyTokens(accounts[0], {
              value: totalValue.toNumber(),
            })
            toast.info("Transaction sent, balance will updated once confirmed")

          } catch (err) {
            toast.error("Error sending transaction")
            console.error("Error sending transaction",err)
          }
        }
      }
    
    const handleAddTokenMetamask =  async () => {

      if (window.ethereum) {
        await (window.ethereum as any).request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: myTokenContract.address, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: 0, // The number of decimals in the token
           //   image: 'https://github.com/ricardo85x.png', // A string url of the token logo
            },
          },
        });

      }

    }

    return (
        <VStack fontWeight="bold" spacing="5" align="flex-start">

            <Text color="yellowgreen">Current Token Supply {currentSupply} {tokenSymbol}</Text>

            <VStack as="form" onSubmit={handleSubmit(handleBuyTokens)} spacing="2" align="flex-start">
                <Text>How many tokens you want to buy?</Text>
                <Input   {...register("tokens")} defaultValue="5" label="amount" type="number" />
                <Button size="lg" colorScheme="blackAlpha" type="submit">Buy Tokens</Button>
                <Text  fontSize="12" color="red.300"> * Only {ethers.utils.formatEther(tokenRate)} ETH each</Text>
            </VStack>

            <Text>You can also send weis to the following address to obtain tokens</Text>
            <Text fontSize="14" color="red.300">Token value in ETH: {ethers.utils.formatUnits(tokenRate, "ether")}</Text>

            <Text fontSize="14" color="green.300">Address to send wei: {myTokenSaleContract && myTokenSaleContract.address}</Text>

            <Button colorScheme="orange" onClick={() => handleAddTokenMetamask() }>Add {tokenSymbol} to Metamask</Button>

        </VStack>
    )
}