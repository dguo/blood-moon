import * as fs from 'fs';

import {TemplateOutput} from './types';
import scheme from './blood-moon';

const applications = fs.readdirSync('./applications');
applications.forEach(async application => {
  const {generate} = await import(`./applications/${application}/template`);
  const result: TemplateOutput = generate(scheme.name, scheme.colors);
  const {fileName, content} = result;
  fs.writeFileSync(`./applications/${application}/${fileName}`, content);
});

(fs as any).copyFileSync('./applications/css/blood-moon.css', './docs/blood-moon.css');

console.log('Complete!');