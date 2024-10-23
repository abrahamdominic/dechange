import Web3, { AbiItem } from 'web3';

// Initialize Web3 with Alchemy URL
const alchemyUrl = 'https://base-sepolia.g.alchemy.com/v2/UBDX_6E93vJ7hYR8RV4Ike2D3ulRt-I5';
const web3 = new Web3(new Web3.providers.HttpProvider(alchemyUrl));

// Define contract addresses
const deChangeAddress = '0xbA43C9d6D80b92AB28eac94D24B923C18eE48dB8';
const soulBoundTokenAddress = '0xD0957D9219EB60Af476D86b240650BB6785b1599';

// Import contract ABIs
import deChangeABI from './DeChangeABI.json';
import soulBoundTokenABI from './SoulBoundTokenABI.json';

// Initialize contracts
export const deChangeContract = new web3.eth.Contract(deChangeABI as unknown as AbiItem[], deChangeAddress);
export const soulBoundTokenContract = new web3.eth.Contract(soulBoundTokenABI as unknown as AbiItem[], soulBoundTokenAddress);

// Export Web3 instance
export default web3;
