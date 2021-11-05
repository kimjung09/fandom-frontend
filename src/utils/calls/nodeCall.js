import {simpleRpcProvider} from "../providers";

export const getGasPrice = async () => {
    const currentBlock = await simpleRpcProvider.getGasPrice()
    console.log(currentBlock);
}


