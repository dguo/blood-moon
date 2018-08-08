/*

Terminal.app doesn't store its colors in a straightforward format. They are
stored as a base64 string that represents a binary plist. See
https://apple.stackexchange.com/q/98655/275342 for more details.

I found code to do the encoding here:
https://github.com/stayradiated/termcolors/blob/master/lib/formats/terminal-app.js

I'm using the magic strings and logic, so I'm including the project's
license below.

MIT License

Copyright (c) 2014 George Czabania

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

import Color from 'color';

const bplistParts = [
    Buffer.from(
        '62706c6973743030d40102030405061516582476657273696f6e58246f626a65637473592461726368697665725424746f7012000186a0a307080f55246e756c6cd3090a0b0c0d0e554e535247425c4e53436f6c6f7253706163655624636c6173734f1027',
        'hex'
    ),
    Buffer.from(
        '0010018002d2101112135a24636c6173736e616d655824636c6173736573574e53436f6c6f72a21214584e534f626a6563745f100f4e534b657965644172636869766572d1171854726f6f74800108111a232d32373b41484e5b628c8e9095a0a9b1b4bdcfd2d700000000000001010000000000000019000000000000000000000000000000d9',
        'hex'
    )
];

export function hexColorToBplistData(hex: string) {
    const color = Color(hex);

    const colors = [
        (color.red() / 255).toFixed(10),
        (color.green() / 255).toFixed(10),
        (color.blue() / 255).toFixed(10)
    ].join(' ');

    const binaryData =
        bplistParts[0].toString('binary') +
        colors +
        bplistParts[1].toString('binary');
    let base64Data = Buffer.from(binaryData, 'binary').toString('base64');

    const split = base64Data.match(/.{1,68}/g);
    if (split) {
        base64Data = split.join('\n    ');
    }

    return base64Data;
}
