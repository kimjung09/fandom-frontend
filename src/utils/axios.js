// axios
import axios from 'axios'

const url = process.env.REACT_APP_API_URL

export const getNftList = async () => {
    try {
        const response = await axios.get(`${url}/fandom`);
        return response.data.data;
    } catch (e) {
        console.log(e);
    }
}


export const getNftInfo = async (id) => {
    try {
        const response =await axios.get(`${url}/fandom/${id}`);
        return response.data.data;
    } catch (e) {
        console.log(e);
    }
}
