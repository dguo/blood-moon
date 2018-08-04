exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: '#C6C6C4',
    cursorAccentColor: '#10100E',
    foregroundColor: '#C6C6C4',
    backgroundColor: '#10100E',
    selectionColor: 'rgba(128, 0, 32, 0.3)',
    borderColor: '#10100E',
    colors: {
      black: '#10100E',
      red: '#C40233',
      green: '#009F6B',
      yellow: '#FFD700',
      blue: '#0087BD',
      magenta: '#9A4EAE',
      cyan: '#20B2AA',
      white: '#C6C6C4',
      lightBlack: '#696969',
      lightRed: '#FF2400',
      lightGreen: '#03C03C',
      lightYellow: '#FDFF00',
      lightBlue: '#007FFF',
      lightMagenta: '#FF1493',
      lightCyan: '#00CCCC',
      lightWhite: '#FFFAFA'
    },
    css: `
      ${config.css || ''}
      .tab_tab {
        border-bottom-color: rgba(128, 0, 32, 0.3) !important;
        border-bottom-width: 2px;
      }

      .tab_tab:not(.tab_active) {
        opacity: 0.6;
      }

      .tab_tab.tab_active {
        border-bottom-color: #800020 !important;
      }

      .splitpane_divider {
        background-color: #C6C6C4 !important;
      }
    `
  });
}
