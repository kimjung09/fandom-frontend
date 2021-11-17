// axios
import axios from 'axios'

const url = "http://3.35.194.80:8000/api"

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

export const registerWhiteList = async (params) => {
    try {
        const response = await axios.post(`${url}/white_list`, params);
        return response.data.data;
    } catch (e) {
        console.log(e);
    }
}

export const getWhiteListCheck = async (id) => {
    try {
        const response = await axios.get(`${url}/white_list/${id}`);
        return response.data.data;
    } catch (e) {
        console.log(e);
    }
}