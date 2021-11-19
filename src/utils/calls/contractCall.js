import auction_pid1ABI from "../../config/abi/auction_pid1.json"
import nft_marketABI from "../../config/abi/nft_market.json"
import {ethers} from 'ethers'
import {useWeb3React} from '@web3-react/core'
import {web3Provider} from "../web3Providers";
import BigNumber from 'bignumber.js'
import Web3 from 'web3'
import moment from 'moment'
import {showMetamaskSite} from "../util";

export const bidAction = async (contractAddress, amount) => {
    console.log(web3Provider)
    if (!web3Provider) {
        showMetamaskSite()
        return;
    }
    if (!window.ethereum.selectedAddress) {
        return
    }
    try {
        let account = window.ethereum.selectedAddress;
        const signer = web3Provider.getSigner();
        const auctionContract = new ethers.Contract(contractAddress, auction_pid1ABI, signer);
        await auctionContract.bid({from: account, value: Web3.utils.toWei(amount, 'ether')})
    } catch (e) {
        console.log(e)
    }
}

export const bidAbleCheck = async (contractAddress) => {
    if (!web3Provider) {
        return;
    }
    try {
        const signer = web3Provider.getSigner();
        const auctionContract = new ethers.Contract(contractAddress, auction_pid1ABI, signer);
        let endTime = await auctionContract.endAt();
        let check = new BigNumber(endTime.toString()).minus(moment().unix()).toNumber();
        if (check <= 0) {
            return false
        }
        return true;
    } catch (e) {
        console.log('bidAbleCheck')
        console.log(e)
        return false;
    }
}

export const withdrawAction = async (contractAddress) => {
    if (!web3Provider) {
        showMetamaskSite()
        return;
    }
    try {
        const signer = web3Provider.getSigner();
        const buyContract = new ethers.Contract(contractAddress, auction_pid1ABI, signer);
        await buyContract.withdraw();
    } catch (e) {
        console.log(e)
    }
}

export const buyAction = async (contractAddress, nftContractAddress, buyIndex) => {
    if (!web3Provider) {
        showMetamaskSite()
        return;
    }
    if (!buyIndex) {
        console.log('buyIndex : ' + buyIndex)
        return;
    }
    try {
        const signer = web3Provider.getSigner();
        const buyContract = new ethers.Contract(contractAddress, nft_marketABI, signer);
        let listingPrice = await buyContract.getListingPrice()
        await buyContract.createMarketSale(nftContractAddress, buyIndex, {value: listingPrice.toString()})
    } catch (e) {
        console.log(e)
    }
}

export const getBuyIndex = async (contractAddress) => {
    if (!web3Provider) {
        return;
    }
    try {
        const signer = web3Provider.getSigner();
        const buyContract = new ethers.Contract(contractAddress, nft_marketABI, signer);
        let listingPrice = await buyContract.getListingPrice()
        let items = await buyContract.fetchMarketItems();
        if (items.length === 0) {
            return ''
        }
        return listingPrice.toString()
    } catch (e) {
        console.log(e)
        return ''
    }
}
