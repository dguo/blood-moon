import Color from 'color';

import {ColorHex, ColorScheme, Meta, TemplateOutput} from '../../types';

function rgb(hex: ColorHex): string {
    return Color(hex)
        .rgb()
        .array()
        .join(',');
}

export default function generate(
    meta: Meta,
    colors: ColorScheme
): TemplateOutput {
    const content = `${
        meta.homepage ? `# ${meta.homepage}\n\n` : ''
    }BackgroundColour=${rgb(colors.minttyBackground)}
ForegroundColour=${rgb(colors.minttyForeground)}
CursorColour=${rgb(colors.minttyCursor)}
Black=${rgb(colors.minttyBlack)}
BoldBlack=${rgb(colors.minttyBrightBlack)}
Red=${rgb(colors.minttyRed)}
BoldRed=${rgb(colors.minttyBrightRed)}
Green=${rgb(colors.minttyGreen)}
BoldGreen=${rgb(colors.minttyBrightGreen)}
Yellow=${rgb(colors.minttyYellow)}
BoldYellow=${rgb(colors.minttyBrightYellow)}
Blue=${rgb(colors.minttyBlue)}
BoldBlue=${rgb(colors.minttyBrightBlue)}
Magenta=${rgb(colors.minttyMagenta)}
BoldMagenta=${rgb(colors.brightMagenta)}
Cyan=${rgb(colors.minttyCyan)}
BoldCyan=${rgb(colors.brightCyan)}
White=${rgb(colors.minttyWhite)}
BoldWhite=${rgb(colors.minttyBrightWhite)}
`;

    return {
        fileName: meta.name,
        content
    };
}
