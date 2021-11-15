// axios
import axios from 'axios'

export const getNftList = async () => {
    try {
        const response = await axios.get('http://3.35.194.80:8000/api/fandom');
        return response.data.data;
    } catch (e) {
        console.log(e);
    }
}


export const getNftInfo = async (id) => {
    try {
        const response =await axios.get(`http://3.35.194.80:8000/api/fandom/${id}`);
        return response.data.data;
    } catch (e) {
        console.log(e);
    }
}
