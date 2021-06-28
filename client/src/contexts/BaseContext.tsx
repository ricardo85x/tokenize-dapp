import { useCallback, useEffect, createContext, ReactNode, useContext, useState } from "react"
import { useRouter } from 'next/router';

import { Web3Provider, ethers } from "../lib/getWeb3"

import MyToken from "../hardhat-deploy/ganache/MyToken.json";
import MyTokenSale from "../hardhat-deploy/ganache/MyTokenSale.json";
import Kyc from "../hardhat-deploy/ganache/KycContract.json";
import UserToken from "../hardhat-deploy/ganache/UserTokens.json";

import { MyToken as MyTokenProps } from "../../../src/types/MyToken"
import { MyTokenSale as MyTokenSaleProps } from "../../../src/types/MyTokenSale"
import { KycContract as KycProps } from "../../../src/types/KycContract"
import { UserTokens as UserTokensProps } from "../../../src/types/UserTokens"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface BaseContextDataProps {

    provider: Web3Provider | undefined
    setProvider: (_provider: Web3Provider) => void;

    accounts: string[] | undefined
    setAccounts: (_accounts: string[]) => void;

    owner: string;
    setOwner: (_owner: string) => void;

    userTokenAddress:string;
    setUserTokenAddress: (_userTokenAddress: string) => void;

    isOwner: boolean;
    setIsOwner: (_isOwner: boolean) => void;

    currentSupply: number;
    setCurrentSupply: (_currentSupply: number) => void;

    myTokenContract: MyTokenProps | undefined;
    setMyTokenContract: (_myTokenContract: MyTokenProps) => void;

    myTokenSaleContract: MyTokenSaleProps | undefined;
    setMyTokenSaleContract: (_myTokenSaleContract: MyTokenSaleProps) => void;

    kycContract: KycProps | undefined;
    setKycContract: (_kycContract: KycProps) => void;

    userTokenContract: UserTokensProps | undefined;
    setUserTokenContract: (_userTokenContract: UserTokensProps) => void;

    tokenSymbol: string;
    setTokenSymbol: (_tokenSymbol: string) => void;

    loaded: boolean;
    setLoaded: (_loaded: boolean) => void;

    loadedOk: boolean;
    setLoadedOk: (_loadedOk: boolean) => void;

    firstLoad: boolean;
    setFirstLoad: (_firstLoad: boolean) => void;

    inList: boolean;
    setInList: (_inList: boolean) => void;

    tokenRate: string;
    setTokenRate: (_tokenRate: string) => void;

    clubRate: string;
    setClubRate: (_clubRate: string) => void;

    myTokenBalance: number;
    setMyTokenBalance: (_myTokenBalance: number) => void;

    listenJoinClub: (_contract: KycProps, _account: string, fromBlock: number) => void;
    listenToTokenTransfer: (_contract: MyTokenProps, _account: string, fromBlock: number) => void;
    listenToTokenSupply: (_myTokenContract: MyTokenProps, _myTokenSaleContract: MyTokenSaleProps, fromBlock: number) => void;
    listenCreateUserToken:  (_contract: UserTokensProps, _account: string, fromBlock: number) => void;
    updateCurrentSupply: (_myTokenContract: MyTokenProps) => void;
    updateUserTokens: (_contract: MyTokenProps, _account: string, qty: number) => void;
 
}

interface BaseProviderProps {
    children: ReactNode;
}

const BaseContext = createContext({} as BaseContextDataProps)

