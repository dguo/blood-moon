import Color from 'color';

import {ColorScheme, TemplateOutput} from '../../types';

export default function generate(colors: ColorScheme): TemplateOutput {
    const mode =
        Color(colors.themerShade0).luminosity() >
        Color(colors.themerShade7).luminosity()
            ? 'light'
            : 'dark';

    let shades = '';
    for (let shade = 1; shade < 7; shade++) {
        const color = (colors as any)[`themerShade${shade}`];
        if (color) {
            shades += `\n    shade${shade}: '${color}',`;
        }
    }

    const content = `exports.colors = {
  ${mode}: {
    accent0: '${colors.themerAccent0}',
    accent1: '${colors.themerAccent1}',
    accent2: '${colors.themerAccent2}',
    accent3: '${colors.themerAccent3}',
    accent4: '${colors.themerAccent4}',
    accent5: '${colors.themerAccent5}',
    accent6: '${colors.themerAccent6}',
    accent7: '${colors.themerAccent7}',
    shade0: '${colors.themerShade0}',${shades}
    shade7: '${colors.themerShade7}'
  }
};
`;

    return {
        fileName: `index.js`,
        content
    };
}
