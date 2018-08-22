export interface TemplateOutput {
    fileName: string;
    content: string;
}

type ColorHex = string;
export type VimColor = [ColorHex | null, ColorHex] | [ColorHex];

export interface ColorScheme {
    // ANSI colors
    // https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
    black: ColorHex;
    red: ColorHex;
    green: ColorHex;
    yellow: ColorHex;
    blue: ColorHex;
    magenta: ColorHex;
    cyan: ColorHex;
    white: ColorHex;
    brightBlack: ColorHex;
    brightRed: ColorHex;
    brightGreen: ColorHex;
    brightYellow: ColorHex;
    brightBlue: ColorHex;
    brightMagenta: ColorHex;
    brightCyan: ColorHex;
    brightWhite: ColorHex;

    // other colors
    brown: ColorHex;
    darkRed: ColorHex;
    gray: ColorHex;
    orange: ColorHex;
    pink: ColorHex;

    // UI elements
    background: ColorHex;
    bold: ColorHex;
    border: ColorHex;
    cursor: ColorHex;
    foreground: ColorHex;
    selection: ColorHex;
    selectionText: ColorHex;
    ruler: ColorHex;

    // syntax
    comment: ColorHex;
    link: ColorHex;

    // Alacritty
    alacrittyBackground: ColorHex;
    alacrittyForeground: ColorHex;
    alacrittyBlack: ColorHex;
    alacrittyRed: ColorHex;
    alacrittyGreen: ColorHex;
    alacrittyYellow: ColorHex;
    alacrittyBlue: ColorHex;
    alacrittyMagenta: ColorHex;
    alacrittyCyan: ColorHex;
    alacrittyWhite: ColorHex;
    alacrittyBrightBlack: ColorHex;
    alacrittyBrightRed: ColorHex;
    alacrittyBrightGreen: ColorHex;
    alacrittyBrightYellow: ColorHex;
    alacrittyBrightBlue: ColorHex;
    alacrittyBrightMagenta: ColorHex;
    alacrittyBrightCyan: ColorHex;
    alacrittyBrightWhite: ColorHex;

    // CSS
    cssForeground: ColorHex;
    cssBackground: ColorHex;
    cssH1: ColorHex;
    cssH2: ColorHex;
    cssI: ColorHex;
    cssA: ColorHex;

    // Hyper
    hyperCursor: ColorHex;
    hyperCursorAccent: ColorHex;
    hyperForeground: ColorHex;
    hyperBackground: ColorHex;
    hyperSelection: ColorHex;
    hyperBorder: ColorHex;
    hyperBlack: ColorHex;
    hyperRed: ColorHex;
    hyperGreen: ColorHex;
    hyperYellow: ColorHex;
    hyperBlue: ColorHex;
    hyperMagenta: ColorHex;
    hyperCyan: ColorHex;
    hyperWhite: ColorHex;
    hyperLightBlack: ColorHex;
    hyperLightRed: ColorHex;
    hyperLightGreen: ColorHex;
    hyperLightYellow: ColorHex;
    hyperLightBlue: ColorHex;
    hyperLightMagenta: ColorHex;
    hyperLightCyan: ColorHex;
    hyperLightWhite: ColorHex;
    hyperCSS: ColorHex;

    // iTerm
    iTermBlack: ColorHex;
    iTermRed: ColorHex;
    iTermGreen: ColorHex;
    iTermYellow: ColorHex;
    iTermBlue: ColorHex;
    iTermMagenta: ColorHex;
    iTermCyan: ColorHex;
    iTermWhite: ColorHex;
    iTermBrightBlack: ColorHex;
    iTermBrightRed: ColorHex;
    iTermBrightGreen: ColorHex;
    iTermBrightYellow: ColorHex;
    iTermBrightBlue: ColorHex;
    iTermBrightMagenta: ColorHex;
    iTermBrightCyan: ColorHex;
    iTermBrightWhite: ColorHex;
    iTermBackground: ColorHex;
    iTermBadge: ColorHex;
    iTermBold: ColorHex;
    iTermCursor: ColorHex;
    iTermForeground: ColorHex;
    iTermLink: ColorHex;
    iTermSelectionText: ColorHex;
    iTermSelection: ColorHex;

    // Slack
    slackColumnBackground: ColorHex;
    slackMenuBackgroundHover: ColorHex;
    slackActiveItem: ColorHex;
    slackActiveItemText: ColorHex;
    slackHoverItem: ColorHex;
    slackText: ColorHex;
    slackActivePresence: ColorHex;
    slackMentionBadge: ColorHex;

