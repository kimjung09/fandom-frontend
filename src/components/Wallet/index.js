import {BiWalletAlt} from 'react-icons/bi'
import {useSelector, useDispatch} from 'react-redux'
import {setUserAccount} from '../../stores/global'
import {InjectedConnector} from '@web3-react/injected-connector'
import {useWeb3React} from "@web3-react/core";
import {useEffect} from 'react';
import {setupNetwork} from '../../utils/wallet'
import {BSC_CHAIN_ID} from 'config'
import {useState} from 'react'
import {getNftInfo, getNftList} from '../../utils/axios'
/* import { BscConnector } from '@binance-chain/bsc-connector' bsc 지갑을 원하면 이걸로 바꿔주자 */
import {store,getBlockNumber, bidAction} from "../../utils/calls";
import {parseAccount} from "../../utils/util";

const WalletBtn = () => {
    const injected = new InjectedConnector({supportedChainIds: [parseInt(BSC_CHAIN_ID, 10)]});
    /* const bscConnector = new BscConnector({ supportedChainIds: [BSC_CHAIN_ID] }) bsc 지갑을 원하면 이걸로 바꿔주자 */

    const userAccount = useSelector((state) => state.global.userAccount)
    /* 지갑 전역변수에 담음 */

    const [mouseOverCheck, setMouseOverCheck] = useState(false)
    const {active, account, activate, deactivate, library} = useWeb3React()
    const dispatch = useDispatch()

    const connect = async () => {
        try {
            let network = await setupNetwork();
            if(!network){
                window.open('https://metamask.io/');
            }
            await activate(injected);

        } catch (err) {
            console.log(err)
        }
    }

    const disconnect = async () => {
        try {
            localStorage.removeItem('local-account');
            deactivate();
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(
        async () => {
            if (!account) {
                if (!!localStorage.getItem('local-account')) {
                    await activate(injected);
                }
                return;
            }
            localStorage.setItem('local-account', account);
            dispatch(setUserAccount(account))
        },
        [account]
    );

    const ParseAccount = () => {
        if (mouseOverCheck) {
            return (<span>Disconnect</span>)
        }
        return (<span>{parseAccount(account)}</span>)
    }

    return (
        <>
            {active ?
                <a className="wallet-btn" style={{cursor: 'pointer'}}
                   onClick={disconnect}
                   onMouseOver={() => setMouseOverCheck(true)}
                   onMouseLeave={() => setMouseOverCheck(false)}>
                    <ParseAccount/>
                </a>
                :
                <a className="wallet-btn" style={{cursor: 'pointer'}} onClick={connect}>
                    <img src="/images/icon/wallet.png"/>
                    Ví
                </a>
            }
        </>
    )
}


export default WalletBtn;