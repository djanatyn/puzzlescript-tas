# puzzlescript-tas
play puzzlescript games quickly

# what games?
* https://devdogg.itch.io/at-the-beach
* https://devdogg.itch.io/bee-in-the-garden
* https://devdogg.itch.io/spellingbee

# how?
controlling a browser and sending keyboard inputs!

* [lucacasonato/deno-puppeteer](https://github.com/lucacasonato/deno-puppeteer)
* [`KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)

``` javascript
const U = 0x26; // up
const D = 0x28; // down
const L = 0x27; // left
const R = 0x25; // right

// "x" is the confirm key
const X = 0x58;

// press and release a key
function press(key) {
    document.dispatchEvent(new KeyboardEvent("keydown", {
        "keyCode": key
    }));
    document.dispatchEvent(new KeyboardEvent("keyup", {
        "keyCode": key
    }));
}
```
