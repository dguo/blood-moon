const Color = require('color');

function lighten(hex, value) {
  const rgb = Color(hex).lighten(value).rgb().array();

  const lightenedHex = '#' + rgb.map(x => {
    const xHex = parseInt(x, 10).toString(16);
    return xHex.length === 1 ? '0' + xHex : xHex;
  }).join('');

  return lightenedHex;
}

const colors = {
  black: '#10100E',
  gray: '#696969', // Dim gray
  white: '#C6C6C4',
  lightWhite: '#FFFAFA', // Snow
  green: '#009F6B', // NCS green
  lightGreen: '#03C03C', // Dark pastel green
  cyan: '#20B2AA', // Light sea green
  lightCyan: '#00CCCC', // Robin egg blue
  blue: '#0087BD', // NCS blue
  lightBlue: '#007FFF', // Azure
  magenta: '#9A4EAE',
  pink: '#FF1493', // Deep pink
  brown: '#CD853F', // Peru
  red: '#C40233', // NCS red
  darkRed: '#800020', // Oxblood
  lightRed: '#FF2400', // Scarlet
  orange: '#EE7F2D', // Princeton
  yellow: '#FFD700', // Gold
  lightYellow: '#FDFF00', // Lemon
};

colors.background = colors.black;
colors.foreground = colors.white;
colors.selection = colors.darkRed;
colors.selectionText = colors.white;
colors.link = colors.blue;

// UI
colors.ruler = lighten(colors.background, 0.3);

// syntax
colors.comment = colors.gray;

module.exports = {
  colors,
  name: 'blood-moon'
};
