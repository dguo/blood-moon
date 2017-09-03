const colors = {
    main: {
      black: '#0c0a0a',
      red: '#c40233',
      green: '#03C03C',
      yellow: '#FFD700',
      blue: '#0087BD',
      magenta: '#9A4EAE',
      cyan: '#0D98BA',
      white: '#FFFFFF'
    },
    bright: {
      black: '#343434',
      red: '#ff6e67',
      green: '#5ffa68',
      yellow: '#fffc67',
      blue: '#5cbdfa',
      magenta: '#ff77ff',
      cyan: '#60fdff',
      white: '#FFFFFF'
    }
};

colors.background = colors.main.black;
colors.foreground = colors.main.white;
colors.selection = '#800020'; // Oxblood
colors.selectionText = colors.main.white;
colors.link = colors.main.blue;

module.exports = {
  colors,
  name: 'blood-moon'
};
