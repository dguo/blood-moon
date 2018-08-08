import {ColorScheme, TemplateOutput} from '../../types';

export function generate(name: string, colors: ColorScheme): TemplateOutput {
    const content = `# Colors (Blood Moon)
colors:
  # Default colors
  primary:
    background: '0x${colors.background.substring(1)}'
    foreground: '0x${colors.foreground.substring(1)}'

  # Normal colors
  normal:
    black:   '0x${colors.black.substring(1)}'
    red:     '0x${colors.red.substring(1)}'
    green:   '0x${colors.green.substring(1)}'
    yellow:  '0x${colors.yellow.substring(1)}'
    blue:    '0x${colors.blue.substring(1)}'
    magenta: '0x${colors.magenta.substring(1)}'
    cyan:    '0x${colors.cyan.substring(1)}'
    white:   '0x${colors.white.substring(1)}'

  # Bright colors
  bright:
    black:   '0x${colors.gray.substring(1)}'
    red:     '0x${colors.lightRed.substring(1)}'
    green:   '0x${colors.lightGreen.substring(1)}'
    yellow:  '0x${colors.lightYellow.substring(1)}'
    blue:    '0x${colors.lightBlue.substring(1)}'
    magenta: '0x${colors.pink.substring(1)}'
    cyan:    '0x${colors.lightCyan.substring(1)}'
    white:   '0x${colors.lightWhite.substring(1)}'
`;

    return {
        fileName: `${name}.yml`,
        content
    };
}
