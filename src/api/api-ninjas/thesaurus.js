import axios from 'axios';

const URL = 'https://api.api-ninjas.com/v1/thesaurus';

export const thesaurus = async (query) => {
    const { data } = await axios.get(URL ,{
        params: {
            word: query
        },
        headers: {
            'X-Api-Key': process.env.API_KEY
        }
    });
    console.log(data);
    
    return data;
}
