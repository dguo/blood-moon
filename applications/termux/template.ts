import {ColorScheme, TemplateOutput} from '../../types';

export default function generate(
    name: string,
    colors: ColorScheme
): TemplateOutput {
    const ansi = [
        colors.termuxBlack,
        colors.termuxRed,
        colors.termuxGreen,
        colors.termuxYellow,
        colors.termuxBlue,
        colors.termuxMagenta,
        colors.termuxCyan,
        colors.termuxWhite,
        colors.termuxBrightBlack,
        colors.termuxBrightRed,
        colors.termuxBrightGreen,
        colors.termuxBrightYellow,
        colors.termuxBrightBlue,
        colors.termuxBrightMagenta,
        colors.termuxBrightCyan,
        colors.termuxBrightWhite
    ];

    const palette = ansi
        .map((color, index) => {
            return `color${index}=${color}`;
        })
        .join('\n');

    const content = `# https://github.com/dguo/blood-moon
background=${colors.termuxBackground}
foreground=${colors.termuxForeground}
${palette}`;

    return {
        fileName: `${name}.properties`,
        content
    };
}
