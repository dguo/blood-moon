import {titleCase} from 'change-case';

import {ColorScheme, TemplateOutput} from '../../types';

export default function generate(
    name: string,
    colors: ColorScheme
): TemplateOutput {
    const ansi = [
        colors.xresourcesBlack,
        colors.xresourcesRed,
        colors.xresourcesGreen,
        colors.xresourcesYellow,
        colors.xresourcesBlue,
        colors.xresourcesMagenta,
        colors.xresourcesCyan,
        colors.xresourcesWhite,
        colors.xresourcesBrightBlack,
        colors.xresourcesBrightRed,
        colors.xresourcesBrightGreen,
        colors.xresourcesBrightYellow,
        colors.xresourcesBrightBlue,
        colors.xresourcesBrightMagenta,
        colors.xresourcesBrightCyan,
        colors.xresourcesBrightWhite
    ];

    const palette = ansi
        .map((color, index) => {
            return `*.color${index}: ${color}`;
        })
        .join('\n');

    const content = `! ${titleCase(name)}
*.background: ${colors.xresourcesBackground}
*.foreground: ${colors.xresourcesForeground}
${palette}
`;

    return {
        fileName: `.Xresources`,
        content
    };
}
