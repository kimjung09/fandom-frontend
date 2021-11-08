import sample from 'lodash/sample'

export const nodes = [
    process.env.REACT_APP_BSC_NODE_1,
    process.env.REACT_APP_BSC_NODE_2,
    process.env.REACT_APP_BSC_NODE_3
]

const getNodeUrl = () => {
    return sample(nodes)
}

export default getNodeUrl
