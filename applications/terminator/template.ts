import * as Color from 'color';

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

  const content = `background_color = "${colors.background}"
foreground_color = "${colors.foreground}"
palette = "${ansi.join(':')}"`;

  return {
    fileName: `${name}.config`,
    content
  };
}
