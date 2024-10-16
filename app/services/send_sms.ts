import env from '#start/env'
import axios from 'axios'
import { API_KEY } from './index.js'

export const sendSms = async () => {
  const BASE_URL = env.get('SEMAPHORE_URL')
  if (!BASE_URL && !API_KEY) {
    throw Error('You must have SEMAPHORE_URL and API_KEY in your env')
  }

  axios
    .post(`${BASE_URL ?? ''}/messages`, {
      apikey: API_KEY,
      number: '+639178901653',
      message: 'TEST MESSAGE',
      sendername: 'BLEEPRWARDS',
    })
    .then((response) => {
      console.log('SEND SMS Info:', response.data)
    })
    .catch((error) => {
      console.error('Error SEND SMS:', error)
    })
}

export default sendSms
