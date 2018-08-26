export interface TemplateOutput {
    fileName: string;
    content: string;
}

export type ColorHex = string;
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

    // ConEmu
    // https://conemu.github.io/en/SettingsColors.html
    // Note that the extended foreground colors feature was removed as of
    // build 180318.
    // https://github.com/Maximus5/ConEmu/issues/1595#issuecomment-397274625
    conemuBlack: ColorHex;
    conemuRed: ColorHex;
    conemuGreen: ColorHex;
    conemuYellow: ColorHex;
    conemuBlue: ColorHex;
    conemuMagenta: ColorHex;
    conemuCyan: ColorHex;
    conemuWhite: ColorHex;
    conemuBrightBlack: ColorHex;
    conemuBrightRed: ColorHex;
    conemuBrightGreen: ColorHex;
    conemuBrightYellow: ColorHex;
    conemuBrightBlue: ColorHex;
    conemuBrightMagenta: ColorHex;
    conemuBrightCyan: ColorHex;
    conemuBrightWhite: ColorHex;
    // The foreground and background colors cannot be set to arbitrary colors.
    // They have to be one of the ANSI colors, so they take an index between 0
    // and 15 (inclusive). A value of 16 can also be supplied, which means
    // "Auto".
    conemuForeground: number;
    conemuBackground: number;
    conemuPopupForeground: number;
    conemuPopupBackground: number;

    // CSS
    cssForeground: ColorHex;
    cssBackground: ColorHex;
    cssH1: ColorHex;
    cssH2: ColorHex;
    cssI: ColorHex;
    cssA: ColorHex;

    // Firefox
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme
    firefoxAccent: ColorHex;
    firefoxButtonBackgroundActive: ColorHex;
    firefoxButtonBackgroundHover: ColorHex;
    firefoxIcons: ColorHex;
    firefoxIconsAttention: ColorHex;
    firefoxPopup: ColorHex;
    firefoxPopupHighlight: ColorHex;
    firefoxPopupHighlightText: ColorHex;
    firefoxPopupText: ColorHex;
    firefoxTabBackgroundText: ColorHex;
    firefoxTabLine: ColorHex;
    firefoxTabLoading: ColorHex;
    firefoxTabSelected: ColorHex;
    firefoxTabText: ColorHex;
    firefoxToolbar: ColorHex;
    firefoxToolbarField: ColorHex;
    firefoxToolbarFieldBorderFocus: ColorHex;
    firefoxToolbarFieldText: ColorHex;
    firefoxText: ColorHex;

    // GNOME Terminal
    gnomeTerminalBlack: ColorHex;
    gnomeTerminalRed: ColorHex;
    gnomeTerminalGreen: ColorHex;
    gnomeTerminalYellow: ColorHex;
    gnomeTerminalBlue: ColorHex;
    gnomeTerminalMagenta: ColorHex;
    gnomeTerminalCyan: ColorHex;
    gnomeTerminalWhite: ColorHex;
    gnomeTerminalBrightBlack: ColorHex;
    gnomeTerminalBrightRed: ColorHex;
    gnomeTerminalBrightGreen: ColorHex;
    gnomeTerminalBrightYellow: ColorHex;
    gnomeTerminalBrightBlue: ColorHex;
    gnomeTerminalBrightMagenta: ColorHex;
    gnomeTerminalBrightCyan: ColorHex;
    gnomeTerminalBrightWhite: ColorHex;
    gnomeTerminalBackground: ColorHex;
    gnomeTerminalForeground: ColorHex;
    gnomeTerminalBoldForeground: ColorHex;
    gnomeTerminalCursor: ColorHex;
    gnomeTerminalCursorText: ColorHex;
    gnomeTerminalSelection: ColorHex;
    gnomeTerminalSelectionText: ColorHex;

    // Guake
    guakeBlack: ColorHex;
    guakeRed: ColorHex;
    guakeGreen: ColorHex;
    guakeYellow: ColorHex;
    guakeBlue: ColorHex;
    guakeMagenta: ColorHex;
    guakeCyan: ColorHex;
    guakeWhite: ColorHex;
    guakeBrightBlack: ColorHex;
    guakeBrightRed: ColorHex;
    guakeBrightGreen: ColorHex;
    guakeBrightYellow: ColorHex;
    guakeBrightBlue: ColorHex;
    guakeBrightMagenta: ColorHex;
    guakeBrightCyan: ColorHex;
    guakeBrightWhite: ColorHex;
    guakeBackground: ColorHex;
    guakeForeground: ColorHex;

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

    // Kitty
    // https://sw.kovidgoyal.net/kitty/conf.html#color-scheme
    kittyBlack: ColorHex;
    kittyRed: ColorHex;
    kittyGreen: ColorHex;
    kittyYellow: ColorHex;
    kittyBlue: ColorHex;
    kittyMagenta: ColorHex;
    kittyCyan: ColorHex;
    kittyWhite: ColorHex;
    kittyBrightBlack: ColorHex;
    kittyBrightRed: ColorHex;
    kittyBrightGreen: ColorHex;
    kittyBrightYellow: ColorHex;
    kittyBrightBlue: ColorHex;
    kittyBrightMagenta: ColorHex;
    kittyBrightCyan: ColorHex;
    kittyBrightWhite: ColorHex;
    kittyCursor: ColorHex;
    kittyLink: ColorHex;
    kittyActiveBorder: ColorHex;
    kittyInactiveBorder: ColorHex;
    kittyBellBorder: ColorHex;
    kittyActiveTabForeground: ColorHex;
    kittyActiveTabBackground: ColorHex;
    kittyInactiveTabForeground: ColorHex;
    kittyInactiveTabBackground: ColorHex;
    kittyForeground: ColorHex;
    kittyBackground: ColorHex;
    kittySelectionText: ColorHex;
    kittySelection: ColorHex;

    // Konsole
    konsoleBlack: ColorHex;
    konsoleRed: ColorHex;
    konsoleGreen: ColorHex;
    konsoleYellow: ColorHex;
    konsoleBlue: ColorHex;
    konsoleMagenta: ColorHex;
    konsoleCyan: ColorHex;
    konsoleWhite: ColorHex;
    konsoleBrightBlack: ColorHex;
    konsoleBrightRed: ColorHex;
    konsoleBrightGreen: ColorHex;
    konsoleBrightYellow: ColorHex;
    konsoleBrightBlue: ColorHex;
    konsoleBrightMagenta: ColorHex;
    konsoleBrightCyan: ColorHex;
    konsoleBrightWhite: ColorHex;
    konsoleBackground: ColorHex;
    konsoleBoldBackground: ColorHex;
    konsoleForeground: ColorHex;
    konsoleBoldForeground: ColorHex;

    // Mintty
    // https://github.com/mintty/mintty/tree/master/themes
    minttyBlack: ColorHex;
    minttyRed: ColorHex;
    minttyGreen: ColorHex;
    minttyYellow: ColorHex;
    minttyBlue: ColorHex;
    minttyMagenta: ColorHex;
    minttyCyan: ColorHex;
    minttyWhite: ColorHex;
    minttyBrightBlack: ColorHex;
    minttyBrightRed: ColorHex;
    minttyBrightGreen: ColorHex;
    minttyBrightYellow: ColorHex;
    minttyBrightBlue: ColorHex;
    minttyBrightMagenta: ColorHex;
    minttyBrightCyan: ColorHex;
    minttyBrightWhite: ColorHex;
    minttyForeground: ColorHex;
    minttyBackground: ColorHex;
    minttyCursor: ColorHex;

    // Putty
    puttyBlack: ColorHex;
    puttyRed: ColorHex;
    puttyGreen: ColorHex;
    puttyYellow: ColorHex;
    puttyBlue: ColorHex;
    puttyMagenta: ColorHex;
    puttyCyan: ColorHex;
    puttyWhite: ColorHex;
    puttyBrightBlack: ColorHex;
    puttyBrightRed: ColorHex;
    puttyBrightGreen: ColorHex;
    puttyBrightYellow: ColorHex;
    puttyBrightBlue: ColorHex;
    puttyBrightMagenta: ColorHex;
    puttyBrightCyan: ColorHex;
    puttyBrightWhite: ColorHex;
    puttyForeground: ColorHex;
    puttyBoldForeground: ColorHex;
    puttyBackground: ColorHex;
    puttyBoldBackground: ColorHex;
    puttyCursor: ColorHex;
    puttyCursorText: ColorHex;

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

    // Xresources
    // https://wiki.archlinux.org/index.php/x_resources
    xresourcesBlack: ColorHex;
    xresourcesRed: ColorHex;
    xresourcesGreen: ColorHex;
    xresourcesYellow: ColorHex;
    xresourcesBlue: ColorHex;
    xresourcesMagenta: ColorHex;
    xresourcesCyan: ColorHex;
    xresourcesWhite: ColorHex;
    xresourcesBrightBlack: ColorHex;
    xresourcesBrightRed: ColorHex;
    xresourcesBrightGreen: ColorHex;
    xresourcesBrightYellow: ColorHex;
    xresourcesBrightBlue: ColorHex;
    xresourcesBrightMagenta: ColorHex;
    xresourcesBrightCyan: ColorHex;
    xresourcesBrightWhite: ColorHex;
    xresourcesBackground: ColorHex;
    xresourcesForeground: ColorHex;
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
