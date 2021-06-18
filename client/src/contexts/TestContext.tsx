import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type TestContextProviderProps = { children: ReactNode }

interface TestStateDataProps {
    nome:string;
    setNome: ( _nome:string ) => void;
    email:string;
    setEmail: ( _email:string ) => void;
}

const TestStateContext = createContext<TestStateDataProps| undefined>(undefined)

function TestContextProvider({children}: TestContextProviderProps) {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")


    useEffect(() => {
        setNome("Nome")
        setEmail("Email")
    }, [])

    const value = { nome, setNome, email, setEmail }

    return (
        <TestStateContext.Provider value={value}>
            {children}
        </TestStateContext.Provider>
    )
}

function useTest() {
    const context = useContext(TestStateContext)
    if(context === undefined) {
        throw new Error(`useTest must be used within a TestContextProvider`)
    }
    return context
}

export { TestContextProvider, useTest }