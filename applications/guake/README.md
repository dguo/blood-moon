# Blood Moon for Guake

## Installation

[dconf](https://en.wikipedia.org/wiki/Dconf) is required if your Guake version
is 3.0.0 or greater. [gconftool-2](https://projects-old.gnome.org/gconf/) is
required otherwise.

1. Download the `blood-moon.sh` script.
2. Make it executable: `$ chmod +x blood-moon.sh`
3. If your Guake version is less than 3.0.0, edit the script, comment out the `dconf` lines, and uncomment the `gconftool-2` lines.
4. Run the script: `$ ./blood-moon.sh`
