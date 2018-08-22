import Color from 'color';
import {titleCase} from 'change-case';

import {ColorScheme, Meta, TemplateOutput, VimColor} from '../../types';

function translate(colors: VimColor) {
    const [fgHex, bgHex] = colors;
    const values: string[] = [];

    if (fgHex) {
        values.push(`guifg=${fgHex}`);
        values.push(
            `ctermfg=${
                Color(fgHex)
                    .ansi256()
                    .object().ansi256
            }`
        );
    }

    if (bgHex) {
        values.push(`guibg=${bgHex}`);
        values.push(
            `ctermbg=${
                Color(bgHex)
                    .ansi256()
                    .object().ansi256
            }`
        );
    }

    return values.join(' ');
}

export default function generate(
    meta: Meta,
    colors: ColorScheme
): TemplateOutput {
    const content = `" Name: ${titleCase(meta.name)} color scheme
" Maintainer: ${meta.maintainer || ''}
" Description: ${meta.description || ''}
" URL: ${meta.homepage || ''}

" Initialization """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set background=${colors.vimBackground}

if version > 580
  hi clear
  if exists("syntax_on")
    syntax reset
  endif
endif

let g:colors_name='${meta.name}'

if !has('gui_running') && &t_Co != 256
  finish
endif

" Basics """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi Normal ${translate(colors.vimNormal)}

hi IncSearch ${translate(colors.vimIncSearch)}
hi MatchParen ${translate(colors.vimMatchParen)}
hi Search ${translate(colors.vimSearch)}
hi Visual ${translate(colors.vimVisual)}

" Syntax """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi Comment ${translate(colors.vimComment)}
hi Constant ${translate(colors.vimConstant)}
hi String ${translate(colors.vimString)}
hi Character ${translate(colors.vimCharacter)}
hi Error ${translate(colors.vimError)}
hi Identifier ${translate(colors.vimIdentifier)}
hi Statement ${translate(colors.vimStatement)}
hi Noise ${translate(colors.vimNoise)}
hi PreProc ${translate(colors.vimPreProc)}
hi Type ${translate(colors.vimType)}
hi Special ${translate(colors.vimSpecial)}
hi Todo ${translate(colors.vimTodo)}

" UI """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi LineNr ${translate(colors.vimLineNr)}
hi CursorLineNr ${translate(colors.vimCursorLineNr)}
hi clear CursorLine
hi ColorColumn ${translate(colors.vimColorColumn)}
hi EndOfBuffer ${translate(colors.vimEndOfBuffer)}
hi Folded ${translate(colors.vimFolded)}
hi clear VertSplit
hi VertSplit ${translate(colors.vimVertSplit)}

" Status line """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi StatusLine ${translate(colors.vimStatusLine)}
hi StatusLineNC ${translate(colors.vimStatusLineNC)} " not-current windows
hi WildMenu ${translate(colors.vimWildMenu)}

" Diffs """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi DiffChange ${translate(colors.vimDiffChange)}
hi DiffText ${translate(colors.vimDiffText)}
hi DiffAdd ${translate(colors.vimDiffAdd)}
hi DiffDelete ${translate(colors.vimDiffDelete)}

" Popup menu """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi Pmenu ${translate(colors.vimPmenu)}
hi PmenuSel ${translate(colors.vimPmenuSel)}
hi PmenuSbar ${translate(colors.vimPmenuSbar)}
hi PmenuThumb ${translate(colors.vimPmenuThumb)}

" GitGutter and Signify """"""""""""""""""""""""""""""""""""""""""""""""""""""""
hi clear SignColumn

" Shell """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Markdown """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Python """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" JavaScript """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi jsObjectProp ${translate(colors.vimJsObjectProp)}
hi jsObjectKey ${translate(colors.vimJsObjectKey)}
hi jsObject ${translate(colors.vimJsObject)}
hi jsObjectBraces ${translate(colors.vimJsObjectBraces)}
hi link jsBrackets jsObjectBraces
hi jsGlobalObjects ${translate(colors.vimJsGlobalObjects)}
hi link jsBuiltins jsGlobalObjects
hi link jsGlobalNodeObjects jsGlobalObjects
hi jsFuncCall ${translate(colors.vimJsFuncCall)}
hi link jsParens jsFuncCall
hi jsBlockLabel ${translate(colors.vimJsBlockLabel)}
hi link jsVariableDef Identifier
hi link jsFuncArgs Identifier

" JSON """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi link jsonKeyword jsObjectKey

" Rust """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
`;

    return {
        fileName: `${meta.name}.vim`,
        content
    };
}
