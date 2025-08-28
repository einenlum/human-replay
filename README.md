<h1 align="center">Human Replay</h1>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-3.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://opensource.org/license/mit" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A JS library for recording and replaying human user input.

> Type anything you want. Replay it the way you typed it. Zero dependencies.

### [Demo](https://einenlum.github.io/human-replay/)

## Why?

Because with AI and computers everywhere, automation and perfection have become boring. We lack analog feeling. Humans are cool again. Let's celebrate by adding a splash of humanity to our UI.

## Installation

### npm

```bash
npm install human-replay
```

```javascript
import HumanReplay from 'human-replay';
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/human-replay/dist/browser/index.min.js"></script>
<script>
    // window.HumanReplay
</script>
```

## Quick Start

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
    <title>Human Replay Demo</title>
</head>
<body>
    <input type="text" id="recordInput" placeholder="Type something to record...">
    <div id="replayOutput"></div>
    <button id="startRecord">Start Recording</button>
    <button id="stopRecord">Stop Recording</button>
    <button id="replay">Replay</button>
    <button id="reset">Reset</button>

    <script src="https://cdn.jsdelivr.net/npm/human-replay/dist/browser/index.min.js"></script>
    <script>
        const inputElement = document.getElementById('recordInput');
        const outputElement = document.getElementById('replayOutput');
        const humanReplay = new HumanReplay(inputElement);

        document.getElementById('startRecord').addEventListener('click', () => {
            humanReplay.startRecording();
        });

        document.getElementById('stopRecord').addEventListener('click', () => {
            humanReplay.stopRecording();
        });

        document.getElementById('replay').addEventListener('click', () => {
            if (humanReplay.hasRecordedData()) {
                outputElement.textContent = '';
                humanReplay.replay(outputElement);
            }
        });

        document.getElementById('reset').addEventListener('click', () => {
            humanReplay.reset();
        })
    </script>
</body>
</html>
```

### Replay specific typing data

```javascript
import HumanReplay from 'human-replay';

// Start and stop recording
humanReplay.startRecording();
// ...
humanReplay.stopRecording();

// Then get compressed data to be used later
const compressedData = humanReplay.getCompressedData();

// Replay this data in an element
const outputElement = document.getElementById('preview');
HumanReplay.replayFromData(outputElement, compressedData);
```

## Demo

Check out the live demo at [https://einenlum.github.io/human-replay](https://einenlum.github.io/human-replay) to:
- See how the library behaves in action
- Record your own typing patterns
- Generate replay code for your website

The demo allows you to replay specific inputs on your website without needing to install this library - perfect for quick testing or one-off animations.

## Author

👤 **Yann Rabiller**

* Website: [https://www.einenlum.com/](https://www.einenlum.com/)
* Github: [@einenlum](https://github.com/einenlum)

## Show your support

Give a ⭐️ if this project helped you!

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
