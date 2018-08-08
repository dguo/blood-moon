export interface TemplateOutput {
    fileName: string;
    content: string;
}

export interface ColorScheme {
    black: string;
    gray: string;
    white: string;
    lightWhite: string;
    green: string;
    lightGreen: string;
    cyan: string;
    lightCyan: string;
    blue: string;
    lightBlue: string;
    magenta: string;
    pink: string;
    brown: string;
    red: string;
    darkRed: string;
    lightRed: string;
    orange: string;
    yellow: string;
    lightYellow: string;
    background: string;
    foreground: string;
    selection: string;
    selectionText: string;
    link: string;
    ruler: string;
    comment: string;
}

export interface Template {
    name: string;
    colors: ColorScheme;
}
