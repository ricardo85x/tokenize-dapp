import { Text, Box } from "@chakra-ui/react"
import { useBaseContext } from "../contexts/BaseContext";

export function Greetings() {

    const { isOwner, inList } = useBaseContext()

    let message = "Hello Traveler"

    if (isOwner) {
        message = "Hello Owner \\o/";
    } else if (inList) {
        message = "Hello Traveler your are in the club!"
    }

    return (
        <Text  mx="5"
        px="5" fontWeight="bold" color="yellowgreen">{message}</Text>
    )
}