import { VStack, Text, Button, Input } from "@chakra-ui/react"
import { useBaseContext } from "../contexts/BaseContext"
import { toast } from 'react-toastify';

import { SubmitHandler, useForm } from 'react-hook-form'

type AddInListDataType = {
  kycAddress: string;
}

export function ClubComponent() {

  const { kycContract, isOwner, accounts, inList, setInList, clubRate } = useBaseContext()

  const { register, handleSubmit } = useForm()

  const joinClub = async (_address?: string) => {

    if (kycContract && accounts) {

      const address = _address ? _address : accounts[0]

      console.log("adddd", address)

      try {
        const allowed = await kycContract.kycCompleted(address);

        const littleAddress = `${address.substr(1, 4)}...${address.substr(-4)}`

        if (allowed) {
          toast.warning(`${littleAddress} is already in the list`,);
        } else {

          if (isOwner) {
            await kycContract.setKycCompleted(address)
          } else {
            await kycContract.buyKyc({ value: clubRate })
          }


          toast.info(`${littleAddress} addeded in the list`);

          if (accounts && address === accounts[0]) {
            setInList(true)
          }

        }

      } catch (err) {
        toast.error(`Error to process this address or you are not allowed`);
      }

    }
  }

  const handleAddInList: SubmitHandler<AddInListDataType> = async (data) => {
    joinClub(data.kycAddress)
  }

  const handleAddMySelf: SubmitHandler<{}> = async () => {
    accounts && joinClub(accounts[0])
  }

  let message = "Join the club to be able to buy tokens!"

  if (isOwner) {
    message = "You are not in the club!"
  }

  return (
    <VStack spacing="5" align="flex-start" fontWeight="bold">


      {!inList && (
        <VStack as="form" onSubmit={handleSubmit(handleAddMySelf)} spacing="2" >
          <Text >{message}</Text>
          <Button size="lg" colorScheme="blackAlpha" type="submit">Join Club</Button>
          {!isOwner && <Text fontSize="12" color="red.300"> * Only {clubRate} wei </Text>}

        </VStack>

      )}



      {!isOwner && !inList && (
        <Text >You can also contact the owner to try to get in for free</Text>
      )}

      {isOwner && (

        <VStack align="flex-start" spacing="3" as="form" onSubmit={handleSubmit(handleAddInList)}>
          <Text >Add your friends to the club</Text>
          <Input   {...register("kycAddress")} label="KYC Address" type="text" />
          <Button mt="3" size="lg" colorScheme="blackAlpha" type="submit">Add address</Button>
        </VStack>


      )}
    </VStack>
  )
}