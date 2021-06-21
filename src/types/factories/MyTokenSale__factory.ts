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
import type { MyTokenSale, MyTokenSaleInterface } from "../MyTokenSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "contract KycContract",
        name: "_kyc",
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
  "0x60806040523480156200001157600080fd5b5060405162001116380380620011168339818101604052810190620000379190620002a1565b83838360016000819055506000831162000088576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200007f9062000441565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000fb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f29062000463565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200016e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000165906200041f565b60405180910390fd5b8260038190555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505062000578565b600081519050620002568162000510565b92915050565b6000815190506200026d816200052a565b92915050565b600081519050620002848162000544565b92915050565b6000815190506200029b816200055e565b92915050565b60008060008060808587031215620002b857600080fd5b6000620002c8878288016200028a565b9450506020620002db8782880162000245565b9350506040620002ee878288016200025c565b9250506060620003018782880162000273565b91505092959194509250565b60006200031c60248362000485565b91507f43726f776473616c653a20746f6b656e20697320746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006200038460148362000485565b91507f43726f776473616c653a207261746520697320300000000000000000000000006000830152602082019050919050565b6000620003c660258362000485565b91507f43726f776473616c653a2077616c6c657420697320746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600060208201905081810360008301526200043a816200030d565b9050919050565b600060208201905081810360008301526200045c8162000375565b9050919050565b600060208201905081810360008301526200047e81620003b7565b9050919050565b600082825260208201905092915050565b6000620004a382620004e6565b9050919050565b6000620004b782620004e6565b9050919050565b6000620004cb8262000496565b9050919050565b6000620004df8262000496565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6200051b81620004aa565b81146200052757600080fd5b50565b6200053581620004be565b81146200054157600080fd5b50565b6200054f81620004d2565b81146200055b57600080fd5b50565b620005698162000506565b81146200057557600080fd5b50565b610b8e80620005886000396000f3fe60806040526004361061004e5760003560e01c80632c4e722e1461006a5780634042b66f14610095578063521eb273146100c0578063ec8ac4d8146100eb578063fc0c546a1461010757610065565b366100655761006361005e610132565b61013a565b005b600080fd5b34801561007657600080fd5b5061007f610260565b60405161008c9190610978565b60405180910390f35b3480156100a157600080fd5b506100aa61026a565b6040516100b79190610978565b60405180910390f35b3480156100cc57600080fd5b506100d5610274565b6040516100e29190610879565b60405180910390f35b61010560048036038101906101009190610644565b61013a565b005b34801561011357600080fd5b5061011c61029e565b60405161012991906108bd565b60405180910390f35b600033905090565b60026000541415610180576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017790610938565b60405180910390fd5b6002600081905550600034905061019782826102c8565b60006101a2826103c0565b90506101b9826004546103de90919063ffffffff16565b6004819055506101c983826103f4565b8273ffffffffffffffffffffffffffffffffffffffff166101e8610132565b73ffffffffffffffffffffffffffffffffffffffff167f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b848460405161022f929190610993565b60405180910390a36102418383610402565b610249610406565b6102538383610471565b5050600160008190555050565b6000600354905090565b6000600454905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6102d28282610475565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663df235fe4336040518263ffffffff1660e01b815260040161032d919061085e565b60206040518083038186803b15801561034557600080fd5b505afa158015610359573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037d919061066d565b6103bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b3906108d8565b60405180910390fd5b5050565b60006103d76003548361052d90919063ffffffff16565b9050919050565b600081836103ec91906109cd565b905092915050565b6103fe8282610543565b5050565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561046e573d6000803e3d6000fd5b50565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156104e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104dc906108f8565b60405180910390fd5b6000811415610529576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090610958565b60405180910390fd5b5050565b6000818361053b9190610a23565b905092915050565b61054b61029e565b73ffffffffffffffffffffffffffffffffffffffff166340c10f1983836040518363ffffffff1660e01b8152600401610585929190610894565b602060405180830381600087803b15801561059f57600080fd5b505af11580156105b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d7919061066d565b610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060d90610918565b60405180910390fd5b5050565b60008135905061062981610b2a565b92915050565b60008151905061063e81610b41565b92915050565b60006020828403121561065657600080fd5b60006106648482850161061a565b91505092915050565b60006020828403121561067f57600080fd5b600061068d8482850161062f565b91505092915050565b61069f81610a8f565b82525050565b6106ae81610a7d565b82525050565b6106bd81610ad7565b82525050565b60006106d06027836109bc565b91507f4b5943206e6f7420636f6d706c657465642c207075726368617365206e6f742060008301527f616c6c6f776564000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610736602a836109bc565b91507f43726f776473616c653a2062656e656669636961727920697320746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b600061079c601f836109bc565b91507f4d696e74656443726f776473616c653a206d696e74696e67206661696c6564006000830152602082019050919050565b60006107dc601f836109bc565b91507f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006000830152602082019050919050565b600061081c6019836109bc565b91507f43726f776473616c653a20776569416d6f756e742069732030000000000000006000830152602082019050919050565b61085881610acd565b82525050565b600060208201905061087360008301846106a5565b92915050565b600060208201905061088e6000830184610696565b92915050565b60006040820190506108a960008301856106a5565b6108b6602083018461084f565b9392505050565b60006020820190506108d260008301846106b4565b92915050565b600060208201905081810360008301526108f1816106c3565b9050919050565b6000602082019050818103600083015261091181610729565b9050919050565b600060208201905081810360008301526109318161078f565b9050919050565b60006020820190508181036000830152610951816107cf565b9050919050565b600060208201905081810360008301526109718161080f565b9050919050565b600060208201905061098d600083018461084f565b92915050565b60006040820190506109a8600083018561084f565b6109b5602083018461084f565b9392505050565b600082825260208201905092915050565b60006109d882610acd565b91506109e383610acd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a1857610a17610afb565b5b828201905092915050565b6000610a2e82610acd565b9150610a3983610acd565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610a7257610a71610afb565b5b828202905092915050565b6000610a8882610aad565b9050919050565b6000610a9a82610aad565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610ae282610ae9565b9050919050565b6000610af482610aad565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610b3381610a7d565b8114610b3e57600080fd5b50565b610b4a81610aa1565b8114610b5557600080fd5b5056fea2646970667358221220635defa06396016c147cb4299b797c30a45f6f3e990b6131d269d33241e87ce764736f6c63430008000033";

export class MyTokenSale__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    rate: BigNumberish,
    wallet: string,
    token: string,
    _kyc: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MyTokenSale> {
    return super.deploy(
      rate,
      wallet,
      token,
      _kyc,
      overrides || {}
    ) as Promise<MyTokenSale>;
  }
  getDeployTransaction(
    rate: BigNumberish,
    wallet: string,
    token: string,
    _kyc: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      rate,
      wallet,
      token,
      _kyc,
      overrides || {}
    );
  }
  attach(address: string): MyTokenSale {
    return super.attach(address) as MyTokenSale;
  }
  connect(signer: Signer): MyTokenSale__factory {
    return super.connect(signer) as MyTokenSale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenSaleInterface {
    return new utils.Interface(_abi) as MyTokenSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyTokenSale {
    return new Contract(address, _abi, signerOrProvider) as MyTokenSale;
  }
}