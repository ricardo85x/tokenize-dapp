import { Flex, Box, VStack } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "./Header";
import { Greetings } from "./Greetings";
import { ClubComponent } from "./ClubComponent";
import { useBaseContext } from "../contexts/BaseContext";
import { BuyTokenComponent } from "./BuyTokenComponent";
import { MineTokenComponent } from "./MineTokenComponent";
import { ErrorWeb3 } from "./ErrorWeb3"
import { UserToken } from './UserToken';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

interface HomeComponentProps {
    isUserToken?: boolean;
}

export function HomeComponent({ isUserToken = false }: HomeComponentProps) {

    const router = useRouter()

    const { isOwner, loaded, loadedOk, inList, setUserTokenAddress } = useBaseContext()

    useEffect(() => {
        
        if(isUserToken) {
            if (router.query?.token) {
                setUserTokenAddress(router.query.token as string)
            }

        } else {
            setUserTokenAddress(undefined)
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
            <Header back={isUserToken} />

            <Box maxW={1100} w="100%" fontSize="34" m="5" align="flex-start">
                <Greetings />
            </Box>

            <VStack maxW={1050} w="100%" fontSize="34" m="5" spacing="10"  align="center">

                {!isUserToken && <UserToken />}

                {inList && <BuyTokenComponent />}

                {(!inList || isOwner) && <ClubComponent />}

                {isOwner && inList && <MineTokenComponent />}

            </VStack>

            <ToastContainer />

        </Flex>
    );

}