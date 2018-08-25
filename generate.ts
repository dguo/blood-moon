import fs from 'fs';

import Color from 'color';

import bloodMoon from './blood-moon';
import {BaseColorScheme, ColorScheme} from './types';

import generateAlacritty from './applications/alacritty/template';
import generateCSS from './applications/css/template';
import generateFirefox from './applications/firefox/template';
import generateHyper from './applications/hyper/template';
import generateiTerm from './applications/iterm/template';
import generateKitty from './applications/kitty/template';
import generatePutty from './applications/putty/template';
import generateSlack from './applications/slack/template';
import generateTerminal from './applications/terminal/template';
import generateTerminator from './applications/terminator/template';
import generateTermux from './applications/termux/template';
import generateThemer from './applications/themer/template';
import generateVim from './applications/vim/template';

function lighten(hex: string, value: number): string {
    const rgb = Color(hex)
        .lighten(value)
        .rgb()
        .array();

    const lightenedHex =
        '#' +
        rgb
            .map(x => {
                const xHex = Math.floor(x).toString(16);
                return xHex.length === 1 ? '0' + xHex : xHex;
            })
            .join('');

    return lightenedHex;
}

function transparent(hex: string, value: number): string {
    const color = Color(hex);
    return `rgba(${color.red()}, ${color.green()}, ${color.blue()}, ${value})`;
}

