import { VStack, Text, Input, Button } from "@chakra-ui/react"
import { useBaseContext } from "../contexts/BaseContext"
import { SubmitHandler, useForm } from 'react-hook-form'


export function MineTokenComponent() {

    const {  tokenSymbol, accounts, myTokenContract, myTokenSaleContract } = useBaseContext()
    const { register, handleSubmit } = useForm()


    const handleMineTokens: SubmitHandler<{tokens: number}> = async (data) => {

        if (data.tokens > 0 && accounts && myTokenContract && myTokenSaleContract) {
          myTokenContract.mint(myTokenSaleContract.address ,data.tokens)
        }
      }

    return (
        <VStack fontWeight="bold" spacing="5" align="flex-start">

            <Text>Mine {tokenSymbol} Token!</Text>

            <VStack as="form" onSubmit={handleSubmit(handleMineTokens)} spacing="2" align="flex-start">
                <Input   {...register("tokens")} defaultValue="5" label="amount" type="number" />
                <Button size="lg" colorScheme="blackAlpha" type="submit">Mine Tokens</Button>
            </VStack>

        </VStack>
    )
}