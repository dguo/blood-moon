# Blood Moon for GNOME Terminal

## Installation

[dconf](https://en.wikipedia.org/wiki/Dconf) is required for installation.

1. Download the `blood-moon.sh` script.
2. Make it executable: `$ chmod +x blood-moon.sh`
3. Open GNOME Terminal, and open `Edit > Preferences`.
4. Choose the profile that you want to apply the color scheme to.
5. In the `Text` tab, you should see a profile id. It will be a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). Copy it.
5. Run the script, and pass the id as an environment variable: `$ PROFILE_ID=ef49f144-948b-4da2-a3b2-63544cc36a5a ./blood-moon.sh`
