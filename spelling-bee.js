import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";

// https://stackoverflow.com/a/65489871
const browser = await puppeteer.launch({
  headless: false,
  args: [
    "--disable-web-security",
    "--disable-features=IsolateOrigins,site-per-process",
  ],
});
const page = await browser.newPage();
await page.goto("https://devdogg.itch.io/spellingbee");

const iframe = await page.$("iframe");
const game = await iframe.contentFrame();

await game.evaluate(() => {
  // north, south, east, west
  // keycodes for KeyboardEvent
  const N = 0x26;
  const S = 0x28;
  const E = 0x27;
  const W = 0x25;

  // confirm key
  const X = 0x58;

  // press and release a key
  function press(key) {
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        "keyCode": key,
      }),
    );
    document.dispatchEvent(
      new KeyboardEvent("keyup", {
        "keyCode": key,
      }),
    );
  }

  // spelling bee levels
  spellingBee = [
    [E, N, E, E, S, W, N, W, S, S, S],
    [S, W, W, W, W, N, E, S, E, E, N, N, W, S, S, E, S, E, S, W, N, W, W, N, W, S, S],
    [W, W, N, N],
    [E, E, N, N, N, E, E, S, W, N, W, S, S, N, W, W, W, S, S, E, E],
    [E, E, N, N, N, N, E, E, E, S, S, S, W, W, W, W, E, E, E, E, N, N, W, W, N, W, S, S, N, E, E, E, S, S, W, W, W],
  ];

  press(X);
  setTimeout(press, 500, X);

  const BASE_DELAY = 600;
  const LEVEL_TIME = 3000;
  const STEP_TIME = 50;

  spellingBee.forEach((level, index) => {
    setTimeout(press, BASE_DELAY + LEVEL_TIME * index, X);
    setTimeout(() => {
        level.forEach((dir, index) => setTimeout(press, STEP_TIME * (index + 1) + 100, dir));
    }, BASE_DELAY + LEVEL_TIME * index);
  });
});

await page.waitFor(600 + (3000 * 5) + 1000);
await page.screenshot({ path: "spellingbee.png" });

await browser.close();
console.log("complete");
