#!/usr/bin/env node
const { getConfigs } = require('../src/cli')

async function main() {
  const configs = await getConfigs()
  process.argv.push(...configs)

  require('jest/bin/jest')
}

main()
