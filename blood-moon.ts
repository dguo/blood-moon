import Color from 'color';

import {BaseColorScheme, Theme} from './types';

function lighten(hex: string, value: number): string {
    const rgb = Color(hex)
        .lighten(value)
        .rgb()
        .array();

    const lightenedHex =
        '#' +
        rgb
            .map(x => {
                const xHex = Math.floor(x).toString(16);
                return xHex.length === 1 ? '0' + xHex : xHex;
            })
            .join('');

    return lightenedHex;
}

const black = '#10100E';
const gray = '#696969'; // Dim gray
const white = '#C6C6C4';
const brightWhite = '#FFFAFA'; // Snow
const green = '#009F6B'; // NCS green
const brightGreen = '#03C03C'; // Dark pastel green
const cyan = '#20B2AA'; // bright sea green
const brightCyan = '#00CCCC'; // Robin egg blue
const blue = '#0087BD'; // NCS blue
const brightBlue = '#007FFF'; // Azure
const magenta = '#9A4EAE';
const pink = '#FF1493'; // Deep pink
const brown = '#CD853F'; // Peru
const red = '#C40233'; // NCS red
const darkRed = '#800020'; // Oxblood
const brightRed = '#FF2400'; // Scarlet
const orange = '#EE7F2D'; // Princeton
const yellow = '#FFD700'; // Gold
const brightYellow = '#FDFF00'; // Lemon

const background = black;

const colors: BaseColorScheme = {
    black,
    gray,
    white,
    brightWhite,
    green,
    brightGreen,
    cyan,
    brightCyan,
    blue,
    brightBlue,
    magenta,
    pink,
    brown,
    red,
    darkRed,
    brightRed,
    orange,
    yellow,
    brightYellow,
    // UI
    background,
    foreground: white,
    selection: darkRed,
    selectionText: white,
    ruler: lighten(background, 0.3),
    // syntax
    syntaxLink: blue,
    syntaxComment: gray
};

const theme: Theme = {
    colors,
    meta: {
        description: 'Dark and bold color scheme',
        homepage: 'https://github.com/dguo/blood-moon',
        name: 'blood-moon',
        maintainer: 'Danny Guo'
    }
};

export default theme;
