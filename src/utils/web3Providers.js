import { ethers } from 'ethers'

export const web3Provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum): '';

export default null