import {ColorScheme, TemplateOutput} from '../../types';

export default function generate(
    name: string,
    colors: ColorScheme
): TemplateOutput {
    const ansi = [
        colors.terminatorBlack,
        colors.terminatorRed,
        colors.terminatorGreen,
        colors.terminatorYellow,
        colors.terminatorBlue,
        colors.terminatorMagenta,
        colors.terminatorCyan,
        colors.terminatorWhite,
        colors.terminatorBrightBlack,
        colors.terminatorBrightRed,
        colors.terminatorBrightGreen,
        colors.terminatorBrightYellow,
        colors.terminatorBrightBlue,
        colors.terminatorBrightMagenta,
        colors.terminatorBrightCyan,
        colors.terminatorBrightWhite
    ];

    const content = `background_color = "${colors.terminatorBackground}"
foreground_color = "${colors.terminatorForeground}"
palette = "${ansi.join(':')}"`;

    return {
        fileName: `${name}.config`,
        content
    };
}
