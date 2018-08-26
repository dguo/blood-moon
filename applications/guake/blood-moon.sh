#!/usr/bin/env bash

# For Guake versions >= 3.0.0
GUAKE_FONT=/apps/guake/style/font
dconf write $GUAKE_FONT/palette "'#101010100E0E:#C4C402023333:#00009F9F6B6B:#FFFFD7D70000:#00008787BDBD:#9A9A4E4EAEAE:#2020B2B2AAAA:#C6C6C6C6C4C4:#696969696969:#FFFF24240000:#0303C0C03C3C:#FDFDFFFF0000:#00007F7FFFFF:#FFFF14149393:#0000CCCCCCCC:#FFFFFAFAFAFA:#C6C6C6C6C4C4:#101010100E0E'"
dconf write $GUAKE_FONT/palette-name "'Blood Moon'"

# For Guake versions < 3.0.0
# gconftool-2 -s -t string /apps/guake/style/font/palette_name "Blood Moon"
# gconftool-2 -s -t string /apps/guake/style/font/palette "#101010100E0E:#C4C402023333:#00009F9F6B6B:#FFFFD7D70000:#00008787BDBD:#9A9A4E4EAEAE:#2020B2B2AAAA:#C6C6C6C6C4C4:#696969696969:#FFFF24240000:#0303C0C03C3C:#FDFDFFFF0000:#00007F7FFFFF:#FFFF14149393:#0000CCCCCCCC:#FFFFFAFAFAFA:#C6C6C6C6C4C4:#101010100E0E"
# gconftool-2 -s -t string /apps/guake/style/font/color "#C6C6C6C6C4C4"
# gconftool-2 -s -t string /apps/guake/style/background/color "#101010100E0E"
