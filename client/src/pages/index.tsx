import { Flex, Text, VStack } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../components/Header";
import { Greetings } from "../components/Greetings";
import { ClubComponent } from "../components/ClubComponent";
import { useBaseContext } from "../contexts/BaseContext";
import { BuyTokenComponent } from "../components/BuyTokenComponent";
import { MineTokenComponent } from "../components/MineTokenComponent";

function Home() {

  const { accounts, isOwner, loaded, inList } = useBaseContext()

  if (!loaded) return (<>
    <Text>Loading web3...</Text>
    <ToastContainer />
  </>)

  return (
    <Flex
      maxW={1400}
      w="100%"
      h="100vh"
      mh="auto"
      direction="column"
      align="center"

    >
      <Header />

      <VStack pb="100" maxW={1100} w="100%" fontSize="34" m="5" spacing="10" align="flex-start">

        <Greetings />

        {inList && <BuyTokenComponent />}

        <ClubComponent />

        {isOwner && inList && <MineTokenComponent />}

      </VStack>

      <ToastContainer />

    </Flex>
  );

}

export default Home;
