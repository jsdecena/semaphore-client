import env from '#start/env'
import axios from 'axios';

export const API_KEY = env.get('SEMAPHORE_API_KEY')

const lookUpAccount = async() => {
  
  const BASE_URL = env.get('SEMAPHORE_URL')
  if(!BASE_URL && !API_KEY) {
    throw Error('You must have SEMAPHORE_URL and API_KEY in your env')
  }

  axios.get(`${BASE_URL ?? ''}?apikey=${API_KEY}`)
  .then(response => {
    console.log('Account Info:', response.data);
  })
  .catch(error => {
    console.error('Error fetching account info:', error);
  });
}

export default lookUpAccount