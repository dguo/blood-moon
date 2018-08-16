import {titleCase} from 'change-case';

import {ColorScheme, TemplateOutput} from '../../types';
import {hexColorToBplistData} from './conversion';

export default function generate(
    name: string,
    colors: ColorScheme
): TemplateOutput {
    const keys = [
        ['ANSIBlackColor', colors.terminalBlack],
        ['ANSIRedColor', colors.terminalRed],
        ['ANSIGreenColor', colors.terminalGreen],
        ['ANSIYellowColor', colors.terminalYellow],
        ['ANSIBlueColor', colors.terminalBlue],
        ['ANSIMagentaColor', colors.terminalMagenta],
        ['ANSICyanColor', colors.terminalCyan],
        ['ANSIWhiteColor', colors.terminalWhite],
        ['ANSIBrightBlackColor', colors.terminalBrightBlack],
        ['ANSIBrightRedColor', colors.terminalBrightRed],
        ['ANSIBrightGreenColor', colors.terminalBrightGreen],
        ['ANSIBrightYellowColor', colors.terminalBrightYellow],
        ['ANSIBrightBlueColor', colors.terminalBrightBlue],
        ['ANSIBrightMagentaColor', colors.terminalBrightMagenta],
        ['ANSIBrightCyanColor', colors.terminalBrightCyan],
        ['ANSIBrightWhiteColor', colors.terminalBrightWhite],
        ['BackgroundColor', colors.terminalBackground],
        ['TextBoldColor', colors.terminalRed],
        ['CursorColor', colors.terminalCursor],
        ['TextColor', colors.terminalText],
        ['SelectionColor', colors.terminalSelection]
    ];

    const body = keys.reduce((output, [key, hex]) => {
        const data = hexColorToBplistData(hex);

        return (
            output +
            `
  <key>${key}</key>
  <data>
    ${data}
  </data>`
        );
    }, '');

    const content = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>ProfileCurrentVersion</key>
  <real>2.04</real>
  <key>FontAntialias</key>
  <true/>${body}
  <key>name</key>
  <string>${titleCase(name)}</string>
  <key>type</key>
  <string>Window Settings</string>
</dict>
</plist>
`;

    return {
        fileName: `${titleCase(name)}.terminal`,
        content
    };
}
