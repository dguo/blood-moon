const Color = require('color');

function generate(name, colors) {
  const keys = [
    ['Ansi 0 Color', colors.main.black],
    ['Ansi 1 Color', colors.main.red],
    ['Ansi 2 Color', colors.main.green],
    ['Ansi 3 Color', colors.main.yellow],
    ['Ansi 4 Color', colors.main.blue],
    ['Ansi 5 Color', colors.main.magenta],
    ['Ansi 6 Color', colors.main.cyan],
    ['Ansi 7 Color', colors.main.white],
    ['Ansi 8 Color', colors.bright.black],
    ['Ansi 9 Color', colors.bright.red],
    ['Ansi 10 Color', colors.bright.green],
    ['Ansi 11 Color', colors.bright.yellow],
    ['Ansi 12 Color', colors.bright.blue],
    ['Ansi 13 Color', colors.bright.magenta],
    ['Ansi 14 Color', colors.bright.cyan],
    ['Ansi 15 Color', colors.bright.white],
    ['Background Color', colors.background],
    ['Badge Color', colors.main.red],
    ['Bold Color', colors.main.red],
    ['Cursor Color', colors.main.white],
    ['Foreground Color', colors.foreground],
    ['Link Color', colors.link],
    ['Selected Text Color', colors.selectionText],
    ['Selection Color', colors.selection]
  ];

  const body = keys.reduce((output, [key, hex]) => {
    const color = Color(hex);

    return output + `
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
    </dict>`;
  }, '');

  const output = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>${body}
</dict>
</plist>`;

  return {
    fileName: `${name}.itermcolors`,
    output
  };
}

module.exports = generate;
