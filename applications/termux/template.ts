import {ColorScheme, TemplateOutput} from '../../types';

export function generate(name: string, colors: ColorScheme): TemplateOutput {
  const ansi = [
    colors.black,
    colors.red,
    colors.green,
    colors.yellow,
    colors.blue,
    colors.magenta,
    colors.cyan,
    colors.white,
    colors.gray,
    colors.lightRed,
    colors.lightGreen,
    colors.lightYellow,
    colors.lightBlue,
    colors.pink,
    colors.lightCyan,
    colors.lightWhite
  ];

  const palette = ansi
    .map((color, index) => {
      return `color${index}=${color}`;
    })
    .join('\n');

  const content = `# https://github.com/dguo/blood-moon
background=${colors.background}
foreground=${colors.foreground}
${palette}`;

  return {
    fileName: `${name}.properties`,
    content
  };
}
