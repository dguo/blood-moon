" Name: Blood Moon color scheme
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
hi Normal guifg=#C6C6C4 ctermfg=188 guibg=#10100E ctermbg=16

hi IncSearch guifg=#C6C6C4 ctermfg=188 guibg=#800020 ctermbg=125
hi MatchParen guifg=#C6C6C4 ctermfg=188 guibg=#800020 ctermbg=125
hi Search guifg=#C6C6C4 ctermfg=188 guibg=#800020 ctermbg=125
hi Visual guifg=#C6C6C4 ctermfg=188 guibg=#800020 ctermbg=125

" Syntax """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi Comment guifg=#696969 ctermfg=241
hi Constant guifg=#9A4EAE ctermfg=139
hi String guifg=#0087BD ctermfg=38
hi Character guifg=#0087BD ctermfg=38
hi Error guifg=#FF1493 ctermfg=199 guibg=#10100E ctermbg=16
hi Identifier guifg=#C40233 ctermfg=161
hi Statement guifg=#009F6B ctermfg=36
hi Noise guifg=#009F6B ctermfg=36
hi PreProc guifg=#009F6B ctermfg=36
hi Type guifg=#009F6B ctermfg=36
hi Special guifg=#EE7F2D ctermfg=209
hi Todo guifg=#10100E ctermfg=16 guibg=#EE7F2D ctermbg=209

" UI """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi LineNr guifg=#696969 ctermfg=241
hi CursorLineNr guifg=#C40233 ctermfg=161
hi clear CursorLine
hi ColorColumn guibg=#141412 ctermbg=16
hi EndOfBuffer guifg=#696969 ctermfg=241
hi Folded guifg=#10100E ctermfg=16 guibg=#EE7F2D ctermbg=209
hi clear VertSplit
hi VertSplit guifg=#C6C6C4 ctermfg=188 guibg=#10100E ctermbg=16

" Status line """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi StatusLine guifg=#800020 ctermfg=125 guibg=#C6C6C4 ctermbg=188
hi StatusLineNC guifg=#C6C6C4 ctermfg=188 guibg=#800020 ctermbg=125 " not-current windows
hi WildMenu guifg=#800020 ctermfg=125 guibg=#FFFAFA ctermbg=231

" Diffs """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi DiffChange guifg=#10100E ctermfg=16 guibg=#FDFF00 ctermbg=226
hi DiffText guifg=#10100E ctermfg=16 guibg=#007FFF ctermbg=33
hi DiffAdd guifg=#10100E ctermfg=16 guibg=#03C03C ctermbg=41
hi DiffDelete guifg=#10100E ctermfg=16 guibg=#FF2400 ctermbg=202

" Popup menu """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi Pmenu guifg=#10100E ctermfg=16 guibg=#FFFAFA ctermbg=231
hi PmenuSel guifg=#FFFAFA ctermfg=231 guibg=#800020 ctermbg=125
hi PmenuSbar guibg=#C6C6C4 ctermbg=188
hi PmenuThumb guibg=#696969 ctermbg=241

" GitGutter """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Shell """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Markdown """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Python """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" JavaScript """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi jsObjectProp guifg=#C40233 ctermfg=161
hi jsObjectKey guifg=#C40233 ctermfg=161
hi jsObject guifg=#C40233 ctermfg=161
hi jsObjectBraces guifg=#20B2AA ctermfg=73
hi link jsBrackets jsObjectBraces
hi jsGlobalObjects guifg=#C6C6C4 ctermfg=188
hi link jsBuiltins jsGlobalObjects
hi link jsGlobalNodeObjects jsGlobalObjects
hi jsFuncCall guifg=#FFD700 ctermfg=220
hi link jsParens jsFuncCall
hi jsBlockLabel guifg=#C6C6C4 ctermfg=188
hi link jsVariableDef Identifier
hi link jsFuncArgs Identifier

" JSON """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi link jsonKeyword jsObjectKey

" Rust """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
