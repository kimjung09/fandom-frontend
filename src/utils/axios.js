// axios
import axios from 'axios'

export const getNftList = async () => {
    try {
        return await axios.get('http://3.35.194.80:8000/api/fandom');
    } catch (e) {
        console.log(e);
    }
}


export const getNftInfo = async (id) => {
    try {
        return await axios.get('http://3.35.194.80:8000/api/fandom/`${id}`');
    } catch (e) {
        console.log(e);
    }
}
