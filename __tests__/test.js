// @flow

import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import app from '../src/app';

const readFile = promisify(fs.readFile);

beforeEach(async () => {
  const pathToHtml = path.resolve(__dirname, '__fixtures__/index.html');
  const html = await readFile(pathToHtml, 'utf8');
  document.body.innerHTML = html;
});

test('init', () => {
  app();
});
