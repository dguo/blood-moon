const fs = require('fs');
const scheme = require('./blood-moon.js');

const iterm2 = require('./templates/iterm2.js');
let output = iterm2(scheme.name, scheme.colors);
fs.writeFileSync(`./output/${scheme.name}.itermcolors`, output);

const vim = require('./templates/vim.js');
output = vim(scheme.colors);
fs.writeFileSync(`./output/${scheme.name}.vim`, output);
