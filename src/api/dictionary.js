import axios from 'axios';

const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const freeDict = async (query) => {
    axios.get(URL + query)
        .then(res => {
            return res.data[0];
        });
}
