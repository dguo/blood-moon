#!/usr/bin/env bash

GNOME_PROFILE=/org/gnome/terminal/legacy/profiles:/:$PROFILE_ID

dconf write $GNOME_PROFILE/use-theme-colors "false"
dconf write $GNOME_PROFILE/background-color "'#10100E'"
dconf write $GNOME_PROFILE/foreground-color "'#C6C6C4'"
dconf write $GNOME_PROFILE/bold-color-same-as-fg "false"
dconf write $GNOME_PROFILE/bold-color "'#C40233'"
dconf write $GNOME_PROFILE/cursor-colors-set "true"
dconf write $GNOME_PROFILE/cursor-background-color "'#C6C6C4'"
dconf write $GNOME_PROFILE/cursor-foreground-color "'#C6C6C4'"
dconf write $GNOME_PROFILE/highlight-colors-set "true"
dconf write $GNOME_PROFILE/highlight-background-color "'#800020'"
dconf write $GNOME_PROFILE/highlight-foreground-color "'#C6C6C4'"
dconf write $GNOME_PROFILE/palette "['#10100E', '#C40233', '#009F6B', '#FFD700', '#0087BD', '#9A4EAE', '#20B2AA', '#C6C6C4', '#696969', '#FF2400', '#03C03C', '#FDFF00', '#007FFF', '#FF1493', '#00CCCC', '#FFFAFA']"
