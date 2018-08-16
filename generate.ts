import fs from 'fs';

import Color from 'color';

import bloodMoon from './blood-moon';
import {BaseColorScheme, ColorScheme} from './types';

import generateAlacritty from './applications/alacritty/template';
import generateHyper from './applications/hyper/template';
import generateiTerm from './applications/iterm/template';

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
        brown,
        darkRed,
        gray,
        orange,
        pink,
        background,
        border,
        cursor,
        foreground,
        selection,
        selectionText,
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
        iTermBold: base.iTermBold || red,
        iTermCursor: base.iTermCursor || cursor,
        iTermForeground: base.iTermForeground || foreground,
        iTermLink: base.iTermLink || link,
        iTermSelectionText: base.iTermSelectionText || selectionText,
        iTermSelection: base.iTermSelection || selection,
        // Slack
        slackColumnBackground: base.slackColumnBackground || background,
        slackMenuBackgroundHover: base.slackMenuBackgroundHover || brightWhite,
        slackActiveItem: base.slackActiveItem || selection,
        slackActiveItemText: base.slackActiveItemText || selectionText,
        slackHoverItem: base.slackHoverItem || brightWhite,
        slackText: base.slackText || foreground,
        slackActivePresence: base.slackActivePresence || green,
        slackMentionBadge: base.slackMentionBadge || yellow
    };

    return scheme;
}

function generate() {
    const scheme = getColorScheme(bloodMoon.colors);

    const alacritty = generateAlacritty(bloodMoon.name, scheme);
    fs.writeFileSync(
        `./applications/alacritty/${alacritty.fileName}`,
        alacritty.content
    );

    const hyper = generateHyper(scheme);
    fs.writeFileSync(`./applications/hyper/${hyper.fileName}`, hyper.content);

    const iTerm = generateiTerm(bloodMoon.name, scheme);
    fs.writeFileSync(`./applications/iterm/${iTerm.fileName}`, iTerm.content);

    // if (application === 'vim') {
    // destination += 'colors/';

    // (fs as any).copyFileSync(
    // './applications/css/blood-moon.css',
    // './docs/blood-moon.css'
    // );

    console.log('Complete!');
}

generate();