function getColorScheme(base: BaseColorScheme): ColorScheme {
    // ANSI colors
    const black = base.black || '#10100E';
    const red = base.red || '#C40233'; // NCS red
    const green = base.green || '#009F6B'; // NCS green
    const yellow = base.yellow || '#FFD700'; // Gold
    const blue = base.blue || '#0087BD'; // NCS blue
    const magenta = base.magenta || '#9A4EAE';
    const cyan = base.cyan || '#20B2AA'; // Bright sea green
    const white = base.white || '#C6C6C4';
    const brightBlack = base.brightBlack || '#696969'; // Dim gray
    const brightRed = base.brightRed || '#FF2400'; // Scarlet
    const brightGreen = base.brightGreen || '#03C03C'; // Dark pastel green
    const brightYellow = base.brightYellow || '#FDFF00'; // Lemon
    const brightBlue = base.brightBlue || '#007FFF'; // Azure
    const brightMagenta = base.brightMagenta || '#FF1493'; // Deep pink
    const brightCyan = base.brightCyan || '#00CCCC'; // Robin egg blue
    const brightWhite = base.brightWhite || '#FFFAFA'; // Snow

    // other colors
    const brown = base.brown || '#CD853F'; // Peru
    const darkRed = base.darkRed || '#800020'; // Oxblood
    const gray = base.gray || '#696969'; // Dim gray
    const orange = base.orange || '#EE7F2D'; // Princeton
    const pink = base.pink || '#FF1493'; // Deep pink

    // UI elements
    const background = base.background || black;
    const bold = base.bold || red;
    const border = base.border || background;
    const foreground = base.foreground || white;
    const cursor = base.cursor || foreground;
    const ruler = base.ruler || lighten(background, 0.3);
    const selection = base.selection || darkRed;
    const selectionText = base.selectionText || white;

    // syntax
    const comment = base.comment || gray;
    const link = base.link || blue;

    const hyperSelection = base.hyperSelection || transparent(selection, 0.3);
    const hyperWhite = base.hyperWhite || white;
    const hyperCSS =
        base.hyperCSS ||
        `.tab_tab {
        border-bottom-color: ${hyperSelection} !important;
        border-bottom-width: 2px;
      }

      .tab_tab:not(.tab_active) {
        opacity: 0.6;
      }

      .tab_tab.tab_active {
        border-bottom-color: ${selection} !important;
      }

      .splitpane_divider {
        background-color: ${transparent(hyperWhite, 0.5)} !important;
      }

      .splitpane_pane > .term_fit:not(.term_active) {
        opacity: 0.7;
      }`;

    const scheme = {
        black,
        red,
        green,
        yellow,
        blue,
        magenta,
        cyan,
        white,
        brightBlack,
        brightRed,
        brightGreen,
        brightYellow,
        brightBlue,
        brightMagenta,
        brightCyan,
        brightWhite,
        // other colors
        brown,
        darkRed,
        gray,
        orange,
        pink,
        // UI elements
        background,
        bold,
        border,
        cursor,
        foreground,
        selection,
        selectionText,
        // syntax
        link,
        ruler,
        comment,
        // Alacritty
        alacrittyBackground: base.alacrittyBackground || background,
        alacrittyForeground: base.alacrittyForeground || foreground,
        alacrittyBlack: base.alacrittyBlack || black,
        alacrittyRed: base.alacrittyRed || red,
        alacrittyGreen: base.alacrittyGreen || green,
        alacrittyYellow: base.alacrittyYellow || yellow,
        alacrittyBlue: base.alacrittyBlue || blue,
        alacrittyMagenta: base.alacrittyMagenta || magenta,
        alacrittyCyan: base.alacrittyCyan || cyan,
        alacrittyWhite: base.alacrittyWhite || white,
        alacrittyBrightBlack: base.alacrittyBrightBlack || brightBlack,
        alacrittyBrightRed: base.alacrittyBrightRed || brightRed,
        alacrittyBrightGreen: base.alacrittyBrightGreen || brightGreen,
        alacrittyBrightYellow: base.alacrittyBrightYellow || brightYellow,
        alacrittyBrightBlue: base.alacrittyBrightBlue || brightBlue,
        alacrittyBrightMagenta: base.alacrittyBrightMagenta || brightMagenta,
        alacrittyBrightCyan: base.alacrittyBrightCyan || brightCyan,
        alacrittyBrightWhite: base.alacrittyBrightWhite || brightWhite,
        // CSS
        cssForeground: base.cssForeground || foreground,
        cssBackground: base.cssBackground || background,
        cssH1: base.cssH1 || red,
        cssH2: base.cssH2 || green,
        cssI: base.cssI || red,
        cssA: base.cssA || link,
        // Firefox
        firefoxAccent: base.firefoxAccent || background,
        firefoxButtonBackgroundActive:
            base.firefoxButtonBackgroundActive || brightWhite,
        firefoxButtonBackgroundHover:
            base.firefoxButtonBackgroundHover || brightWhite,
        firefoxIcons: base.firefoxIcons || foreground,
        firefoxIconsAttention: base.firefoxIconsAttention || blue,
        firefoxPopup: base.firefoxPopup || background,
        firefoxPopupHighlight: base.firefoxPopupHighlight || selection,
        firefoxPopupHighlightText:
            base.firefoxPopupHighlightText || selectionText,
        firefoxPopupText: base.firefoxPopupText || foreground,
        firefoxTabBackgroundText: base.firefoxTabBackgroundText || foreground,
        firefoxTabLine: base.firefoxTabLine || background,
        firefoxTabLoading: base.firefoxTabLoading || selectionText,
        firefoxTabSelected: base.firefoxTabSelected || selection,
        firefoxTabText: base.firefoxTabText || selectionText,
        firefoxToolbar: base.firefoxToolbar || selection,
        firefoxToolbarField: base.firefoxToolbarField || background,
        firefoxToolbarFieldBorderFocus:
            base.firefoxToolbarFieldBorderFocus || red,
        firefoxToolbarFieldText: base.firefoxToolbarFieldText || foreground,
        firefoxText: base.firefoxText || foreground,

        // Hyper
        hyperCursor: base.hyperCursor || cursor,
        hyperCursorAccent: base.hyperCursorAccent || background,
        hyperForeground: base.hyperForeground || foreground,
        hyperBackground: base.hyperBackground || background,
        hyperSelection,
        hyperBorder: base.hyperBorder || border,
        hyperBlack: base.hyperBlack || black,
        hyperRed: base.hyperRed || red,
        hyperGreen: base.hyperGreen || green,
        hyperYellow: base.hyperYellow || yellow,
        hyperBlue: base.hyperBlue || blue,
        hyperMagenta: base.hyperMagenta || magenta,
        hyperCyan: base.hyperCyan || cyan,
        hyperWhite,
        hyperLightBlack: base.hyperLightBlack || brightBlack,
        hyperLightRed: base.hyperLightRed || brightRed,
        hyperLightGreen: base.hyperLightGreen || brightGreen,
        hyperLightYellow: base.hyperLightYellow || brightYellow,
        hyperLightBlue: base.hyperLightBlue || brightBlue,
        hyperLightMagenta: base.hyperLightMagenta || brightMagenta,
        hyperLightCyan: base.hyperLightCyan || brightCyan,
        hyperLightWhite: base.hyperLightWhite || brightWhite,
        hyperCSS,
        // iTerm
        iTermBlack: base.iTermBlack || black,
        iTermRed: base.iTermRed || red,
        iTermGreen: base.iTermGreen || green,
        iTermYellow: base.iTermYellow || yellow,
        iTermBlue: base.iTermBlue || blue,
        iTermMagenta: base.iTermMagenta || magenta,
        iTermCyan: base.iTermCyan || cyan,
        iTermWhite: base.iTermWhite || white,
        iTermBrightBlack: base.iTermBrightBlack || brightBlack,
        iTermBrightRed: base.iTermBrightRed || brightRed,
        iTermBrightGreen: base.iTermBrightGreen || brightGreen,
        iTermBrightYellow: base.iTermBrightYellow || brightYellow,
        iTermBrightBlue: base.iTermBrightBlue || brightBlue,
        iTermBrightMagenta: base.iTermBrightMagenta || brightMagenta,
        iTermBrightCyan: base.iTermBrightCyan || brightCyan,
        iTermBrightWhite: base.iTermBrightWhite || brightWhite,
        iTermBackground: base.iTermBackground || background,
        iTermBadge: base.iTermBadge || red,
        iTermBold: base.iTermBold || bold,
        iTermCursor: base.iTermCursor || cursor,
        iTermForeground: base.iTermForeground || foreground,
        iTermLink: base.iTermLink || link,
        iTermSelectionText: base.iTermSelectionText || selectionText,
        iTermSelection: base.iTermSelection || selection,
        // Kitty
        kittyBlack: base.kittyBlack || black,
        kittyRed: base.kittyRed || red,
        kittyGreen: base.kittyGreen || green,
        kittyYellow: base.kittyYellow || yellow,
        kittyBlue: base.kittyBlue || blue,
        kittyMagenta: base.kittyMagenta || magenta,
        kittyCyan: base.kittyCyan || cyan,
        kittyWhite: base.kittyWhite || white,
        kittyBrightBlack: base.kittyBrightBlack || brightBlack,
        kittyBrightRed: base.kittyBrightRed || brightRed,
        kittyBrightGreen: base.kittyBrightGreen || brightGreen,
        kittyBrightYellow: base.kittyBrightYellow || brightYellow,
        kittyBrightBlue: base.kittyBrightBlue || brightBlue,
        kittyBrightMagenta: base.kittyBrightMagenta || brightMagenta,
        kittyBrightCyan: base.kittyBrightCyan || brightCyan,
        kittyBrightWhite: base.kittyBrightWhite || brightWhite,
        kittyCursor: base.kittyCursor || cursor,
        kittyLink: base.kittyLink || link,
        kittyActiveBorder: base.kittyActiveBorder || border,
        kittyInactiveBorder: base.kittyInactiveBorder || border,
        kittyBellBorder: base.kittyBellBorder || border,
        kittyActiveTabForeground: base.kittyActiveTabForeground || foreground,
        kittyActiveTabBackground: base.kittyActiveTabBackground || background,
        kittyInactiveTabForeground:
            base.kittyInactiveTabForeground || foreground,
        kittyInactiveTabBackground:
            base.kittyInactiveTabBackground || background,
        kittyForeground: base.kittyForeground || foreground,
        kittyBackground: base.kittyBackground || background,
        kittySelectionText: base.kittySelectionText || selectionText,
        kittySelection: base.kittySelection || selection,
        // Putty
        puttyBlack: base.puttyBlack || black,
        puttyRed: base.puttyRed || red,
        puttyGreen: base.puttyGreen || green,
        puttyYellow: base.puttyYellow || yellow,
        puttyBlue: base.puttyBlue || blue,
        puttyMagenta: base.puttyMagenta || magenta,
        puttyCyan: base.puttyCyan || cyan,
        puttyWhite: base.puttyWhite || white,
        puttyBrightBlack: base.puttyBrightBlack || brightBlack,
        puttyBrightRed: base.puttyBrightRed || brightRed,
        puttyBrightGreen: base.puttyBrightGreen || brightGreen,
        puttyBrightYellow: base.puttyBrightYellow || brightYellow,
        puttyBrightBlue: base.puttyBrightBlue || brightBlue,
        puttyBrightMagenta: base.puttyBrightMagenta || brightMagenta,
        puttyBrightCyan: base.puttyBrightCyan || brightCyan,
        puttyBrightWhite: base.puttyBrightWhite || brightWhite,
        puttyCursor: base.puttyCursor || cursor,
        puttyCursorText: base.puttyCursorText || foreground,
        puttyForeground: base.puttyForeground || foreground,
        puttyBoldForeground: base.puttyBoldForeground || foreground,
        puttyBackground: base.puttyBackground || background,
        puttyBoldBackground: base.puttyBoldBackground || background,
        // Slack
        slackColumnBackground: base.slackColumnBackground || background,
        slackMenuBackgroundHover: base.slackMenuBackgroundHover || brightWhite,
        slackActiveItem: base.slackActiveItem || selection,
        slackActiveItemText: base.slackActiveItemText || selectionText,
        slackHoverItem: base.slackHoverItem || brightWhite,
        slackText: base.slackText || foreground,
        slackActivePresence: base.slackActivePresence || green,
        slackMentionBadge: base.slackMentionBadge || yellow,
        // Terminal
        terminalBlack: base.terminalBlack || black,
        terminalRed: base.terminalRed || red,
        terminalGreen: base.terminalGreen || green,
        terminalYellow: base.terminalYellow || yellow,
        terminalBlue: base.terminalBlue || blue,
        terminalMagenta: base.terminalMagenta || magenta,
        terminalCyan: base.terminalCyan || cyan,
        terminalWhite: base.terminalWhite || white,
        terminalBrightBlack: base.terminalBrightBlack || brightBlack,
        terminalBrightRed: base.terminalBrightRed || brightRed,
        terminalBrightGreen: base.terminalBrightGreen || brightGreen,
        terminalBrightYellow: base.terminalBrightYellow || brightYellow,
        terminalBrightBlue: base.terminalBrightBlue || brightBlue,
        terminalBrightMagenta: base.terminalBrightMagenta || brightMagenta,
        terminalBrightCyan: base.terminalBrightCyan || brightCyan,
        terminalBrightWhite: base.terminalBrightWhite || brightWhite,
        terminalBackground: base.terminalBackground || background,
        terminalBold: base.terminalBold || bold,
        terminalCursor: base.terminalCursor || cursor,
        terminalText: base.terminalText || selectionText,
        terminalSelection: base.terminalSelection || selection,
        // Terminator
        terminatorBackground: base.terminatorBackground || background,
        terminatorForeground: base.terminatorForeground || foreground,
        terminatorBlack: base.terminatorBlack || black,
        terminatorRed: base.terminatorRed || red,
        terminatorGreen: base.terminatorGreen || green,
        terminatorYellow: base.terminatorYellow || yellow,
        terminatorBlue: base.terminatorBlue || blue,
        terminatorMagenta: base.terminatorMagenta || magenta,
        terminatorCyan: base.terminatorCyan || cyan,
        terminatorWhite: base.terminatorWhite || white,
        terminatorBrightBlack: base.terminatorBrightBlack || brightBlack,
        terminatorBrightRed: base.terminatorBrightRed || brightRed,
        terminatorBrightGreen: base.terminatorBrightGreen || brightGreen,
        terminatorBrightYellow: base.terminatorBrightYellow || brightYellow,
        terminatorBrightBlue: base.terminatorBrightBlue || brightBlue,
        terminatorBrightMagenta: base.terminatorBrightMagenta || brightMagenta,
        terminatorBrightCyan: base.terminatorBrightCyan || brightCyan,
        terminatorBrightWhite: base.terminatorBrightWhite || brightWhite,
        // Termux
        termuxBackground: base.termuxBackground || background,
        termuxForeground: base.termuxForeground || foreground,
        termuxBlack: base.termuxBlack || black,
        termuxRed: base.termuxRed || red,
        termuxGreen: base.termuxGreen || green,
        termuxYellow: base.termuxYellow || yellow,
        termuxBlue: base.termuxBlue || blue,
        termuxMagenta: base.termuxMagenta || magenta,
        termuxCyan: base.termuxCyan || cyan,
        termuxWhite: base.termuxWhite || white,
        termuxBrightBlack: base.termuxBrightBlack || brightBlack,
        termuxBrightRed: base.termuxBrightRed || brightRed,
        termuxBrightGreen: base.termuxBrightGreen || brightGreen,
        termuxBrightYellow: base.termuxBrightYellow || brightYellow,
        termuxBrightBlue: base.termuxBrightBlue || brightBlue,
        termuxBrightMagenta: base.termuxBrightMagenta || brightMagenta,
        termuxBrightCyan: base.termuxBrightCyan || brightCyan,
        termuxBrightWhite: base.termuxBrightWhite || brightWhite,
        // Themer
        themerAccent0: base.themerAccent0 || red,
        themerAccent1: base.themerAccent1 || orange,
        themerAccent2: base.themerAccent2 || yellow,
        themerAccent3: base.themerAccent3 || green,
        themerAccent4: base.themerAccent4 || cyan,
        themerAccent5: base.themerAccent5 || blue,
        themerAccent6: base.themerAccent6 || magenta,
        themerAccent7: base.themerAccent7 || pink,
        themerShade0: base.themerShade0 || background,
        themerShade1: base.themerShade1,
        themerShade2: base.themerShade2,
        themerShade3: base.themerShade3,
        themerShade4: base.themerShade4,
        themerShade5: base.themerShade5,
        themerShade6: base.themerShade6,
        themerShade7: base.themerShade7 || foreground,
        // Vim
        vimBackground: base.vimBackground || 'dark',
        vimNormal: base.vimNormal || [foreground, background],
        vimIncSearch: base.vimIncSearch || [selectionText, selection],
        vimMatchParen: base.vimMatchParen || [selectionText, selection],
        vimSearch: base.vimSearch || [selectionText, selection],
        vimVisual: base.vimVisual || [selectionText, selection],
        vimComment: base.vimComment || [comment],
        vimConstant: base.vimConstant || [magenta],
        vimString: base.vimString || [blue],
        vimCharacter: base.vimCharacter || [blue],
        vimError: base.vimError || [pink, background],
        vimIdentifier: base.vimIdentifier || [red],
        vimStatement: base.vimStatement || [green],
        vimNoise: base.vimNoise || [green],
        vimPreProc: base.vimPreProc || [green],
        vimType: base.vimType || [green],
        vimSpecial: base.vimSpecial || [orange],
        vimTodo: base.vimTodo || [background, orange],
        vimLineNr: base.vimLineNr || [gray],
        vimCursorLineNr: base.vimCursorLineNr || [red],
        vimColorColumn: base.vimColorColumn || [null, ruler],
        vimEndOfBuffer: base.vimEndOfBuffer || [background],
        vimFolded: base.vimFolded || [black, orange],
        vimVertSplit: base.vimVertSplit || [foreground, background],
        vimStatusLine: base.vimStatusLine || [darkRed, white],
        vimStatusLineNC: base.vimStatusLineNC || [white, darkRed],
        vimWildMenu: base.vimWildMenu || [darkRed, brightWhite],
        vimDiffChange: base.vimDiffChange || [brightYellow, background],
        vimDiffText: base.vimDiffText || [brightBlue, background],
        vimDiffAdd: base.vimDiffAdd || [brightGreen, background],
        vimDiffDelete: base.vimDiffDelete || [brightRed, background],
        vimPmenu: base.vimPmenu || [background, brightWhite],
        vimPmenuSel: base.vimPmenuSel || [brightWhite, selection],
        vimPmenuSbar: base.vimPmenuSbar || [null, foreground],
        vimPmenuThumb: base.vimPmenuThumb || [null, gray],
        vimJsObjectProp: base.vimJsObjectProp || [red],
        vimJsObjectKey: base.vimJsObjectKey || [red],
        vimJsObject: base.vimJsObject || [red],
        vimJsObjectBraces: base.vimJsObjectBraces || [cyan],
        vimJsBrackets: base.vimJsBrackets || [cyan],
        vimJsGlobalObjects: base.vimJsGlobalObjects || [foreground],
        vimJsBuiltins: base.vimJsBuiltins || [foreground],
        vimJsGlobalNodeObjects: base.vimJsGlobalNodeObjects || [foreground],
        vimJsFuncCall: base.vimJsFuncCall || [yellow],
        vimJsParens: base.vimJsParens || [yellow],
        vimJsBlockLabel: base.vimJsBlockLabel || [foreground],
        vimJsVariableDef: base.vimJsVariableDef || [red],
        vimJsFuncArgs: base.vimJsFuncArgs || [red],
        vimJsonKeyword: base.vimJsonKeyword || [red]
    };

    return scheme;
}

