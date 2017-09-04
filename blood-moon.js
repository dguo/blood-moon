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
    main: {
      black: '#10100e',
      red: '#C40233',
      green: '#03C03C',
      yellow: '#FFD700',
      blue: '#0087BD',
      magenta: '#9A4EAE',
      cyan: '#0D98BA',
      white: '#c6c6c4'
    },
    bright: {
      black: '#343434',
      red: '#FF6E67',
      green: '#5FFA68',
      yellow: '#FFFC67',
      blue: '#5CBDFA',
      magenta: '#FF77FF',
      cyan: '#60FDFF',
      white: '#FFFFFF'
    },
    alt: {
      grey: '#696969'
    }
};

colors.background = colors.main.black;
colors.foreground = colors.main.white;
colors.selection = '#800020'; // Oxblood
colors.selectionText = colors.main.white;
colors.link = colors.main.blue;
colors.comment = colors.alt.grey;
colors.ruler = lighten(colors.background, 0.3);

module.exports = {
  colors,
  name: 'blood-moon'
};
