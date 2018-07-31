import * as Case from 'case';

import {ColorScheme, TemplateOutput} from '../../types';
import {hexColorToBplistData} from './conversion';

export function generate(name: string, colors: ColorScheme): TemplateOutput {
  const keys = [
    ['ANSIBlackColor', colors.black],
    ['ANSIRedColor', colors.red],
    ['ANSIGreenColor', colors.green],
    ['ANSIYellowColor', colors.yellow],
    ['ANSIBlueColor', colors.blue],
    ['ANSIMagentaColor', colors.magenta],
    ['ANSICyanColor', colors.cyan],
    ['ANSIWhiteColor', colors.white],
    ['ANSIBrightBlackColor', colors.gray],
    ['ANSIBrightRedColor', colors.lightRed],
    ['ANSIBrightGreenColor', colors.lightGreen],
    ['ANSIBrightYellowColor', colors.lightYellow],
    ['ANSIBrightBlueColor', colors.lightBlue],
    ['ANSIBrightMagentaColor', colors.pink],
    ['ANSIBrightCyanColor', colors.lightCyan],
    ['ANSIBrightWhiteColor', colors.lightWhite],
    ['BackgroundColor', colors.background],
    ['TextBoldColor', colors.red],
    ['CursorColor', colors.foreground],
    ['TextColor', colors.foreground],
    ['SelectionColor', colors.selection]
  ];

  const body = keys.reduce((output, [key, hex]) => {
    const data = hexColorToBplistData(hex);

    return output + `
  <key>${key}</key>
  <data>
    ${data}
  </data>`;
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
  <string>${Case.capital(name)}</string>
  <key>type</key>
  <string>Window Settings</string>
</dict>
</plist>
`;

  return {
    fileName: `${Case.capital(name)}.terminal`,
    content
  };
}
