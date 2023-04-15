import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'b9a46f05bemsh0b149a05c8d9259p1927dfjsn046a20d73432',
    },
  });
    
  return data;
}