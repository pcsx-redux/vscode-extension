'use strict'

const path = require('node:path')
const { runTests } = require('@vscode/test-electron')

async function main () {
  const version = process.env.VSCODE_VERSION || require('../package.json').engines.vscode.replace(/^\^/, '')
  try {
    await runTests({
      version,
      extensionDevelopmentPath: path.resolve(__dirname, '..'),
      extensionTestsPath: path.resolve(__dirname, 'suite', 'index.js'),
      launchArgs: ['--disable-extensions', '--disable-gpu']
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

main()
