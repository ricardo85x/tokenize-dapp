import { VStack, Text, Input, Button, Box } from "@chakra-ui/react"
import { useBaseContext } from "../contexts/BaseContext"
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from "react-toastify"


export function MineTokenComponent() {

  const { tokenSymbol, accounts, myTokenContract, myTokenSaleContract } = useBaseContext()
  const { register, handleSubmit } = useForm()


  const handleMineTokens: SubmitHandler<{ tokens: number }> = async (data) => {

    if (data.tokens > 0 && accounts && myTokenContract && myTokenSaleContract) {

      try {
        await myTokenContract.mint(accounts[0], data.tokens)

        toast.info("Transaction sent, token will be minted once confirmed")

      } catch (err) {
        toast.error(`Error on token mint`);
        console.error("Error on token mint", err)

      }


    }
  }

  return (
    <Box mx="5"  maxW="500px" backgroundColor="gray.800" borderRadius="10" p="5">
      <VStack mx="5" fontWeight="bold" spacing="5" align="flex-start">

        <Text>Mint {tokenSymbol} Token!</Text>

        <VStack as="form" onSubmit={handleSubmit(handleMineTokens)} spacing="2" align="flex-start">
          <Input   {...register("tokens")} defaultValue="5" label="amount" type="number" />
          <Button size="lg" colorScheme="blackAlpha" type="submit">Mint Tokens</Button>
        </VStack>

      </VStack>
    </Box>

  )
}