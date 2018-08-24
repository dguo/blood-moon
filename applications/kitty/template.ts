import {ColorScheme, TemplateOutput} from '../../types';

export default function generate(
    name: string,
    colors: ColorScheme
): TemplateOutput {
    const ansi = [
        colors.kittyBlack,
        colors.kittyRed,
        colors.kittyGreen,
        colors.kittyYellow,
        colors.kittyBlue,
        colors.kittyMagenta,
        colors.kittyCyan,
        colors.kittyWhite,
        colors.kittyBrightBlack,
        colors.kittyBrightRed,
        colors.kittyBrightGreen,
        colors.kittyBrightYellow,
        colors.kittyBrightBlue,
        colors.kittyBrightMagenta,
        colors.kittyBrightCyan,
        colors.kittyBrightWhite
    ];

    const palette = ansi
        .map((color, index) => {
            return `color${index} ${color}`;
        })
        .join('\n');

    const content = `${palette}
cursor ${colors.kittyCursor}
url_color ${colors.kittyLink}
active_border_color ${colors.kittyActiveBorder}
inactive_border_color ${colors.kittyInactiveBorder}
bell_border_color ${colors.kittyBellBorder}
active_tab_foreground ${colors.kittyActiveTabForeground}
active_tab_background ${colors.kittyActiveTabBackground}
inactive_tab_foreground ${colors.kittyInactiveTabForeground}
inactive_tab_background ${colors.kittyInactiveTabBackground}
foreground ${colors.kittyForeground}
background ${colors.kittyBackground}
selection_foreground ${colors.kittySelectionText}
selection_background ${colors.kittySelection}
`;

    return {
        fileName: `${name}.conf`,
        content
    };
}
