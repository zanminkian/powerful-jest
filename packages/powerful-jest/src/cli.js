const { join, resolve } = require('node:path')
const { stat } = require('node:fs/promises')
const { cosmiconfigSync } = require('cosmiconfig')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

async function getTsJestPath(basePath = __dirname) {
  const result = resolve(basePath, 'node_modules/ts-jest')
  const isDir = (await stat(result).catch(() => undefined))?.isDirectory()
  if (isDir)
    return result
  if (basePath === '/')
    return 'ts-jest'
  return await getTsJestPath(resolve(basePath, '..'))
}

exports.getConfigs = async function getConfigs() {
  const { argv } = yargs(hideBin(process.argv))
  const cliConfig = argv instanceof Promise ? await argv : argv
  const configPath = cliConfig['config'] || cliConfig['c']
  const fileConfig = typeof configPath === 'string' ? require(resolve(process.cwd(), configPath)) : cosmiconfigSync('jest').search(join(__dirname, '..'))?.config ?? {}

  const result = [
    ['transform', `{"^.+\\\\.tsx?$":"${await getTsJestPath()}"}`],
    ['passWithNoTests'],
    ['collectCoverageFrom', '**/src/**/*.ts'],
  ].reduce(
    (res, cur) => (fileConfig[cur[0]] === undefined && cliConfig[cur[0]] === undefined) ? res.concat(`--${cur.join('=')}`) : res,
    [],
  )

  return result
}
