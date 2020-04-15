import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async() =>{
    try {
        const responce = axios.get(url);
        return responce;
 
    } catch (error) {
        
    }
}