import chrome from 'chrome-aws-lambda';

export async function screenshot(user: string) {

  const browser = await chrome.puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: process.env.VERCEL_URL ? chrome.headless : true,
  });

  const page = await browser.newPage();

  const baseUrl = process.env.VERCEL_URL || 'art-music-wallpaper.now.sh';

  console.log(process.env, baseUrl);

  const url = `https://${baseUrl}?user=${user}`;

  await page.goto(url, {
    waitUntil: "networkidle0"
  });

  const file = await page.screenshot({ type: 'jpeg', quality: 100, fullPage: true });

  await browser.close();

  return file;
}