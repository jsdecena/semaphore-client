import env from '#start/env'

export const API_KEY = env.get('SEMAPHORE_API_KEY')

export { sendSms } from './send_sms.js';
export { lookUpAccount } from './look_up_account.js';
export { lookUpSms } from './look_up_sms.js';
