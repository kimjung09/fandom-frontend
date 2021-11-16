import moment from 'moment';
import BigNumber from 'bignumber.js'


export const parseAccount = (account) => {
    return `${account.substring(0, 5)}...${account.substring(account.length - 4)}`
}

export const parseDate = (date) => {
    if (!date) {
        return '';
    }
    return moment(date).format('YYYY.MM.DD HH:mm');
}

export const parseAmount = (amount) => {
    return new BigNumber(amount).toNumber();
}

export const parseUSD = (amount) => {
    return new BigNumber(amount).multipliedBy(0.003).toNumber();
}
