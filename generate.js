const fs = require('fs');

const scheme = require('./blood-moon.js');

const applications = fs.readdirSync('./applications');
applications.forEach(application => {
  const generate = require(`./applications/${application}/template.js`);
  const {fileName, output} = generate(scheme.name, scheme.colors);
  fs.writeFileSync(`./applications/${application}/${fileName}`, output);
});
