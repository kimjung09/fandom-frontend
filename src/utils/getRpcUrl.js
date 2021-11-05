import sample from 'lodash/sample'


export const nodes = [
    "https://bsc-dataseed1.ninicoin.io",
    "https://bsc-dataseed1.defibit.io",
    "https://bsc-dataseed.binance.org"
]

const getNodeUrl = () => {
    return sample(nodes)
}

export default getNodeUrl
