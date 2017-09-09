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
hi Normal guifg=#c6c6c4 ctermfg=188 guibg=#10100e ctermbg=16

hi Constant guifg=#9A4EAE ctermfg=139
hi Comment guifg=#696969 ctermfg=241
hi Function guifg=#c6c6c4 ctermfg=188
hi Keyword guifg=#03C03C ctermfg=41
hi MatchParen guifg=#c6c6c4 ctermfg=188 guibg=#800020 ctermbg=125
hi Noise guifg=#03C03C ctermfg=41
hi Statement guifg=#03C03C ctermfg=41
hi StorageClass guifg=#C40233 ctermfg=161
hi String guifg=#0087BD ctermfg=38
hi Type guifg=#03C03C ctermfg=41
hi Visual guifg=#c6c6c4 ctermfg=188 guibg=#800020 ctermbg=125

" UI chrome """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi LineNr guifg=#696969 ctermfg=241
hi CursorLineNr guifg=#C40233 ctermfg=161
hi clear CursorLine
hi ColorColumn guibg=#141412 ctermbg=16
hi EndOfBuffer guifg=#696969 ctermfg=241

" GitGutter """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Shell """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Markdown """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Python """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" JavaScript """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
hi jsObjectProp guifg=#C40233 ctermfg=161
hi jsObjectKey guifg=#C40233 ctermfg=161
hi jsObject guifg=#C40233 ctermfg=161
hi jsObjectBraces guifg=#0D98BA ctermfg=38
hi link jsBrackets jsObjectBraces
hi jsGlobalObjects guifg=#c6c6c4 ctermfg=188
hi link jsBuiltins jsGlobalObjects
hi link jsGlobalNodeObjects jsGlobalObjects
hi jsFuncCall guifg=#FFD700 ctermfg=220
hi link jsParens jsFuncCall
hi jsBlockLabel guifg=#c6c6c4 ctermfg=188

" Rust """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
