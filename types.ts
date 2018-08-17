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
    bold: string;
    border: string;
    cursor: string;
    foreground: string;
    selection: string;
    selectionText: string;
    ruler: string;

    // syntax
    comment: string;
    link: string;

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

    // Hyper
    hyperCursor: string;
    hyperCursorAccent: string;
    hyperForeground: string;
    hyperBackground: string;
    hyperSelection: string;
    hyperBorder: string;
    hyperBlack: string;
    hyperRed: string;
    hyperGreen: string;
    hyperYellow: string;
    hyperBlue: string;
    hyperMagenta: string;
    hyperCyan: string;
    hyperWhite: string;
    hyperLightBlack: string;
    hyperLightRed: string;
    hyperLightGreen: string;
    hyperLightYellow: string;
    hyperLightBlue: string;
    hyperLightMagenta: string;
    hyperLightCyan: string;
    hyperLightWhite: string;
    hyperCSS: string;

    // iTerm
    iTermBlack: string;
    iTermRed: string;
    iTermGreen: string;
    iTermYellow: string;
    iTermBlue: string;
    iTermMagenta: string;
    iTermCyan: string;
    iTermWhite: string;
    iTermBrightBlack: string;
    iTermBrightRed: string;
    iTermBrightGreen: string;
    iTermBrightYellow: string;
    iTermBrightBlue: string;
    iTermBrightMagenta: string;
    iTermBrightCyan: string;
    iTermBrightWhite: string;
    iTermBackground: string;
    iTermBadge: string;
    iTermBold: string;
    iTermCursor: string;
    iTermForeground: string;
    iTermLink: string;
    iTermSelectionText: string;
    iTermSelection: string;

    // Slack
    slackColumnBackground: string;
    slackMenuBackgroundHover: string;
    slackActiveItem: string;
    slackActiveItemText: string;
    slackHoverItem: string;
    slackText: string;
    slackActivePresence: string;
    slackMentionBadge: string;

    // Terminal
    terminalBlack: string;
    terminalRed: string;
    terminalGreen: string;
    terminalYellow: string;
    terminalBlue: string;
    terminalMagenta: string;
    terminalCyan: string;
    terminalWhite: string;
    terminalBrightBlack: string;
    terminalBrightRed: string;
    terminalBrightGreen: string;
    terminalBrightYellow: string;
    terminalBrightBlue: string;
    terminalBrightMagenta: string;
    terminalBrightCyan: string;
    terminalBrightWhite: string;
    terminalBackground: string;
    terminalBold: string;
    terminalCursor: string;
    terminalText: string;
    terminalSelection: string;

    // Terminator
    terminatorBackground: string;
    terminatorForeground: string;
    terminatorBlack: string;
    terminatorRed: string;
    terminatorGreen: string;
    terminatorYellow: string;
    terminatorBlue: string;
    terminatorMagenta: string;
    terminatorCyan: string;
    terminatorWhite: string;
    terminatorBrightBlack: string;
    terminatorBrightRed: string;
    terminatorBrightGreen: string;
    terminatorBrightYellow: string;
    terminatorBrightBlue: string;
    terminatorBrightMagenta: string;
    terminatorBrightCyan: string;
    terminatorBrightWhite: string;

    // Termux
    termuxBackground: string;
    termuxForeground: string;
    termuxBlack: string;
    termuxRed: string;
    termuxGreen: string;
    termuxYellow: string;
    termuxBlue: string;
    termuxMagenta: string;
    termuxCyan: string;
    termuxWhite: string;
    termuxBrightBlack: string;
    termuxBrightRed: string;
    termuxBrightGreen: string;
    termuxBrightYellow: string;
    termuxBrightBlue: string;
    termuxBrightMagenta: string;
    termuxBrightCyan: string;
    termuxBrightWhite: string;

    // Themer
    themerAccent0: string;
    themerAccent1: string;
    themerAccent2: string;
    themerAccent3: string;
    themerAccent4: string;
    themerAccent5: string;
    themerAccent6: string;
    themerAccent7: string;
    themerShade0: string;
    themerShade1?: string;
    themerShade2?: string;
    themerShade3?: string;
    themerShade4?: string;
    themerShade5?: string;
    themerShade6?: string;
    themerShade7: string;
}

export type BaseColorScheme = {[P in keyof ColorScheme]?: ColorScheme[P]};

export interface Template {
    name: string;
    colors: BaseColorScheme;
}
