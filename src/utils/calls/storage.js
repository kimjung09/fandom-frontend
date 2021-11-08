import storageABI from "../../config/abi/storage.json";
import {storage_contract_address} from "../../config"
import {ethers} from 'ethers'
import {useWeb3React} from '@web3-react/core'
import {web3Provider} from "../web3Providers";
import BigNumber from 'bignumber.js'


const options = {
    gasLimit: 200000,
}

export const store = async (account) => {
    const signer = web3Provider.getSigner();
    const storageContract = new ethers.Contract(storage_contract_address, storageABI, signer);
    console.log(await storageContract.store(2))
    return 0;
}