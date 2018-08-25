# Blood Moon for ConEmu

Installation:

1. Open ConEmu, and go to `Settings > Features > Colors`.
2. In the `Schemes` dropdown, enter a new name. It doesn't matter what it is. Let's say you call it `foobar`.
3. Find your [ConEmu.xml](https://conemu.github.io/en/ConEmuXml.html) settings file.
4. Find the `Colors` section, which should include the `foobar` definition. It should look like:

```xml
<key name="Colors" modified="2018-08-25 13:59:33" build="180626">
    <value name="Count" type="long" data="1"/>
    <key name="Palette1" modified="2018-08-25 14:04:34" build="180626">
        <value name="Name" type="string" data="foobar"/>
        <value name="TextColorIdx" type="hex" data="10"/>
        <value name="BackColorIdx" type="hex" data="10"/>
        <value name="PopTextColorIdx" type="hex" data="10"/>
        <value name="PopBackColorIdx" type="hex" data="10"/>
        <value name="ColorTable00" type="dword" data="00362b00"/>
        <value name="ColorTable01" type="dword" data="00423607"/>
        ...
        <value name="ColorTable15" type="dword" data="00e3f6fd"/>
    <key/>
</key>
```

5. There may be multiple palettes if you have multiple saved schemes. Find the one for `foobar`, and replace the values with the values in `blood-moon.xml`.
6. Restart ConEmu, go back into the settings menu, and select the new theme.
