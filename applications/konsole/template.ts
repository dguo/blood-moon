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
        colors.konsoleBlack,
        colors.konsoleRed,
        colors.konsoleGreen,
        colors.konsoleYellow,
        colors.konsoleBlue,
        colors.konsoleMagenta,
        colors.konsoleCyan,
        colors.konsoleWhite,
        colors.konsoleBrightBlack,
        colors.konsoleBrightRed,
        colors.konsoleBrightGreen,
        colors.konsoleBrightYellow,
        colors.konsoleBrightBlue,
        colors.konsoleBrightMagenta,
        colors.konsoleBrightCyan,
        colors.konsoleBrightWhite
    ];

    const rgbColors = hexColors
        .map((color, index) => {
            return `[Color${index < 8 ? index : index - 8}${
                index < 8 ? '' : 'Intense'
            }]
Color=${rgb(color)}
`;
        })
        .join('\n');

    const content = `[General]
Description=${titleCase(name)}

${rgbColors}
[Background]
Color=${rgb(colors.konsoleBackground)}

[BackgroundIntense]
Color=${rgb(colors.konsoleBoldBackground)}

[Foreground]
Color=${rgb(colors.konsoleForeground)}

[ForegroundIntense]
Color=${rgb(colors.konsoleBoldForeground)}
`;

    return {
        fileName: `${name}.colorscheme`,
        content
    };
}
