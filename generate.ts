import * as fs from 'fs';

import scheme from './blood-moon';

const applications = fs.readdirSync('./applications');
applications.forEach(async application => {
  const {generate} = await import(`./applications/${application}/template`);
  const {fileName, output} = generate(scheme.name, scheme.colors);
  fs.writeFileSync(`./applications/${application}/${fileName}`, output);
});
