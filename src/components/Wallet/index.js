import {BiWalletAlt} from 'react-icons/bi'
import {useSelector, useDispatch} from 'react-redux'
import {setUserAccount, setWhiteListCheck} from '../../stores/global'
import {InjectedConnector} from '@web3-react/injected-connector'
import {useWeb3React} from "@web3-react/core";
import {useEffect} from 'react';
import {setupNetwork} from '../../utils/wallet'
import {BSC_CHAIN_ID} from 'config'
import {useState} from 'react'
import {getNftInfo, getNftList} from '../../utils/axios'
/* import { BscConnector } from '@binance-chain/bsc-connector' bsc 지갑을 원하면 이걸로 바꿔주자 */
import {store, getBlockNumber, bidAction} from "../../utils/calls";
import {parseAccount} from "../../utils/util";
import {getWhiteListCheck} from "../../utils/axios";

const WalletBtn = () => {
    const injected = new InjectedConnector({supportedChainIds: [parseInt(BSC_CHAIN_ID, 10)]});
    /* const bscConnector = new BscConnector({ supportedChainIds: [BSC_CHAIN_ID] }) bsc 지갑을 원하면 이걸로 바꿔주자 */

    const userAccount = useSelector((state) => state.global.userAccount)
    /* 지갑 전역변수에 담음 */

    const [mouseOverCheck, setMouseOverCheck] = useState(false)
    const {active, account, activate, deactivate, library} = useWeb3React()
    const dispatch = useDispatch()

    // 지갑 연결
    const connect = async () => {
        try {
            // 네트워크 가 연결되었을때 Network settings
            let network = await setupNetwork();

            // 연결 되지 않았다면 Metamkask 창 open
            if (!network) {
                window.open('https://metamask.io/');
            }
            // 1초뒤 activate
            await activate(injected);

        } catch (err) {
            console.log(err)
        }
    }

    // 지갑 로그아웃
    const disconnect = async () => {
        try {
            // local 저장에서 local-account 정보 삭제
            localStorage.removeItem('local-account');
            // dispatch == 정보없는 userAcoount로 보냄
            dispatch(setUserAccount(''))
            // 연결 해제
            deactivate();
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(
        // 비동기 처리
        async () => {
            // account 비활성화 시
            if (!account) {
                if (!!localStorage.getItem('local-account')) {
                    await activate(injected);
                }
                return;
            }
            localStorage.setItem('local-account', account);
            dispatch(setUserAccount(account))
            await getWhiteListCheck(account).then(value => {
                dispatch(setWhiteListCheck(value))
            })
        },
        [account]
    );


    // 로그인된 상황에서 mouseover 시
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