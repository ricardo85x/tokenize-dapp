// import Web3 from "web3";
import { ethers } from 'ethers'

import { ExternalProvider, Web3Provider } from "@ethersproject/providers/lib"

declare global {
  interface Window {
    ethereum?: ExternalProvider
  }
}

export { Web3Provider, ethers }

export interface web3Props {
  accounts: string[];
  provider: Web3Provider
}

export const getWeb3 = () =>
  new Promise<web3Props>((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.ethereum) {

        const provider = new ethers.providers.Web3Provider(window.ethereum)

        try {
          // Request account access if needed
          const accounts = await window.ethereum.request!({ method: 'eth_requestAccounts' });
          // Acccounts now exposed

          resolve({
            accounts,
            provider
          });

        } catch (error) {
          reject(error);
        }
      }
      else {
        reject("Error on connect to web3 provider")
      }
    });
  });
