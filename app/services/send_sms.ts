import env from '#start/env'
import axios from 'axios'
import { API_KEY, SENDER_NAME } from './index.js'

type SendSms = {
  number: string
  message: string
}

export const sendSms = async ({ number, message }: SendSms) => {
  const BASE_URL = env.get('SEMAPHORE_URL')
  if (!BASE_URL && !API_KEY && !SENDER_NAME) {
    throw Error('You must have SEMAPHORE_URL and API_KEY and SENDER_NAME in your env')
  }

  axios
    .post(`${BASE_URL ?? ''}/messages`, {
      apikey: API_KEY,
      number,
      message,
      sendername: SENDER_NAME,
    })
    .then((response) => {
      console.log('SEND SMS Info:', response.data)
    })
    .catch((error) => {
      console.error('Error SEND SMS:', error)
    })
}

export default sendSms
