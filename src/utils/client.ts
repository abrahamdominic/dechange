// client.ts
import web3 from './web3'; // Adjust the path if needed
import deChangeABI from './deChangeABI.json'; // Assuming this is your ABI file
import { AbiItem } from 'web3-utils'; // Ensure you have this import if you're using AbiItem

// Address variables
const deChangeAddress = '0xbA43C9d6D80b92AB28eac94D24B923C18eE48dB8';
const soulBoundTokenAddress = '0xD0957D9219EB60Af476D86b240650BB6785b1599'; // Set the actual token address here

// Initialize contracts
export const deChangeContract = new web3.eth.Contract(deChangeABI as unknown as AbiItem[], deChangeAddress);

export const soulBoundTokenContract = new web3.eth.Contract(soulBoundTokenABI as AbiItem[], soulBoundTokenAddress);

export default web3;
