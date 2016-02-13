import stylus, { nodes } from 'stylus';
import path from 'path';
import glob from 'glob';

export default () => (style) => {
  style.define('import', function (file) {
    const result = new nodes.Block(this.currentBlock);
    const dirname = path.dirname(file.filename);
    const wildcard = path.join(dirname, file.val).replace(/(\.styl)?$/, '.styl');
    const files = glob.sync(wildcard);

    files.forEach((file) => {
      result.push(
        new nodes.Import(
          new nodes.String(file)
        )
      );
    });

    return result;
  })
}
