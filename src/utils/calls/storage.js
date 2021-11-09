import storageABI from "../../config/abi/storage.json";
import auction_pid1ABI from "../../config/abi/auction_pid1.json"
import {auction_pid1, storage_contract_address} from "../../config"
import {ethers} from 'ethers'
import {useWeb3React} from '@web3-react/core'
import {web3Provider} from "../web3Providers";
import BigNumber from 'bignumber.js'
import Web3 from 'web3'


const options = {
    gasLimit: 200000,
}

export const store = async (account) => {
    const signer = web3Provider.getSigner();
    const storageContract = new ethers.Contract(storage_contract_address, storageABI, signer);
    console.log(await storageContract.store(2))
    return 0;
}

export const bidAction = async (account) => {

    const signer = web3Provider.getSigner();

    const auctionContract = new ethers.Contract(auction_pid1, auction_pid1ABI, signer);

    console.log(await auctionContract.queryFilter(12497545,  12497565))

    //
    // let amount = Web3.utils.toWei('0.00211', 'ether');
    //
    // // console.log(Web3.utils.toWei('1', 'ether'))
    //
    // console.log(await auctionContract.bid(
    //     {from: account, value: amount}
    // ))
    //
    // console.log(web3Provider)
    // console.log(signer)

    // console.log(await auctionContract.bid(2))


}