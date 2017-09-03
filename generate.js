const fs = require('fs');
const scheme = require('./blood-moon.js');
const iterm2 = require('./templates/iterm2.js');
const output = iterm2(scheme.name, scheme.colors);
fs.writeFileSync(`./output/${scheme.name}.itermcolors`, output);
