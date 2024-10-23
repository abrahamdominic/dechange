// client.ts
import web3 from './web3'; 
import deChangeABI from './DeChangeABI.json'; 
import soulBoundTokenABI from './SoulBoundTokenABI.json'
import { AbiItem } from 'web3-utils';

// Address variables
const deChangeAddress = '0xbA43C9d6D80b92AB28eac94D24B923C18eE48dB8';
const soulBoundTokenAddress = '0xD0957D9219EB60Af476D86b240650BB6785b1599';

// Initialize contracts
export const deChangeContract = new web3.eth.Contract(deChangeABI as unknown as AbiItem[], deChangeAddress);
export const soulBoundTokenContract = new web3.eth.Contract(soulBoundTokenABI as unknown as AbiItem[], soulBoundTokenAddress);

export default web3;
