import { Box, Text, Spinner, HStack } from "@chakra-ui/react"
import React from "react";
import { ToastContainer } from 'react-toastify';

type ErrorWeb3Props = {
    message: string;
    error?: boolean;
}

export function ErrorWeb3({ message, error = false }: ErrorWeb3Props) {

    const color = error && error === true ? "red.400" : "blue.400";

    return (
        <Box mx="5"  maxW="500px" backgroundColor="gray.800" borderRadius="10" p="5">
            <HStack spacing="2" align="center" justify="center" m="10" p="10">
                <Text fontSize="42" color={color}>{message}</Text>

                {!error && <Spinner size="lg" />}


                <ToastContainer />

            </HStack>
        </Box>
    )
}