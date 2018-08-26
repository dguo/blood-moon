import {titleCase} from 'change-case';

import {ColorHex, ColorScheme, TemplateOutput} from '../../types';

// For some reason, Guake expects hex values with duplicated RGB elements.
// So #1A2B3C should be #1A1A2B2B3C3C
// ¯\_(ツ)_/¯
function guakeHex(hex: ColorHex): string {
    const red = hex.substring(1, 3);
    const green = hex.substring(3, 5);
    const blue = hex.substring(5, 7);
    return `#${red.repeat(2)}${green.repeat(2)}${blue.repeat(2)}`;
}

export default function generate(
    name: string,
    colors: ColorScheme
): TemplateOutput {
    const ansi = [
        colors.guakeBlack,
        colors.guakeRed,
        colors.guakeGreen,
        colors.guakeYellow,
        colors.guakeBlue,
        colors.guakeMagenta,
        colors.guakeCyan,
        colors.guakeWhite,
        colors.guakeBrightBlack,
        colors.guakeBrightRed,
        colors.guakeBrightGreen,
        colors.guakeBrightYellow,
        colors.guakeBrightBlue,
        colors.guakeBrightMagenta,
        colors.guakeBrightCyan,
        colors.guakeBrightWhite,
        colors.guakeForeground,
        colors.guakeBackground
    ];

    const palette = ansi.map(guakeHex).join(':');

    const content = `#!/usr/bin/env bash

# For Guake versions >= 3.0.0
GUAKE_FONT=/apps/guake/style/font
dconf write $GUAKE_FONT/palette "'${palette}'"
dconf write $GUAKE_FONT/palette-name "'${titleCase(name)}'"

# For Guake versions < 3.0.0
# gconftool-2 -s -t string /apps/guake/style/font/palette_name "${titleCase(
        name
    )}"
# gconftool-2 -s -t string /apps/guake/style/font/palette "${palette}"
# gconftool-2 -s -t string /apps/guake/style/font/color "${guakeHex(
        colors.guakeForeground
    )}"
# gconftool-2 -s -t string /apps/guake/style/background/color "${guakeHex(
        colors.guakeBackground
    )}"
`;

    return {
        fileName: `${name}.sh`,
        content
    };
}
