import axios from 'axios'
console.log(process.env.REACT_APP_RAPID_API_KEY);
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
export const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
