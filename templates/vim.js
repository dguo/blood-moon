const Color = require('color');

function translate(fgHex, bgHex) {
  const values = [];

  if (fgHex) {
    values.push(`guifg=${fgHex}`);
    values.push(`ctermfg=${Color(fgHex).ansi256().object().ansi256}`);
  }

  if (bgHex) {
    values.push(`guibg=${bgHex}`);
    values.push(`ctermbg=${Color(bgHex).ansi256().object().ansi256}`);
  }

  return values.join(' ');
}

function generate(colors) {
  return `" Name: Blood Moon color scheme
" Maintainer: Danny Guo
" Description: Dark and bold color scheme
" URL: https://github.com/dguo/blood-moon

" Initialization """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set background=dark

if version > 580
  hi clear
  if exists("syntax_on")
    syntax reset
  endif
endif

let g:colors_name='blood-moon'

if !has('gui_running') && &t_Co != 256
  finish
endif

" Basics """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi Normal ${translate(colors.foreground, colors.background)}

hi Constant ${translate(colors.main.magenta)}
hi Comment ${translate(colors.comment)}
hi Function ${translate(colors.main.green)}
hi Keyword ${translate(colors.main.green)}
hi Statement ${translate(colors.main.green)}
hi StorageClass ${translate(colors.main.red)}
hi String ${translate(colors.main.blue)}
hi Visual ${translate(colors.selectionText, colors.selection)}

" UI chrome """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi LineNr ${translate(colors.alt.grey)}
hi CursorLineNr ${translate(colors.main.red)}
hi clear CursorLine
hi ColorColumn ${translate(null, colors.ruler)}
hi EndOfBuffer ${translate(colors.alt.grey)}

" GitGutter """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Shell """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Markdown """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Python """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" JavaScript """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Rust """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
`;
}

module.exports = generate;
