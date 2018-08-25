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
        colors.puttyBrightBlack,
        colors.puttyRed,
        colors.puttyBrightRed,
        colors.puttyGreen,
        colors.puttyBrightGreen,
        colors.puttyYellow,
        colors.puttyBrightYellow,
        colors.puttyBlue,
        colors.puttyBrightBlue,
        colors.puttyMagenta,
        colors.puttyBrightMagenta,
        colors.puttyCyan,
        colors.puttyBrightCyan,
        colors.puttyWhite,
        colors.puttyBrightWhite
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
