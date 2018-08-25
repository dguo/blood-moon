import {titleCase} from 'change-case';

import {ColorHex, ColorScheme, TemplateOutput} from '../../types';

// ConEmu expects hex values in a right to left format:
function conemuHex(hex: ColorHex): string {
    const red = hex.substring(1, 3);
    const green = hex.substring(3, 5);
    const blue = hex.substring(5, 7);
    return `00${blue}${green}${red}`;
}

function conemuIndex(index: number): string {
    if (index < 0 || index > 16) {
        throw new RangeError(
            'ConEmu foreground or background index must be between 0 and 16 (inclusive).'
        );
    }

    return index.toString(16).padStart(2, '0');
}

export default function generate(
    name: string,
    colors: ColorScheme
): TemplateOutput {
    const ansi = [
        colors.conemuBlack,
        colors.conemuRed,
        colors.conemuGreen,
        colors.conemuYellow,
        colors.conemuBlue,
        colors.conemuMagenta,
        colors.conemuCyan,
        colors.conemuWhite,
        colors.conemuBrightBlack,
        colors.conemuBrightRed,
        colors.conemuBrightGreen,
        colors.conemuBrightYellow,
        colors.conemuBrightBlue,
        colors.conemuBrightMagenta,
        colors.conemuBrightCyan,
        colors.conemuBrightWhite
    ];

    const palette = ansi
        .map((color, index) => {
            return `<value name="ColorTable${
                index < 10 ? '0' : ''
            }${index}" type="dword" data="${conemuHex(color)}"/>`;
        })
        .join('\n');

    const content = `<value name="Name" type="string" data="${titleCase(
        name
    )}"/>
<value name="TextColorIdx" type="hex" data="${conemuIndex(
        colors.conemuForeground
    )}"/>
<value name="BackColorIdx" type="hex" data="${conemuIndex(
        colors.conemuBackground
    )}"/>
<value name="PopTextColorIdx" type="hex" data="${conemuIndex(
        colors.conemuPopupForeground
    )}"/>
<value name="PopBackColorIdx" type="hex" data="${conemuIndex(
        colors.conemuPopupBackground
    )}"/>
${palette}
`;

    return {
        fileName: `${name}.xml`,
        content
    };
}
