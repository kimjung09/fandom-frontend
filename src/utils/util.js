// momment 날짜 라이브러리를 사용
import moment from 'moment';

// 서브페이지에 item table에서 숫자가 많은 bidding number를 불러올 경우 자릿수가 증가함에 따라 정확성이 깨지는 현상
// 그렇기 때문에 bigNuumber를 사용해 숫자 손실을 방지해준다.
import BigNumber from 'bignumber.js'


export const parseAccount = (account) => {
    return `${account.substring(0, 5)}...${account.substring(account.length - 4)}`
}

export const parseDate = (date) => {
    if (!date) {
        return '';
    }

    // momment 라이브러에 ParseDate를 담아주고 날짜의 포멧을 지정해주면 해당 Momment 객체로 반환이 되어진다.
    return moment(date).format('YYYY.MM.DD HH:mm');
}

export const parseAmount = (amount) => {
    // 숫자형태로 change
    return new BigNumber(amount).toNumber();
}

export const parseUSD = (amount) => {
    return new BigNumber(amount).multipliedBy(0.003).toNumber();
}
