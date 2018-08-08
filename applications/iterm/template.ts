import * as Color from 'color';

import {ColorScheme, TemplateOutput} from '../../types';

export function generate(name: string, colors: ColorScheme): TemplateOutput {
  const keys = [
    ['Ansi 0 Color', colors.black],
    ['Ansi 1 Color', colors.red],
    ['Ansi 2 Color', colors.green],
    ['Ansi 3 Color', colors.yellow],
    ['Ansi 4 Color', colors.blue],
    ['Ansi 5 Color', colors.magenta],
    ['Ansi 6 Color', colors.cyan],
    ['Ansi 7 Color', colors.white],
    ['Ansi 8 Color', colors.gray],
    ['Ansi 9 Color', colors.lightRed],
    ['Ansi 10 Color', colors.lightGreen],
    ['Ansi 11 Color', colors.lightYellow],
    ['Ansi 12 Color', colors.lightBlue],
    ['Ansi 13 Color', colors.pink],
    ['Ansi 14 Color', colors.lightCyan],
    ['Ansi 15 Color', colors.lightWhite],
    ['Background Color', colors.background],
    ['Badge Color', colors.red],
    ['Bold Color', colors.red],
    ['Cursor Color', colors.white],
    ['Foreground Color', colors.foreground],
    ['Link Color', colors.link],
    ['Selected Text Color', colors.selectionText],
    ['Selection Color', colors.selection]
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
