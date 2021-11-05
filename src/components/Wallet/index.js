import {BiWalletAlt} from 'react-icons/bi'
import {useSelector, useDispatch} from 'react-redux'
import {setUserAccount} from '../../stores/global'
import {InjectedConnector} from '@web3-react/injected-connector'
import {useWeb3React} from "@web3-react/core";
import {useEffect} from 'react';
import {setupNetwork} from '../../utils/wallet'
import {BSC_CHAIN_ID} from 'config'
import {useState} from 'react'
/* import { BscConnector } from '@binance-chain/bsc-connector' bsc 지갑을 원하면 이걸로 바꿔주자 */
import {getGasPrice} from "../../utils/calls";

const WalletBtn = () => {
    const injected = new InjectedConnector({supportedChainIds: [parseInt(BSC_CHAIN_ID, 10)]});
    /* const bscConnector = new BscConnector({ supportedChainIds: [BSC_CHAIN_ID] }) bsc 지갑을 원하면 이걸로 바꿔주자 */

    const userAccount = useSelector((state) => state.global.userAccount)
    /* 지갑 전역변수에 담음 */

    const [mouseOverCheck, setMouseOverCheck] = useState(false)
    const {active, account, activate, deactivate} = useWeb3React()
    const dispatch = useDispatch()

    const connect = async () => {
        try {
            await setupNetwork();
            await activate(injected)

            await getGasPrice();


        } catch (err) {
            console.log(err)
        }
    }

    const disconnect = async () => {
        try {
            deactivate();
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(
        () => {
            dispatch(setUserAccount(account))
        },
        [account]
    );

    const ParseAccount = () => {
        if (mouseOverCheck) {
            return (<span>Disconnect</span>)
        }
        return (<span>{`${account.substring(0, 5)}...${account.substring(account.length - 4)}`}</span>)
    }

    return (
        <>
            {active ?
                <a style={{cursor: 'pointer'}}
                   onClick={disconnect}
                   onMouseOver={() => setMouseOverCheck(true)}
                   onMouseLeave={() => setMouseOverCheck(false)}>
                    <ParseAccount/>
                </a>
                :
                <a style={{cursor: 'pointer'}} onClick={connect}>
                    <span>
                        <BiWalletAlt/>
                    </span>
                    WALLET
                </a>
            }
        </>
    )
}


export default WalletBtn;