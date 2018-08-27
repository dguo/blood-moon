# Blood Moon for Highlight.js

## Installation

1. Include the stylesheet on your page: `<link rel="stylesheet" href="blood-moon.css">`
2. Initialize highlight.js by following the instructions on [this page](https://highlightjs.org/usage/).

## Development

To test out the theme, follow these steps to get a local copy of the
highlight.js [demo page](https://highlightjs.org/static/demo/) that includes
this theme.

1. `$ mkdir demo`
2. `$ git clone https://github.com/highlightjs/highlight.js.git demo`
3. `$ cd demo && npm install`
4. `$ ln -s ../../../blood-moon.css src/styles/blood-moon.css`
5. `$ node tools/build.js`
6. Open the generated `build/demo/index.html` in a browser.
7. Select the theme from the menu on the left.
