import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto("https://devdogg.itch.io/spellingbee");
await page.screenshot({ path: "spellingbee.png" });

await browser.close();
