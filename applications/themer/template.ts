import {ColorScheme, TemplateOutput} from '../../types';

export function generate(name: string, colors: ColorScheme): TemplateOutput {
  const content = `exports.colors = {
  dark: {
    accent0: '${colors.red}',
    accent1: '${colors.orange}',
    accent2: '${colors.yellow}',
    accent3: '${colors.green}',
    accent4: '${colors.cyan}',
    accent5: '${colors.blue}',
    accent6: '${colors.magenta}',
    accent7: '${colors.pink}',
    shade0: '${colors.background}',
    shade7: '${colors.foreground}',
  }
};
`

  return {
    fileName: `index.js`,
    content
  };
}
