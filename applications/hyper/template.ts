import * as Color from 'color';

import {ColorScheme, TemplateOutput} from '../../types';

export function generate(name: string, colors: ColorScheme): TemplateOutput {
  const selection = Color(colors.selection);
  const transparentSelection =
    `rgba(${selection.red()}, ${selection.green()}, ${selection.blue()}, 0.3)`;

  const paneDivider = Color(colors.white);
  const transparentPaneDivider =
    `rgba(${paneDivider.red()}, ${paneDivider.green()}, ${paneDivider.blue()}, 0.5)`;

  const content = `exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: '${colors.foreground}',
    cursorAccentColor: '${colors.background}',
    foregroundColor: '${colors.foreground}',
    backgroundColor: '${colors.background}',
    selectionColor: '${transparentSelection}',
    borderColor: '${colors.background}',
    colors: {
      black: '${colors.black}',
      red: '${colors.red}',
      green: '${colors.green}',
      yellow: '${colors.yellow}',
      blue: '${colors.blue}',
      magenta: '${colors.magenta}',
      cyan: '${colors.cyan}',
      white: '${colors.white}',
      lightBlack: '${colors.gray}',
      lightRed: '${colors.lightRed}',
      lightGreen: '${colors.lightGreen}',
      lightYellow: '${colors.lightYellow}',
      lightBlue: '${colors.lightBlue}',
      lightMagenta: '${colors.pink}',
      lightCyan: '${colors.lightCyan}',
      lightWhite: '${colors.lightWhite}'
    },
    css: \`
      \${config.css || ''}
      .tab_tab {
        border-bottom-color: ${transparentSelection} !important;
        border-bottom-width: 2px;
      }

      .tab_tab:not(.tab_active) {
        opacity: 0.6;
      }

      .tab_tab.tab_active {
        border-bottom-color: ${colors.selection} !important;
      }

      .splitpane_divider {
        background-color: ${transparentPaneDivider} !important;
      }

      .splitpane_pane > .term_fit:not(.term_active) {
        opacity: 0.7;
      }
    \`
  });
}
`;

  return {
    fileName: `index.js`,
    content
  };
}
