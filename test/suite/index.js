'use strict'

const assert = require('node:assert')
const vscode = require('vscode')

exports.run = async () => {
  const extension = vscode.extensions.getExtension('grumpycoders.psx-dev')
  assert.ok(extension, 'extension not found')
  await extension.activate()
  assert.ok(extension.isActive, 'extension did not activate')
  const commands = await vscode.commands.getCommands(true)
  assert.ok(commands.includes('psxDev.showPanel'), 'psxDev.showPanel is not registered')
  await vscode.commands.executeCommand('psxDev.showPanel')
  console.log('PSXDEV_TEST_OK vscode ' + vscode.version + ' node ' + process.versions.node)
}
