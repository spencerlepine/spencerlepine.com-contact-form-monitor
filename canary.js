// Import the Chromium browser into our scraper.
import { chromium } from 'playwright';
import config from './config.js';

const browser = await chromium.launch({
  headless: false, // enable this for local development
  bypassCSP: true, // required for GitHub Actions
});

// Create a new page
const page = await browser.newPage();

// Navigate to the URL containing the form
await page.goto(config.contactPageUrl);

// Fill out the form fields
await page.fill(`[data-testid="${config.nameInputDataTestId}"]`, 'CanaryName');
await page.fill(`[data-testid="${config.emailInputDataTestId}]`, 'email@canary.com');
await page.fill(`[data-testid="${config.messageInputDataTestId}"]`, 'Portfolio Contact Form is still working!');

// Submit the form
await page.click(`[data-testid="${config.submitBtnDataTestId}"]`);
await page.waitForLoadState('load');

await page.waitForTimeout(3000);
await browser.close();
