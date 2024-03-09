# Portfolio Site Contact Form Canary [![.github/workflows/canary.yml](https://github.com/spencerlepine/portfolio-site-contact-form-canary/actions/workflows/canary.yml/badge.svg?branch=main)](https://github.com/spencerlepine/portfolio-site-contact-form-canary/actions/workflows/canary.yml)

Weekly Automated Web Crawler to detect Portfolio Site's Contact Form outage

<img width="741" alt="Screenshot 2024-03-08 at 6 05 46 PM" src="https://github.com/spencerlepine/portfolio-site-contact-form-canary/assets/60903378/1a193d17-96fd-4cd1-8ca0-92967aff3316">

## Usage

1. Update `config.js` values with your website URL, and form element `data-testid` values

````js
const config = {
  contactPageUrl: 'https://mywebsite/contact',
  nameInputDataTestId: 'contact-form-name-input',
  emailInputDataTestId: 'contact-form-email-input',
  messageInputDataTestId: 'contact-form-message-input',
  submitBtnDataTestId: 'contact-form-submit-btn',
};
```

2. Configure the GitHub Actions CRON job, and let it run!

```
name: Contact Form Canary

on:
  schedule:
    - cron: "0 9 * * 1" # "At 09:00 every Monday." - https://crontab.guru
  workflow_dispatch:

jobs:
  web-crawl:
    # ...
```

## Local Development

```sh
npm install
npm run bootstrap
npm start
```

**Specifications:** `Node v20+`
````
