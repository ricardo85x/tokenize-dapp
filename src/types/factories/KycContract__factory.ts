/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KycContract, KycContractInterface } from "../KycContract";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "kycCompleted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setKycCompleted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setKycRevoked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060006100216100c460201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506100cc565b600033905090565b61083e806100db6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806370c9aedd14610067578063715018a6146100835780638da5cb5b1461008d578063dc3958cc146100ab578063df235fe4146100c7578063f2fde38b146100f7575b600080fd5b610081600480360381019061007c919061063f565b610113565b005b61008b6101e9565b005b610095610323565b6040516100a2919061072c565b60405180910390f35b6100c560048036038101906100c0919061063f565b61034c565b005b6100e160048036038101906100dc919061063f565b610423565b6040516100ee9190610747565b60405180910390f35b610111600480360381019061010c919061063f565b610479565b005b61011b610622565b73ffffffffffffffffffffffffffffffffffffffff16610139610323565b73ffffffffffffffffffffffffffffffffffffffff161461018f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018690610782565b60405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6101f1610622565b73ffffffffffffffffffffffffffffffffffffffff1661020f610323565b73ffffffffffffffffffffffffffffffffffffffff1614610265576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025c90610782565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610354610622565b73ffffffffffffffffffffffffffffffffffffffff16610372610323565b73ffffffffffffffffffffffffffffffffffffffff16146103c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103bf90610782565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b610481610622565b73ffffffffffffffffffffffffffffffffffffffff1661049f610323565b73ffffffffffffffffffffffffffffffffffffffff16146104f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90610782565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610565576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055c90610762565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b600081359050610639816107f1565b92915050565b60006020828403121561065157600080fd5b600061065f8482850161062a565b91505092915050565b610671816107b3565b82525050565b610680816107c5565b82525050565b60006106936026836107a2565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006106f96020836107a2565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006020820190506107416000830184610668565b92915050565b600060208201905061075c6000830184610677565b92915050565b6000602082019050818103600083015261077b81610686565b9050919050565b6000602082019050818103600083015261079b816106ec565b9050919050565b600082825260208201905092915050565b60006107be826107d1565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6107fa816107b3565b811461080557600080fd5b5056fea2646970667358221220cb03c730c0c2ecc13224bbd98868bf4edd3a8ca0e98ad253e865385cd108ff2864736f6c63430008000033";

export class KycContract__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KycContract> {
    return super.deploy(overrides || {}) as Promise<KycContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KycContract {
    return super.attach(address) as KycContract;
  }
  connect(signer: Signer): KycContract__factory {
    return super.connect(signer) as KycContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KycContractInterface {
    return new utils.Interface(_abi) as KycContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KycContract {
    return new Contract(address, _abi, signerOrProvider) as KycContract;
  }
}
