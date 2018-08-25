import {titleCase} from 'change-case';
import Color from 'color';

import {ColorHex, ColorScheme, TemplateOutput} from '../../types';

function rgb(hex: ColorHex): string {
    return Color(hex)
        .rgb()
        .array()
        .join(',');
}

export default function generate(
    name: string,
    colors: ColorScheme
): TemplateOutput {
    const hexColors = [
        colors.puttyForeground,
        colors.puttyBoldForeground,
        colors.puttyBackground,
        colors.puttyBoldBackground,
        colors.puttyCursorText,
        colors.puttyCursor,
        colors.puttyBlack,
        colors.kittyBrightBlack,
        colors.kittyRed,
        colors.kittyBrightRed,
        colors.kittyGreen,
        colors.kittyBrightGreen,
        colors.kittyYellow,
        colors.kittyBrightYellow,
        colors.kittyBlue,
        colors.kittyBrightBlue,
        colors.kittyMagenta,
        colors.kittyBrightMagenta,
        colors.kittyCyan,
        colors.kittyBrightCyan,
        colors.kittyWhite,
        colors.kittyBrightWhite
    ];

    const rgbColors = hexColors
        .map((color, index) => {
            return `"Colour${index}"="${rgb(color)}"`;
        })
        .join('\n');

    const content = `Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\\Software\\SimonTatham\\PuTTY\\Sessions\\${titleCase(
        name
    ).replace(/ /g, '%20')}]
${rgbColors}
`;

    return {
        fileName: `${name}.reg`,
        content
    };
}
