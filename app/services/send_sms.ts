import env from '#start/env'
import axios from 'axios'
import { API_KEY } from './index.js'

type SendSms =   {
  apikey: string,
  number: string,
  message: string,
  sendername: string,
}

export const sendSms = async (
  {
    apikey,
    number,
    message,
    sendername,
  } : SendSms
) => {
  const BASE_URL = env.get('SEMAPHORE_URL')
  if (!BASE_URL && !API_KEY) {
    throw Error('You must have SEMAPHORE_URL and API_KEY in your env')
  }

  axios
    .post(`${BASE_URL ?? ''}/messages`, {
      apikey,
      number,
      message,
      sendername,
    })
    .then((response) => {
      console.log('SEND SMS Info:', response.data)
    })
    .catch((error) => {
      console.error('Error SEND SMS:', error)
    })
}

export default sendSms
