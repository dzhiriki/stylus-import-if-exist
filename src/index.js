import stylus, { nodes } from 'stylus';
import path from 'path';
import glob from 'glob';

export default () => (style) => {
  style.define('import', (file) => {
    const res = new nodes.Root();
    const dirname = path.dirname(file.filename);
    const wildcard = path.join(dirname, file.val).replace(/(\.styl)?$/, '.styl');
    const files = glob.sync(wildcard);

    files.forEach((file) => {
      res.push(
        new nodes.Import(
          new nodes.String(file)
        )
      );
    });

    return res;
  })
}
