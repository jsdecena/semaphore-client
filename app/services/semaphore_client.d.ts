declare module 'semaphore_client' {
  export function lookUpAccount(): Promise<any>
  export function lookUpSms(): Promise<any>
  export function sendSms(): Promise<any>
}
