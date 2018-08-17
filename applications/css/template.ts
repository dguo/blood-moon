import {ColorScheme, TemplateOutput} from '../../types';

export default function generate(
    name: string,
    colors: ColorScheme
): TemplateOutput {
    const content = `body {
    color: ${colors.cssForeground};
    background-color: ${colors.cssBackground};
}

h1 {
    color: ${colors.cssH1}
}

h2 {
    color: ${colors.cssH2}
}

i {
    color: ${colors.cssI}
}

a, a:hover {
    color: ${colors.cssA}
}
`;

    return {
        fileName: `${name}.css`,
        content
    };
}