export function BaseContextProvider({ children }: BaseProviderProps) {

    const router = useRouter()


    const [provider, setProvider] = useState<Web3Provider>()
    const [accounts, setAccounts] = useState<string[]>()
    const [owner, setOwner] = useState<string>("_")
    const [userTokenAddress, setUserTokenAddress] = useState<string>()
    const [isOwner, setIsOwner] = useState<boolean>(false);
    const [currentSupply, setCurrentSupply] = useState<number>(0);

    const [myTokenContract, setMyTokenContract] = useState<MyTokenProps>()
    const [myTokenSaleContract, setMyTokenSaleContract] = useState<MyTokenSaleProps>()
    const [kycContract, setKycContract] = useState<KycProps>()
    const [userTokenContract, setUserTokenContract] = useState<UserTokensProps>()
    const [tokenSymbol, setTokenSymbol] = useState<string>("")

    const [loaded, setLoaded] = useState<boolean>(false)
    const [loadedOk, setLoadedOk] = useState<boolean>(false)
    const [firstLoad, setFirstLoad] = useState<boolean>(false)
    const [inList, setInList] = useState<boolean>(false)
    const [tokenRate, setTokenRate] = useState<string>("0")
    const [myTokenBalance, setMyTokenBalance] = useState<number>(0)
    const [clubRate, setClubRate] = useState<string>("0")

    const contextValue: BaseContextDataProps = {
        provider, setProvider,
        accounts, setAccounts,
        owner, setOwner,
        userTokenAddress, setUserTokenAddress,
        isOwner, setIsOwner,
        currentSupply, setCurrentSupply,
        myTokenContract, setMyTokenContract,
        myTokenSaleContract, setMyTokenSaleContract,
        kycContract, setKycContract,
        userTokenContract, setUserTokenContract,
        tokenSymbol, setTokenSymbol,
        loaded, setLoaded,
        firstLoad, setFirstLoad,
        loadedOk, setLoadedOk,
        inList, setInList,
        tokenRate, setTokenRate,
        clubRate, setClubRate,
        myTokenBalance, setMyTokenBalance,

        updateCurrentSupply: async function (_myTokenContract: MyTokenProps) {
            const value = await _myTokenContract.totalSupply()
            contextValue.setCurrentSupply(value.toNumber())
        },

        updateUserTokens: async function (_contract: MyTokenProps, _account: string, qty: number = 0) {

            const _balance = await _contract.balanceOf(_account)
            contextValue.setMyTokenBalance(_balance.toNumber())
            contextValue.myTokenContract && contextValue.updateCurrentSupply(contextValue.myTokenContract)

            if (qty !== 0) {
                toast.info(`${qty} tokens was addeded to your account`)
            }
        },

        listenJoinClub: async function (_contract: KycProps, _account: string, fromBlock: number) {


            _contract.on('KycPurchased', (...args: any[]) => {
                const currentBlock = args[args.length - 1].blockNumber as number;
                if (currentBlock > fromBlock && _account.toLowerCase() === args[0].toLowerCase()) {

                    toast.info('You just entered the Club!');
                    contextValue.setInList(true)
                }
            })


        },

        listenToTokenTransfer: async function (_contract: MyTokenProps, _account: string, fromBlock: number) {

            const eventFromUser = _contract.filters.Transfer(null, _account)

            _contract.on(eventFromUser, (...args: any[]) => {
                const currentBlock = args[args.length - 1].blockNumber as number;
                if (currentBlock > fromBlock) {
                    contextValue.updateUserTokens(_contract, _account, args[2])
                }
            })


        },

        listenCreateUserToken: async function (_contract: UserTokensProps, _account: string, fromBlock: number) {


            _contract.on('createTokenEvent', (...args: any[]) => {
                const currentBlock = args[args.length - 1].blockNumber as number;
                if (currentBlock > fromBlock) {
                    console.log("Token criado!", args)
                    if((args[0] as string).toLowerCase() == _account.toLowerCase() ){

                        toast.info("Token criado!")
                        router.push(`/${args[1]}`)
                        console.log("redirecionando para ", args[1])
                        
                    } else {
                        console.log("Alguem criou um token",  _account)
                    }
                }
            })


        },

        listenToTokenSupply: async function (_myTokenContract: MyTokenProps, _myTokenSaleContract: MyTokenSaleProps, fromBlock: number) {

            _myTokenSaleContract.on("TokensPurchased", (...args: any[]) => {

                const currentBlock = args[args.length - 1].blockNumber as number;
                if (currentBlock > fromBlock) {
                    contextValue.updateCurrentSupply(_myTokenContract)
                }
            })

            _myTokenContract.on("tokenMinted", (...args: any[]) => {
                const currentBlock = args[args.length - 1].blockNumber as number;
                if (currentBlock > fromBlock) {
                    contextValue.updateCurrentSupply(_myTokenContract)
                }
            })
        }

    }


    const listenAccountChange = () => {
        try {
            if (window.ethereum) {
                (window.ethereum as any).on('accountsChanged', (_currentAccounts: string[]) => {
                    resetConnection()
                })
            }
        } catch (error) {
            console.log("Error, not metamask?", error)
        }
    }

    const listenChainChange = () => {
 
        try {
            if (window.ethereum) {
                (window.ethereum as any).on('chainChanged', (_chainID) => {
                    resetConnection()
                })
            }
        } catch (error) {
            console.log("Error, not metamask?", error)
        }

    }

    const resetConnection = () => {

        contextValue.setLoaded(false)
        contextValue.setLoadedOk(false)
        contextValue.setAccounts(undefined)
        contextValue.setMyTokenBalance(0)

    }

    const connectWeb3 = useCallback(async (_previousAccount: string[]) => {


        if (!contextValue.loaded && !!contextValue.owner && !!window.ethereum && !accounts) {

            contextValue.setLoaded(true)

            const accounts = await window.ethereum.request!({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum)

            // should run only once
            if (!contextValue.firstLoad) {
                listenAccountChange()
                listenChainChange()
                contextValue.setFirstLoad(true)
            }

            const valid_network = process.env.NEXT_PUBLIC_VALID_NETWORK ?
                process.env.NEXT_PUBLIC_VALID_NETWORK :
                "3"

            const network = await provider.getNetwork()

            if (network.chainId.toString() !== valid_network) {

                const network_name = valid_network === "3" ? "ropsten" :
                    valid_network === "1" ? "mainnet" :
                    valid_network === "1337" ? "ganache" : "unknown"

                toast.error(`🪲 Invalid Network!, Change to ${network_name.toUpperCase()}`, {
                    position: "top-right",
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                return;
            }

            setLoadedOk(true)



            if (provider && accounts) {

                contextValue.setProvider(provider)
                contextValue.setAccounts(accounts)

                let kyc_address = Kyc.address;
                let myTokenSale_address = MyTokenSale.address;
                let myToken_address = MyToken.address;

                const signer = provider.getSigner();

                const _userTokenContract = new ethers.Contract(UserToken.address, UserToken.abi, signer) as any as UserTokensProps

                if(contextValue.userTokenAddress){

                    myToken_address = contextValue.userTokenAddress;
                    kyc_address = await _userTokenContract.kycContractAddress(myToken_address);
                    myTokenSale_address = await _userTokenContract.myTokenSaleAddress(myToken_address);
                }

                const _myTokenContract = new ethers.Contract(myToken_address, MyToken.abi, signer) as any as MyTokenProps
                const _kycContract = new ethers.Contract(kyc_address, Kyc.abi, signer) as any as KycProps
                const _myTokenSaleContract = new ethers.Contract(myTokenSale_address, MyTokenSale.abi, signer) as any as MyTokenSaleProps

                contextValue.setMyTokenContract(_myTokenContract);
                contextValue.setMyTokenSaleContract(_myTokenSaleContract);
                contextValue.setKycContract(_kycContract);
                contextValue.setUserTokenContract(_userTokenContract);

                // event listeners

                // remove previous events
                _myTokenContract.removeAllListeners()
                _myTokenSaleContract.removeAllListeners()
                _userTokenContract.removeAllListeners()

                contextValue.listenJoinClub(_kycContract, accounts[0], await provider.getBlockNumber())
                contextValue.listenToTokenTransfer(_myTokenContract, accounts[0], await provider.getBlockNumber())
                contextValue.listenToTokenSupply(_myTokenContract, _myTokenSaleContract, await provider.getBlockNumber())
                contextValue.listenCreateUserToken(_userTokenContract, accounts[0], await provider.getBlockNumber())

                //
                contextValue.setTokenSymbol(await _myTokenContract.symbol())

                const allowed = await _kycContract.kycCompleted(accounts[0]);
                contextValue.setInList(allowed)

                const ownerAddress = await _myTokenContract.owner()

            
                contextValue.setOwner(ownerAddress)

                console.log("kyc owner", ownerAddress)
                console.log("conta 0", accounts[0])

                contextValue.setIsOwner(ownerAddress.toLowerCase() === accounts[0].toLowerCase())
                contextValue.updateCurrentSupply(_myTokenContract);

                const _rate = await _myTokenSaleContract.rate()
                contextValue.setTokenRate(_rate.toString())

                contextValue.updateUserTokens(_myTokenContract, accounts[0], 0)

                const _clubRate = await _kycContract.kycPrice()
                contextValue.setClubRate(_clubRate.toString())

            }
        }
    }, [contextValue.accounts, contextValue.provider, contextValue.loaded])

    useEffect(() => {
        connectWeb3(contextValue.accounts);
    }, [connectWeb3])

    useEffect(() => {
        resetConnection()
    }, [contextValue.userTokenAddress])


    return (
        <BaseContext.Provider value={contextValue}>
            {children}
        </BaseContext.Provider>
    )
}

export const useBaseContext = () => useContext(BaseContext)


