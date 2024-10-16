import env from '#start/env'

export const API_KEY = env.get('SEMAPHORE_API_KEY')
export const SENDER_NAME = env.get('SEMAPHORE_SENDER_NAME')

export { sendSms } from './send_sms.js'
export { lookUpAccount } from './look_up_account.js'
export { lookUpSms } from './look_up_sms.js'
