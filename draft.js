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
    document.dispatchEvent(new KeyboardEvent("keydown", {
        "keyCode": key
    }));
    document.dispatchEvent(new KeyboardEvent("keyup", {
        "keyCode": key
    }));
}

// spelling bee levels
spellingBee = [
    [E, N, E, E, S, W, N, W, S, S, S],
    [S, W, W, W, W, N, E, S, E, E, N, N, W, S, S, E, S, E, S, W, N, W, W, N, W, S, S],
    [W, W, N, N],
    [E, E, N, N, N, E, E, S, W, N, W, S, S, N, W, W, W, S, S, E, E],
    [E, E, N, N, N, N, E, E, E, S, S, S, W, W, W, W, E, E, E, E, N, N, W, W, N, W, S, S, N, E, E, E, S, S, W, W, W],
];
