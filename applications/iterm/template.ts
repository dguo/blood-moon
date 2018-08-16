import Color from 'color';

import {ColorScheme, TemplateOutput} from '../../types';

export default function generate(
    name: string,
    colors: ColorScheme
): TemplateOutput {
    const keys = [
        ['Ansi 0 Color', colors.iTermBlack],
        ['Ansi 1 Color', colors.iTermRed],
        ['Ansi 2 Color', colors.iTermGreen],
        ['Ansi 3 Color', colors.iTermYellow],
        ['Ansi 4 Color', colors.iTermBlue],
        ['Ansi 5 Color', colors.iTermMagenta],
        ['Ansi 6 Color', colors.iTermCyan],
        ['Ansi 7 Color', colors.iTermWhite],
        ['Ansi 8 Color', colors.iTermBrightBlack],
        ['Ansi 9 Color', colors.iTermBrightRed],
        ['Ansi 10 Color', colors.iTermBrightGreen],
        ['Ansi 11 Color', colors.iTermBrightYellow],
        ['Ansi 12 Color', colors.iTermBrightBlue],
        ['Ansi 13 Color', colors.iTermBrightMagenta],
        ['Ansi 14 Color', colors.iTermBrightCyan],
        ['Ansi 15 Color', colors.iTermBrightWhite],
        ['Background Color', colors.iTermBackground],
        ['Badge Color', colors.iTermRed],
        ['Bold Color', colors.iTermRed],
        ['Cursor Color', colors.iTermWhite],
        ['Foreground Color', colors.iTermForeground],
        ['Link Color', colors.iTermLink],
        ['Selected Text Color', colors.iTermSelectionText],
        ['Selection Color', colors.iTermSelection]
    ];

    const body = keys.reduce((output, [key, hex]) => {
        const color = Color(hex);

        return (
            output +
            `
    <key>${key}</key>
    <dict>
        <key>Blue Component</key>
        <real>${color.blue() / 255}</real>
        <key>Color Space</key>
        <string>sRGB</string>
        <key>Green Component</key>
        <real>${color.green() / 255}</real>
        <key>Red Component</key>
        <real>${color.red() / 255}</real>
    </dict>`
        );
    }, '');

    const content = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>${body}
</dict>
</plist>`;

    return {
        fileName: `${name}.itermcolors`,
        content
    };
}