    // Terminal
    terminalBlack: ColorHex;
    terminalRed: ColorHex;
    terminalGreen: ColorHex;
    terminalYellow: ColorHex;
    terminalBlue: ColorHex;
    terminalMagenta: ColorHex;
    terminalCyan: ColorHex;
    terminalWhite: ColorHex;
    terminalBrightBlack: ColorHex;
    terminalBrightRed: ColorHex;
    terminalBrightGreen: ColorHex;
    terminalBrightYellow: ColorHex;
    terminalBrightBlue: ColorHex;
    terminalBrightMagenta: ColorHex;
    terminalBrightCyan: ColorHex;
    terminalBrightWhite: ColorHex;
    terminalBackground: ColorHex;
    terminalBold: ColorHex;
    terminalCursor: ColorHex;
    terminalText: ColorHex;
    terminalSelection: ColorHex;

    // Terminator
    terminatorBackground: ColorHex;
    terminatorForeground: ColorHex;
    terminatorBlack: ColorHex;
    terminatorRed: ColorHex;
    terminatorGreen: ColorHex;
    terminatorYellow: ColorHex;
    terminatorBlue: ColorHex;
    terminatorMagenta: ColorHex;
    terminatorCyan: ColorHex;
    terminatorWhite: ColorHex;
    terminatorBrightBlack: ColorHex;
    terminatorBrightRed: ColorHex;
    terminatorBrightGreen: ColorHex;
    terminatorBrightYellow: ColorHex;
    terminatorBrightBlue: ColorHex;
    terminatorBrightMagenta: ColorHex;
    terminatorBrightCyan: ColorHex;
    terminatorBrightWhite: ColorHex;

    // Termux
    termuxBackground: ColorHex;
    termuxForeground: ColorHex;
    termuxBlack: ColorHex;
    termuxRed: ColorHex;
    termuxGreen: ColorHex;
    termuxYellow: ColorHex;
    termuxBlue: ColorHex;
    termuxMagenta: ColorHex;
    termuxCyan: ColorHex;
    termuxWhite: ColorHex;
    termuxBrightBlack: ColorHex;
    termuxBrightRed: ColorHex;
    termuxBrightGreen: ColorHex;
    termuxBrightYellow: ColorHex;
    termuxBrightBlue: ColorHex;
    termuxBrightMagenta: ColorHex;
    termuxBrightCyan: ColorHex;
    termuxBrightWhite: ColorHex;

    // Themer
    themerAccent0: ColorHex;
    themerAccent1: ColorHex;
    themerAccent2: ColorHex;
    themerAccent3: ColorHex;
    themerAccent4: ColorHex;
    themerAccent5: ColorHex;
    themerAccent6: ColorHex;
    themerAccent7: ColorHex;
    themerShade0: ColorHex;
    themerShade1?: ColorHex;
    themerShade2?: ColorHex;
    themerShade3?: ColorHex;
    themerShade4?: ColorHex;
    themerShade5?: ColorHex;
    themerShade6?: ColorHex;
    themerShade7: ColorHex;

    // Vim
    vimBackground: 'light' | 'dark';
    vimNormal: VimColor;
    vimIncSearch: VimColor;
    vimMatchParen: VimColor;
    vimSearch: VimColor;
    vimVisual: VimColor;
    vimComment: VimColor;
    vimConstant: VimColor;
    vimString: VimColor;
    vimCharacter: VimColor;
    vimError: VimColor;
    vimIdentifier: VimColor;
    vimStatement: VimColor;
    vimNoise: VimColor;
    vimPreProc: VimColor;
    vimType: VimColor;
    vimSpecial: VimColor;
    vimTodo: VimColor;
    vimLineNr: VimColor;
    vimCursorLineNr: VimColor;
    vimColorColumn: VimColor;
    vimEndOfBuffer: VimColor;
    vimFolded: VimColor;
    vimVertSplit: VimColor;
    // Status line
    vimStatusLine: VimColor;
    vimStatusLineNC: VimColor;
    vimWildMenu: VimColor;
    // Diffs
    vimDiffChange: VimColor;
    vimDiffText: VimColor;
    vimDiffAdd: VimColor;
    vimDiffDelete: VimColor;
    // Popup menu
    vimPmenu: VimColor;
    vimPmenuSel: VimColor;
    vimPmenuSbar: VimColor;
    vimPmenuThumb: VimColor;
    // JavaScript
    vimJsObjectProp: VimColor;
    vimJsObjectKey: VimColor;
    vimJsObject: VimColor;
    vimJsObjectBraces: VimColor;
    vimJsBrackets: VimColor;
    vimJsGlobalObjects: VimColor;
    vimJsBuiltins: VimColor;
    vimJsGlobalNodeObjects: VimColor;
    vimJsFuncCall: VimColor;
    vimJsParens: VimColor;
    vimJsBlockLabel: VimColor;
    vimJsVariableDef: VimColor;
    vimJsFuncArgs: VimColor;
    // JSON
    vimJsonKeyword: VimColor;
}

export type BaseColorScheme = {[P in keyof ColorScheme]?: ColorScheme[P]};

export interface Meta {
    description?: string;
    homepage?: string;
    name: string;
    maintainer?: string;
}

export interface Theme {
    colors: BaseColorScheme;
    meta: Meta;
}
