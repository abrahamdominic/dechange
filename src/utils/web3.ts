import Web3 from 'web3';

// Initialize Web3 with Infura URL
const infuraUrl = 'https://mainnet.infura.io/v3/4eacd1e0bf7445f5a5fb541582887660';
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

// Define contract addresses
const deChangeAddress = '0xbA43C9d6D80b92AB28eac94D24B923C18eE48dB8';
const soulBoundTokenAddress = '0xD0957D9219EB60Af476D86b240650BB6785b1599';

// Import contract ABIs
import deChangeABI from './DeChangeABI.json';
import soulBoundTokenABI from './SoulBoundTokenABI.json';

// Initialize contracts
export const deChangeContract = new web3.eth.Contract(deChangeABI as AbiItem[], deChangeAddress);
export const soulBoundTokenContract = new web3.eth.Contract(soulBoundTokenABI as AbiItem[], soulBoundTokenAddress);

// Export Web3 instance
export default web3;
