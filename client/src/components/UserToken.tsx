import { VStack, Text, Input, Button, Divider } from "@chakra-ui/react"
import { useBaseContext } from "../contexts/BaseContext"
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from "react-toastify"
import {ethers} from "ethers"
import { useRouter } from 'next/router'



type CreateTokenProps = {
    name: string;
    symbol: string;
    decimals: number;
    value: string;
}

export function UserToken() {

    const router = useRouter()


    const { accounts, userTokenContract } = useBaseContext()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleCreateToken: SubmitHandler<CreateTokenProps> = async (data) => {

        console.log(data)

        console.log(ethers.utils.parseEther(data.value).toNumber())

        if (accounts && userTokenContract) {

            const tokenRate = ethers.utils.parseEther(String(data.value))

            if (tokenRate.toNumber() <= 0) {
                toast.error("Initial token price cannot less or equal to zero")
                return
            }

            try {
                await userTokenContract.createToken(data.name, data.symbol, data.decimals, tokenRate.toNumber())
                toast.info("Transaction sent, token will be created once confirmed")

            } catch (err) {
                toast.error(`Error on token creation`);
                console.error("Error on token creation", err)
            }

        }
    }


    return (
        <VStack fontWeight="bold" spacing="5" align="flex-start" >

            <Divider />


            <Text color="cyan.400">Create your own Token!</Text>

            <VStack as="form" onSubmit={handleSubmit(handleCreateToken)} spacing="2" align="flex-start">
                <Text>Name (Up to 15 characters)</Text>
                <Input   {...register("name", { pattern: /^[a-z][a-z0-9_ ]{3,17}$/i })} label="Name" type="text" />
                {errors.name && <Text color="red.300" fontSize="15">Require a name with 3 to 15 characters</Text>}

                <Text>Symbol(Up to 6 characters)</Text>
                <Input   {...register("symbol", { pattern: /^[a-z][a-z0-9_]{3,5}$/i })} label="symbol" type="text" />
                {errors.symbol && <Text color="red.300" fontSize="15">Require a symbol with 3 to 6 characters</Text>}

                <Text>Decimals (divisible)</Text>
                <Input   {...register("decimals", { min: 0, max: 18 })} defaultValue="0" label="decimals" type="number" />
                {errors.decimals && <Text color="red.300" fontSize="15">Select a value between 0 and 18</Text>}

                <Text>Token sale value in ETH</Text>
                <Input   {...register("value", { pattern: /^\d([.]\d{1,18})?$/ })} defaultValue="0.000000000000000001" placeholder="0.000000000000000001" label="Sale value in ETH" type="text" />
                {errors.value && <Text color="red.300" fontSize="15">Select a value between 0.000000000000000001 and 1 for token price</Text>}

                <Button size="lg" colorScheme="cyan" type="submit">Create my Token</Button>

            </VStack>

        </VStack>
    )
}