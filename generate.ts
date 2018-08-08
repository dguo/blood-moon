import * as fs from 'fs';

import scheme from './blood-moon';
import {TemplateOutput} from './types';

const applications = fs.readdirSync('./applications');
applications.forEach(async application => {
    if (application === '.DS_Store') {
        return;
    }

    const {generate} = await import(`./applications/${application}/template`);
    const result: TemplateOutput = generate(scheme.name, scheme.colors);
    const {fileName, content} = result;

    let destination = `./applications/${application}/`;
    if (application === 'vim') {
        destination += 'colors/';
    }
    destination += fileName;

    fs.writeFileSync(destination, content);
});

(fs as any).copyFileSync(
    './applications/css/blood-moon.css',
    './docs/blood-moon.css'
);

console.log('Complete!');
