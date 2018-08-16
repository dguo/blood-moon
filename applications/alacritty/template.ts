import {titleCase} from 'change-case';

import {ColorScheme, TemplateOutput} from '../../types';

export default function generate(
    name: string,
    colors: ColorScheme
): TemplateOutput {
    const content = `# Colors (${titleCase(name)})
colors:
  # Default colors
  primary:
    background: '0x${colors.alacrittyBackground.substring(1)}'
    foreground: '0x${colors.alacrittyForeground.substring(1)}'

  # Normal colors
  normal:
    black:   '0x${colors.alacrittyBlack.substring(1)}'
    red:     '0x${colors.alacrittyRed.substring(1)}'
    green:   '0x${colors.alacrittyGreen.substring(1)}'
    yellow:  '0x${colors.alacrittyYellow.substring(1)}'
    blue:    '0x${colors.alacrittyBlue.substring(1)}'
    magenta: '0x${colors.alacrittyMagenta.substring(1)}'
    cyan:    '0x${colors.alacrittyCyan.substring(1)}'
    white:   '0x${colors.alacrittyWhite.substring(1)}'

  # Bright colors
  bright:
    black:   '0x${colors.alacrittyBrightBlack.substring(1)}'
    red:     '0x${colors.alacrittyBrightRed.substring(1)}'
    green:   '0x${colors.alacrittyBrightGreen.substring(1)}'
    yellow:  '0x${colors.alacrittyBrightYellow.substring(1)}'
    blue:    '0x${colors.alacrittyBrightBlue.substring(1)}'
    magenta: '0x${colors.alacrittyBrightMagenta.substring(1)}'
    cyan:    '0x${colors.alacrittyBrightCyan.substring(1)}'
    white:   '0x${colors.alacrittyBrightWhite.substring(1)}'
`;

    return {
        fileName: `${name}.yml`,
        content
    };
}
