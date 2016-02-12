import { expect } from 'chai';
import path from 'path';
import fs from 'fs';
import stylus from 'stylus';
import importIfExist from '../src/index.js';

const testPath = path.join(__dirname, 'fixtures');

function getFile(file) {
  return fs.readFileSync(file, 'utf8');
}

function render(file) {
  return new Promise(function(resolve, reject) {
    const fileName = path.join(testPath, `${file}.styl`)
    stylus(getFile(fileName))
      .use(importIfExist())
      .set('filename', fileName)
      .render((err, css) => {
        if (err) {
          reject(err);
          return;
        };

        resolve(css);
      })
  })
}

describe('import', () => {
  it('should not fail on import not-exist file', () =>
    render('not-exist')
  )

  it('should contain same styles as real import when import files', () =>
    Promise.all([render('import'), render('import-real')])
      .then(([importContent, importRealContent]) =>
        expect(importContent).to.equal(importRealContent)
      )
  )

  it('should contain same styles as real import when import by wildcard', () =>
    Promise.all([render('import-wildcard'), render('import-wildcard-real')])
      .then(([importContent, importRealContent]) =>
        expect(importContent).to.equal(importRealContent)
      )
    )
})
