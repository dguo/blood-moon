from ranger.gui.colorscheme import ColorScheme
from ranger.gui.color import *

class BloodMoon(ColorScheme):
    progress_bar_color = 20  # cyan

    def use(self, context):
        fg, bg, attr = default_colors

        if context.reset:
            return default_colors

        elif context.in_browser:
            if context.selected:
                attr = reverse | bold
            else:
                attr = normal
            if context.empty or context.error:
                bg = 1  # red
            if context.border:
                fg = default
            if context.media:
                if context.image:
                    fg = 3  # yellow
                else:
                    fg = 5  # magenta
            if context.container:
                fg = 1  # red
            if context.directory:
                fg = 4  # blue
            elif context.executable and not \
                    any((context.media, context.container,
                         context.fifo, context.socket)):
                fg = 2  # green
            if context.socket:
                fg = 5  # magenta
            if context.fifo or context.device:
                fg = 3  # yellow
                if context.device:
                    fg += BRIGHT
            if context.link:
                fg = 6 if context.good else 5  # cyan if good else magenta
            if context.tag_marker and not context.selected:
                if fg in (1, 5):
                    fg = 7  # white
                else:
                    fg = 1  # red
            if not context.selected and (context.cut or context.copied):
                fg = 0  # black
                if BRIGHT == 0:
                    attr |= dim
                    fg = 7  # white
            if context.main_column:
                if context.selected:
                    attr |= bold
                if context.marked:
                    fg = 3  # yellow
            if context.badinfo:
                if attr & reverse:
                    bg = 5  # magenta
                else:
                    fg = 5  # magenta

            if context.inactive_pane:
                fg = 6  # cyan

        elif context.in_titlebar:
            if context.hostname:
                fg = 1 if context.bad else 2  # red if bad else green
            elif context.directory:
                fg = 4  # blue
            elif context.tab:
                if context.good:
                    bg = 2  # green
            elif context.link:
                fg = 6  # cyan
            attr = bold if context.selected else normal

        elif context.in_statusbar:
            if context.permissions:
                if context.good:
                    fg = 6  # cyan
                elif context.bad:
                    fg = 5  # magenta
            if context.marked:
                attr |= reverse
                fg = 3  # yellow
            if context.frozen:
                attr |= reverse
                fg = 6  # cyan
            if context.message:
                if context.bad:
                    fg = 1  # red
            if context.loaded:
                bg = self.progress_bar_color
            if context.vcsinfo:
                fg = 4  # blue
            if context.vcscommit:
                fg = 3  # yellow
            if context.vcsdate:
                fg = 6  # cyan

        if context.text:
            if context.highlight:
                attr |= reverse

        if context.in_taskview:
            if context.title:
                fg = 4  # blue

            if context.selected:
                attr |= reverse

            if context.loaded:
                if context.selected:
                    fg = self.progress_bar_color
                else:
                    bg = self.progress_bar_color

        if context.vcsfile and not context.selected:
            if context.vcsconflict:
                fg = 5  # magenta
            elif context.vcsuntracked:
                fg = 6  # cyan
            elif context.vcschanged:
                fg = 1  # red
            elif context.vcsunknown:
                fg = 1  # red
            elif context.vcsstaged:
                fg = 2  # green
            elif context.vcssync:
                fg = 2  # green
            elif context.vcsignored:
                fg = default

        elif context.vcsremote and not context.selected:
            if context.vcssync or context.vcsnone:
                fg = 2  # green
            elif context.vcsbehind:
                fg = 1  # red
            elif context.vcsahead:
                fg = 4  # blue
            elif context.vcsdiverged:
                fg = 5  # magenta
            elif context.vcsunknown:
                fg = 1  # red

        return fg, bg, attr

