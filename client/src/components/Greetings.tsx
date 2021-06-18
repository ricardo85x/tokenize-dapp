import { Text, Box } from "@chakra-ui/react"
import { useBaseContext } from "../contexts/BaseContext";

export function Greetings( ) {

    const {  isOwner, inList } = useBaseContext()

    let message = "Hello Traveler"

    if(isOwner) {
        message = "Hellow Owner \\o/";
    } else if (inList) {
        message = "Hello Traveler your are in the club!"
    }
    
    return ( 
       <Text fontWeight="bold" color="blue.500">{message}</Text> 
    )
}