function generate() {
    const scheme = getColorScheme(bloodMoon.colors);
    const meta = bloodMoon.meta;

    const alacritty = generateAlacritty(meta.name, scheme);
    fs.writeFileSync(
        `./applications/alacritty/${alacritty.fileName}`,
        alacritty.content
    );

    const hyper = generateHyper(scheme);
    fs.writeFileSync(`./applications/hyper/${hyper.fileName}`, hyper.content);

    const iTerm = generateiTerm(meta.name, scheme);
    fs.writeFileSync(`./applications/iterm/${iTerm.fileName}`, iTerm.content);

    const kitty = generateKitty(meta.name, scheme);
    fs.writeFileSync(`./applications/kitty/${kitty.fileName}`, kitty.content);

    const putty = generatePutty(meta.name, scheme);
    fs.writeFileSync(`./applications/putty/${putty.fileName}`, putty.content);

    const slack = generateSlack(meta.name, scheme);
    fs.writeFileSync(`./applications/slack/${slack.fileName}`, slack.content);

    const terminal = generateTerminal(meta.name, scheme);
    fs.writeFileSync(
        `./applications/terminal/${terminal.fileName}`,
        terminal.content
    );

    const terminator = generateTerminator(meta.name, scheme);
    fs.writeFileSync(
        `./applications/terminator/${terminator.fileName}`,
        terminator.content
    );

    const termux = generateTermux(meta.name, scheme);
    fs.writeFileSync(
        `./applications/termux/${termux.fileName}`,
        termux.content
    );

    const themer = generateThemer(scheme);
    fs.writeFileSync(
        `./applications/themer/${themer.fileName}`,
        themer.content
    );

    const css = generateCSS(meta.name, scheme);
    fs.writeFileSync(`./applications/css/${css.fileName}`, css.content);
    fs.writeFileSync(`./docs/${meta.name}.css`, css.content);

    const vim = generateVim(meta, scheme);
    fs.writeFileSync(`./applications/vim/colors/${vim.fileName}`, vim.content);

    const firefox = generateFirefox(meta, scheme);
    fs.writeFileSync(
        `./applications/firefox/${firefox.fileName}`,
        firefox.content
    );

    console.log('Complete!');
}

generate();
