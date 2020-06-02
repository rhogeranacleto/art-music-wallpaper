import chrome from 'chrome-aws-lambda';
import { launch } from 'puppeteer-core';

export async function screenshot() {

  const browser = await launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  });

  const page = await browser.newPage();
  await page.goto('https://google.com');

  const file = await page.screenshot({ type: 'jpeg', quality: 100, fullPage: true });

  await browser.close();

  return file;
}