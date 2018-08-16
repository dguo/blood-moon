export interface TemplateOutput {
    fileName: string;
    content: string;
}

export interface ColorScheme {
    // ANSI colors
    // https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
    brightBlack: string;
    brightRed: string;
    brightGreen: string;
    brightYellow: string;
    brightBlue: string;
    brightMagenta: string;
    brightCyan: string;
    brightWhite: string;

    // other colors
    brown: string;
    darkRed: string;
    gray: string;
    orange: string;
    pink: string;

    // UI elements
    background: string;
    foreground: string;
    selection: string;
    selectionText: string;
    link: string;
    ruler: string;

    // syntax
    comment: string;

    // Alacritty
    alacrittyBackground: string;
    alacrittyForeground: string;
    alacrittyBlack: string;
    alacrittyRed: string;
    alacrittyGreen: string;
    alacrittyYellow: string;
    alacrittyBlue: string;
    alacrittyMagenta: string;
    alacrittyCyan: string;
    alacrittyWhite: string;
    alacrittyBrightBlack: string;
    alacrittyBrightRed: string;
    alacrittyBrightGreen: string;
    alacrittyBrightYellow: string;
    alacrittyBrightBlue: string;
    alacrittyBrightMagenta: string;
    alacrittyBrightCyan: string;
    alacrittyBrightWhite: string;
}

export type BaseColorScheme = {[P in keyof ColorScheme]?: ColorScheme[P]};

export interface Template {
    name: string;
    colors: BaseColorScheme;
}
