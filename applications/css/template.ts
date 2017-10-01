import * as Color from 'color';

import {ColorScheme, TemplateOutput} from '../../types';

export function generate(name: string, colors: ColorScheme): TemplateOutput {
  const content = `body {
    color: ${colors.foreground};
    background-color: ${colors.background};
}

h1 {
    color: ${colors.red}
}

h2 {
    color: ${colors.green}
}

i {
    color: ${colors.red}
}

a, a:hover {
    color: ${colors.link}
}
`;

  return {
    fileName: `${name}.css`,
    content
  };
}
