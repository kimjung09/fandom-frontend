import {BiWalletAlt} from 'react-icons/bi'
import {useSelector, useDispatch} from 'react-redux'
import {setAddress} from '../../stores/global'
import {InjectedConnector} from '@web3-react/injected-connector'
// import { BscConnector } from '@binance-chain/bsc-connector'
import {useWeb3React} from "@web3-react/core";
import {useEffect} from 'react';
import {setupNetwork} from '../../utils/wallet'
import { BSC_CHAIN_ID } from 'config'

const btnStyle = {
    cursor: 'pointer'
}


const WalletBtn = () => {
    const chainId = parseInt(BSC_CHAIN_ID, 10)
    const injected = new InjectedConnector({supportedChainIds: [chainId]});
    // const bscConnector = new BscConnector({ supportedChainIds: [BSC_CHAIN_ID] })

    const {active, account, activate, deactivate} = useWeb3React()

    const address = useSelector((state) => state.global.address)
    const dispatch = useDispatch()


    async function connect() {
        try {
            await setupNetwork();
            await activate(injected)
            // await activate(bscConnector)

        } catch (err) {
            console.log(err)
        }
    }

    async function disconnect() {
        try {
            deactivate();
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(
        () => {
            dispatch(setAddress(account));
        },
        [account]
    );

    return (
        <>
            나의 : {address} 입니다.

            {active ?
                <a style={btnStyle} onClick={disconnect}>
                    <span>{account}</span>
                </a>
                :
                <a style={btnStyle} onClick={connect}>
                    <span>
                        <BiWalletAlt/>
                    </span>
                    Wallet
                </a>
            }
        </>
    )
}


export default WalletBtn;