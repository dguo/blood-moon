import * as Color from 'color';

import {ColorScheme, Template} from './types';

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
const lightWhite = '#FFFAFA'; // Snow
const green = '#009F6B'; // NCS green
const lightGreen = '#03C03C'; // Dark pastel green
const cyan = '#20B2AA'; // Light sea green
const lightCyan = '#00CCCC'; // Robin egg blue
const blue = '#0087BD'; // NCS blue
const lightBlue = '#007FFF'; // Azure
const magenta = '#9A4EAE';
const pink = '#FF1493'; // Deep pink
const brown = '#CD853F'; // Peru
const red = '#C40233'; // NCS red
const darkRed = '#800020'; // Oxblood
const lightRed = '#FF2400'; // Scarlet
const orange = '#EE7F2D'; // Princeton
const yellow = '#FFD700'; // Gold
const lightYellow = '#FDFF00'; // Lemon

const background = black;

const colors: ColorScheme = {
    black,
    gray,
    white,
    lightWhite,
    green,
    lightGreen,
    cyan,
    lightCyan,
    blue,
    lightBlue,
    magenta,
    pink,
    brown,
    red,
    darkRed,
    lightRed,
    orange,
    yellow,
    lightYellow,
    // UI
    background,
    foreground: white,
    selection: darkRed,
    selectionText: white,
    ruler: lighten(background, 0.3),
    // syntax
    link: blue,
    comment: gray
};

export default {
    colors,
    name: 'blood-moon'
} as Template;
