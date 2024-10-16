# Semaphore SMS client

Unofficial NodeJs SDK for the Semaphore SMS https://semaphore.co/docs

# How to use

```
import { lookUpAccount } from 'semaphore-client';
import { lookUpSms } from 'semaphore-client';
import { sendSms } from 'semaphore-client';

lookUpAccount()
lookUpSms()
sendSms({
      number: <MOBILE-NUMBER>,
      message: <YOUR-MESSAGE>
    })
```

Just make sure you have your: [APIKEY](https://semaphore.co/account#)

```
SEMAPHORE_API_KEY=<YOUR-KEY>
SEMAPHORE_URL=https://api.semaphore.co/api/v4
```

# Methods you can use

- sendSms() = Send SMS
- lookUpAccount() = Checks you account information
- lookUpSms() = Checks SMS status

# Author

Jeff Simons Decena
