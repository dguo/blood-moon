import {ColorScheme, TemplateOutput} from '../../types';

export function generate(name: string, colors: ColorScheme): TemplateOutput {
  /* Order is:
     Column BG,
     Menu BG Hover,
     Active Item,
     Active Item Text,
     Hover Item,
     Text Color,
     Active Presence,
     Mention Badge
   */
  const theme = [
    colors.background,
    colors.lightWhite,
    colors.selection,
    colors.selectionText,
    colors.lightWhite,
    colors.foreground,
    colors.green,
    colors.yellow
  ];

  return {
    fileName: `${name}-slack.txt`,
    content: theme.join(',')
  };
}
