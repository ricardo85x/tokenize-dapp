/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Crowdsale, CrowdsaleInterface } from "../Crowdsale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ratex",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "walletx",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "tokenx",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "purchaser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensPurchased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weiRaised",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200135b3803806200135b833981810160405281019062000037919062000242565b60016000819055506000831162000085576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200007c90620003cc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000f8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000ef90620003ee565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200016b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200016290620003aa565b60405180910390fd5b8260038190555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620004d5565b6000815190506200020e8162000487565b92915050565b6000815190506200022581620004a1565b92915050565b6000815190506200023c81620004bb565b92915050565b6000806000606084860312156200025857600080fd5b600062000268868287016200022b565b93505060206200027b86828701620001fd565b92505060406200028e8682870162000214565b9150509250925092565b6000620002a760248362000410565b91507f43726f776473616c653a20746f6b656e20697320746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006200030f60148362000410565b91507f43726f776473616c653a207261746520697320300000000000000000000000006000830152602082019050919050565b60006200035160258362000410565b91507f43726f776473616c653a2077616c6c657420697320746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006020820190508181036000830152620003c58162000298565b9050919050565b60006020820190508181036000830152620003e78162000300565b9050919050565b60006020820190508181036000830152620004098162000342565b9050919050565b600082825260208201905092915050565b60006200042e826200045d565b9050919050565b600062000442826200045d565b9050919050565b6000620004568262000421565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b620004928162000435565b81146200049e57600080fd5b50565b620004ac8162000449565b8114620004b857600080fd5b50565b620004c6816200047d565b8114620004d257600080fd5b50565b610e7680620004e56000396000f3fe60806040526004361061004e5760003560e01c80632c4e722e1461006a5780634042b66f14610095578063521eb273146100c0578063ec8ac4d8146100eb578063fc0c546a1461010757610065565b366100655761006361005e610132565b61013a565b005b600080fd5b34801561007657600080fd5b5061007f610260565b60405161008c9190610bfb565b60405180910390f35b3480156100a157600080fd5b506100aa61026a565b6040516100b79190610bfb565b60405180910390f35b3480156100cc57600080fd5b506100d5610274565b6040516100e29190610aba565b60405180910390f35b610105600480360381019061010091906107b9565b61013a565b005b34801561011357600080fd5b5061011c61029e565b6040516101299190610afe565b60405180910390f35b600033905090565b60026000541415610180576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017790610bbb565b60405180910390fd5b6002600081905550600034905061019782826102c8565b60006101a282610380565b90506101b98260045461039e90919063ffffffff16565b6004819055506101c983826103b4565b8273ffffffffffffffffffffffffffffffffffffffff166101e8610132565b73ffffffffffffffffffffffffffffffffffffffff167f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b848460405161022f929190610c16565b60405180910390a361024183836103c2565b6102496103c6565b6102538383610431565b5050600160008190555050565b6000600354905090565b6000600454905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610338576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032f90610b5b565b60405180910390fd5b600081141561037c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037390610bdb565b60405180910390fd5b5050565b60006103976003548361043590919063ffffffff16565b9050919050565b600081836103ac9190610c71565b905092915050565b6103be828261044b565b5050565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561042e573d6000803e3d6000fd5b50565b5050565b600081836104439190610cc7565b905092915050565b6104988282600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661049c9092919063ffffffff16565b5050565b61051d8363a9059cbb60e01b84846040516024016104bb929190610ad5565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610522565b505050565b6000610584826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166105e99092919063ffffffff16565b90506000815111156105e457808060200190518101906105a491906107e2565b6105e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105da90610b9b565b60405180910390fd5b5b505050565b60606105f88484600085610601565b90509392505050565b606082471015610646576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063d90610b3b565b60405180910390fd5b61064f85610715565b61068e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068590610b7b565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516106b79190610aa3565b60006040518083038185875af1925050503d80600081146106f4576040519150601f19603f3d011682016040523d82523d6000602084013e6106f9565b606091505b5091509150610709828286610728565b92505050949350505050565b600080823b905060008111915050919050565b6060831561073857829050610788565b60008351111561074b5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077f9190610b19565b60405180910390fd5b9392505050565b60008135905061079e81610e12565b92915050565b6000815190506107b381610e29565b92915050565b6000602082840312156107cb57600080fd5b60006107d98482850161078f565b91505092915050565b6000602082840312156107f457600080fd5b6000610802848285016107a4565b91505092915050565b61081481610d33565b82525050565b61082381610d21565b82525050565b600061083482610c3f565b61083e8185610c55565b935061084e818560208601610d9f565b80840191505092915050565b61086381610d7b565b82525050565b600061087482610c4a565b61087e8185610c60565b935061088e818560208601610d9f565b61089781610e01565b840191505092915050565b60006108af602683610c60565b91507f416464726573733a20696e73756666696369656e742062616c616e636520666f60008301527f722063616c6c00000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610915602a83610c60565b91507f43726f776473616c653a2062656e656669636961727920697320746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b600061097b601d83610c60565b91507f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006000830152602082019050919050565b60006109bb602a83610c60565b91507f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008301527f6f742073756363656564000000000000000000000000000000000000000000006020830152604082019050919050565b6000610a21601f83610c60565b91507f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006000830152602082019050919050565b6000610a61601983610c60565b91507f43726f776473616c653a20776569416d6f756e742069732030000000000000006000830152602082019050919050565b610a9d81610d71565b82525050565b6000610aaf8284610829565b915081905092915050565b6000602082019050610acf600083018461080b565b92915050565b6000604082019050610aea600083018561081a565b610af76020830184610a94565b9392505050565b6000602082019050610b13600083018461085a565b92915050565b60006020820190508181036000830152610b338184610869565b905092915050565b60006020820190508181036000830152610b54816108a2565b9050919050565b60006020820190508181036000830152610b7481610908565b9050919050565b60006020820190508181036000830152610b948161096e565b9050919050565b60006020820190508181036000830152610bb4816109ae565b9050919050565b60006020820190508181036000830152610bd481610a14565b9050919050565b60006020820190508181036000830152610bf481610a54565b9050919050565b6000602082019050610c106000830184610a94565b92915050565b6000604082019050610c2b6000830185610a94565b610c386020830184610a94565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610c7c82610d71565b9150610c8783610d71565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610cbc57610cbb610dd2565b5b828201905092915050565b6000610cd282610d71565b9150610cdd83610d71565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610d1657610d15610dd2565b5b828202905092915050565b6000610d2c82610d51565b9050919050565b6000610d3e82610d51565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610d8682610d8d565b9050919050565b6000610d9882610d51565b9050919050565b60005b83811015610dbd578082015181840152602081019050610da2565b83811115610dcc576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b610e1b81610d21565b8114610e2657600080fd5b50565b610e3281610d45565b8114610e3d57600080fd5b5056fea2646970667358221220cca8d53083b71f41ba92acd24c60eb8cd3e22e684e36c30383a92f154dbf9ca464736f6c63430008000033";

export class Crowdsale__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    ratex: BigNumberish,
    walletx: string,
    tokenx: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Crowdsale> {
    return super.deploy(
      ratex,
      walletx,
      tokenx,
      overrides || {}
    ) as Promise<Crowdsale>;
  }
  getDeployTransaction(
    ratex: BigNumberish,
    walletx: string,
    tokenx: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(ratex, walletx, tokenx, overrides || {});
  }
  attach(address: string): Crowdsale {
    return super.attach(address) as Crowdsale;
  }
  connect(signer: Signer): Crowdsale__factory {
    return super.connect(signer) as Crowdsale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdsaleInterface {
    return new utils.Interface(_abi) as CrowdsaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Crowdsale {
    return new Contract(address, _abi, signerOrProvider) as Crowdsale;
  }
}
