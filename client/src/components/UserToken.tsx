import { VStack, Text, Input, Button, Divider, Grid, Box } from "@chakra-ui/react"
import { useBaseContext } from "../contexts/BaseContext"
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from "react-toastify"
import { ethers } from "ethers"
import { useRouter } from 'next/router'



type CreateTokenProps = {
    name: string;
    symbol: string;
    decimals: number;
    value: string;
    club_price: string;
}

export function UserToken() {

    const router = useRouter()


    const { accounts, userTokenContract } = useBaseContext()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleCreateToken: SubmitHandler<CreateTokenProps> = async (data) => {

        console.log(data)

        console.log(ethers.utils.parseEther(data.value).toNumber())
        console.log("ERROS", errors)

        if (accounts && userTokenContract) {

            const tokenRate = ethers.utils.parseEther(String(data.value))
            const club_price = ethers.utils.parseEther(String(data.club_price))

            

            if (tokenRate.toNumber() <= 0) {
                toast.error("Initial token price cannot less or equal to zero")
                return
            }

            if (club_price.toNumber() < 0) {
                toast.error("Club price cannot be negative")
                return
            }

            try {
                await userTokenContract.createToken(data.name, data.symbol, data.decimals, tokenRate.toNumber(), club_price.toNumber())
                toast.info("Transaction sent, token will be created once confirmed")

            } catch (err) {
                toast.error(`Error on token creation`);
                console.error("Error on token creation", err)
            }

        }
    }


    


    return (
        <Box  mx="5"  w="100%"  backgroundColor="gray.800" borderRadius="10" p="5">
            <VStack mx="5" spacing="5" align="flex-start" >

                <Text fontWeight="bold"  color="cyan.400">Create your own Token!</Text>
                
                <Box fontSize="25"  mx="10" as="form" onSubmit={handleSubmit(handleCreateToken)} >
                <Grid  templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gridGap="5" align="flex-start">
                    

                    <Box>
                    <Text>Name (Up to 15 characters)</Text>
                    <Input   {...register("name", { pattern: /^[a-z][a-z0-9_ ]{2,17}$/i, required: true })  } label="Name" type="text" />
                    {errors.name && <Text color="red.300" fontSize="15">Require a name with 3 to 15 characters</Text>}

                    </Box> 
                    
                    <Box>
                    <Text>Symbol(Up to 6 characters)</Text>
                    <Input   {...register("symbol", { pattern: /^[a-z][a-z0-9_]{2,5}$/i, required: true })} label="symbol" type="text" />
                    {errors.symbol && <Text color="red.300" fontSize="15">Require a symbol with 3 to 6 characters</Text>}

                    </Box>
                    
                    <Box>
                    <Text>Decimals (divisible)</Text>
                    <Input   {...register("decimals", { min: 0, max: 18, required: true })} defaultValue="18" label="decimals" type="number" />
                    {errors.decimals && <Text color="red.300" fontSize="15">Select a value between 0 and 18</Text>}

                    </Box>
                    
                    <Box>
                    <Text>Token sale value in ETH</Text>
                    <Input   {...register("value", { pattern: /^\d+([.]\d{1,18})?$/, required: true })} defaultValue="0.000000000000000001" placeholder="0.000000000000000001" label="Sale value in ETH" type="text" />
                    {errors.value && <Text color="red.300" fontSize="15">Select a value bigger than 0.000000000000000001  for token price</Text>}

                    </Box>
                   
                   <Box>
                   <Text>Club Price in ETH</Text>
                    <Input   {...register("club_price", { pattern: /^\d+([.]\d{1,18})?$/, required: true })} defaultValue="0.000000000000000001" placeholder="0.000000000000000001" label="Sale value in ETH" type="text" />
                    {errors.value && <Text color="red.300" fontSize="15">Select a value bigger than 0.000000000000000001 for club price</Text>}

                   </Box>
                   


                </Grid>
                <Button  mt="5" size="lg" colorScheme="cyan" type="submit">Create my Token</Button>

                </Box>
                

            </VStack>
        </Box>

    )
}