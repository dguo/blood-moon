import {ColorScheme, TemplateOutput} from '../../types';

export default function generate(
    name: string,
    colors: ColorScheme
): TemplateOutput {
    const ansi = [
        colors.gnomeTerminalBlack,
        colors.gnomeTerminalRed,
        colors.gnomeTerminalGreen,
        colors.gnomeTerminalYellow,
        colors.gnomeTerminalBlue,
        colors.gnomeTerminalMagenta,
        colors.gnomeTerminalCyan,
        colors.gnomeTerminalWhite,
        colors.gnomeTerminalBrightBlack,
        colors.gnomeTerminalBrightRed,
        colors.gnomeTerminalBrightGreen,
        colors.gnomeTerminalBrightYellow,
        colors.gnomeTerminalBrightBlue,
        colors.gnomeTerminalBrightMagenta,
        colors.gnomeTerminalBrightCyan,
        colors.gnomeTerminalBrightWhite
    ];

    const palette = ansi.map(color => `'${color}'`).join(', ');

    // See https://unix.stackexchange.com/a/133920/280976

    const content = `#!/usr/bin/env bash

GNOME_PROFILE=/org/gnome/terminal/legacy/profiles:/:$PROFILE_ID

dconf write $GNOME_PROFILE/use-theme-colors "false"
dconf write $GNOME_PROFILE/background-color "'${
        colors.gnomeTerminalBackground
    }'"
dconf write $GNOME_PROFILE/foreground-color "'${
        colors.gnomeTerminalForeground
    }'"
dconf write $GNOME_PROFILE/bold-color-same-as-fg "false"
dconf write $GNOME_PROFILE/bold-color "'${colors.gnomeTerminalBoldForeground}'"
dconf write $GNOME_PROFILE/cursor-colors-set "true"
dconf write $GNOME_PROFILE/cursor-background-color "'${
        colors.gnomeTerminalCursor
    }'"
dconf write $GNOME_PROFILE/cursor-foreground-color "'${
        colors.gnomeTerminalCursorText
    }'"
dconf write $GNOME_PROFILE/highlight-colors-set "true"
dconf write $GNOME_PROFILE/highlight-background-color "'${
        colors.gnomeTerminalSelection
    }'"
dconf write $GNOME_PROFILE/highlight-foreground-color "'${
        colors.gnomeTerminalSelectionText
    }'"
dconf write $GNOME_PROFILE/palette "[${palette}]"
`;

    return {
        fileName: `${name}.sh`,
        content
    };
}
