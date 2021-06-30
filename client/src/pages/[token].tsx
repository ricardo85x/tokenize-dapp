import { Flex, Text, VStack, Box } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../components/Header";
import { Greetings } from "../components/Greetings";
import { ClubComponent } from "../components/ClubComponent";
import { useBaseContext } from "../contexts/BaseContext";
import { BuyTokenComponent } from "../components/BuyTokenComponent";
import { MineTokenComponent } from "../components/MineTokenComponent";
import { ErrorWeb3 } from "../components/ErrorWeb3"
import { useRouter } from 'next/router'
import { useEffect } from 'react';


function HomeToken() {


    const router = useRouter()


    const { accounts, isOwner, loaded, loadedOk, inList, myTokenContract, setUserTokenAddress } = useBaseContext()


    console.log("TOKEN", router.query.token)

    useEffect(() => {
        if(router.query?.token){
            setUserTokenAddress(router.query.token as string)
        }
    })
    
    if (!loaded) return <ErrorWeb3 message="Loading web3..." />

    if (!loadedOk) return <ErrorWeb3 message="Error loading dApp" error />

   


    return (
        <Flex
          w="100%"
          h="100vh"
          mh="auto"
          direction="column"
          align="center"
    
        >
          <Header back />
    
         
    
          <Box maxW={1100} w="100%" fontSize="34" m="5"  align="flex-start">
            <Greetings />
          </Box>
    
          <Flex  pb="100" wrap="wrap" gridGap="12" maxW={1100} w="100%" fontSize="34" m="5" spacing="10" justify="space-between" align="flex-start">
        
            {inList && <BuyTokenComponent />}
    
            <ClubComponent />
    
            {isOwner && inList && <MineTokenComponent />}
    
    
          </Flex>
    
          <ToastContainer />
    
        </Flex>
      );

}

export default HomeToken;


