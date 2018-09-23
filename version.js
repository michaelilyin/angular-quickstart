const {gitDescribeSync} = require('git-describe');
const pack = require('./package.json');
const {resolve} = require('path');
const {writeFileSync} = require('fs-extra');

const git = gitDescribeSync({
  dirtyMark: false,
  dirtySemver: false
});

const versionInfo = {
  version: pack.version,
  name: pack.name,
  hash: git.hash,
  repo: 'https://github.com/michaelilyin/angular-quickstart',
  tag: git.tag,
  dirty: git.dirty,
  time: new Date()
};

const file = resolve(__dirname, 'generated/version.ts');
const lines = [
  '/* IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN! */',
  '/* tslint:disable */',
  `export const version = ${JSON.stringify(versionInfo, null, 2)};`,
  '/* tslint:enable */',
];
writeFileSync(file, lines.join('\n'), {encoding: 'utf-8'});
