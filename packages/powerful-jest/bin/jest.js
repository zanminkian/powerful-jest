#!/usr/bin/env node
import process from 'node:process'
import { getConfigs } from '../src/cli.js'

async function main() {
  const configs = await getConfigs()
  process.argv.push(...configs)

  await import('jest/bin/jest')
}

main()
