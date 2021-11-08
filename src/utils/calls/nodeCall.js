import {web3Provider} from "../web3Providers";

export const getGasPrice = async () => {
    const gasPrice = await web3Provider.getGasPrice()
    console.log(`gas-price : ${gasPrice.toNumber()}`);
    return gasPrice;
}

export const getBlockNumber = async () => {
    const blockNumber = await web3Provider.getBlockNumber()
    console.log(`block-number : ${blockNumber}`);
    return blockNumber;
}

