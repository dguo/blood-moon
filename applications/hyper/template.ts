import Color from 'color';

import {ColorScheme, TemplateOutput} from '../../types';

export default function generate(colors: ColorScheme): TemplateOutput {
    const content = `exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: '${colors.hyperForeground}',
    cursorAccentColor: '${colors.hyperBackground}',
    foregroundColor: '${colors.hyperForeground}',
    backgroundColor: '${colors.hyperBackground}',
    selectionColor: '${colors.hyperSelection}',
    borderColor: '${colors.hyperBackground}',
    colors: {
      black: '${colors.hyperBlack}',
      red: '${colors.hyperRed}',
      green: '${colors.hyperGreen}',
      yellow: '${colors.hyperYellow}',
      blue: '${colors.hyperBlue}',
      magenta: '${colors.hyperMagenta}',
      cyan: '${colors.hyperCyan}',
      white: '${colors.hyperWhite}',
      lightBlack: '${colors.hyperLightBlack}',
      lightRed: '${colors.hyperLightRed}',
      lightGreen: '${colors.hyperLightGreen}',
      lightYellow: '${colors.hyperLightYellow}',
      lightBlue: '${colors.hyperLightBlue}',
      lightMagenta: '${colors.hyperLightMagenta}',
      lightCyan: '${colors.hyperLightCyan}',
      lightWhite: '${colors.hyperLightWhite}'
    },
    css: \`
      \${config.css || ''}
      ${colors.hyperCSS || ''}
    \`
  });
}
`;

    return {
        fileName: `index.js`,
        content
    };
}
