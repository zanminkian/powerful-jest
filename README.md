# @zanminkian/powerful-jest

[![License](https://img.shields.io/npm/l/@zanminkian/powerful-jest.svg)](https://github.com/zanminkian/powerful-jest/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@zanminkian/powerful-jest.svg)](https://www.npmjs.com/package/@zanminkian/powerful-jest)
[![Downloads](https://img.shields.io/npm/dm/@zanminkian/powerful-jest.svg)](https://www.npmjs.com/package/@zanminkian/powerful-jest)
[![Dependencies](https://img.shields.io/librariesio/release/npm/@zanminkian/powerful-jest)](https://www.npmjs.com/package/@zanminkian/powerful-jest)
[![Size](https://packagephobia.com/badge?p=@zanminkian/powerful-jest)](https://packagephobia.com/result?p=@zanminkian/powerful-jest)

Empower your Jest testing experience.

## Features

- 100% compatible with [Jest](https://jestjs.io/). Use `@zanminkian/powerful-jest` just like you would use `jest`.
- Out-of-the-box TypeScript support.
- Sensible defaults adhering to best practices. Most projects work seamlessly with **zero configuration**.
- Integrated [supertest](https://www.npmjs.com/package/supertest) in it.

## Usage

1. Uninstall `jest`, `@types/jest`, and `ts-jest` if they are already installed in your project.

```sh
pnpm remove jest @types/jest ts-jest
```

2. Install `@zanminkian/powerful-jest`.
```sh
pnpm add -D @zanminkian/powerful-jest
```

3. Create an `app.ts` file.

```typescript
import express from 'express'

const app = express()
app.use((req, res) => {
  res.json({ hello: 'world' })
})

export default app
```

4. Create an `app.spec.ts` file.

```typescript
import { describe, beforeEach, it, expect, supertest } from '@zanminkian/powerful-jest'
import app from './app'

describe('app', () => {
  beforeEach(() => {
    // This will be executed before each test case.
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should be 2', () => {
    expect(1 + 1).toBe(2)
  })
  it('should success', () => {
    supertest(app).get('/').expect({ hello: 'world' })
  })
})
```

5. Run `pnpm jest` to execute tests.

## Configuration

1. Add more CLI configurations after the `pnpm jest` command. For example, run `pnpm jest --coverage` to collect test coverage. Run `pnpm jest -h` for more CLI options information.
2. Add a `jest.config.js` file in the root of your project. Consult the [official Jest documentation](https://jestjs.io/docs/configuration) for more information.

## How it works

If you don't include CLI options when running `pnpm jest`, we will append some sensible defaults:
- `--transform='{"^.+\\\\.tsx?$":"ts-jest"}'`: This option transforms TypeScript files, so you can support TypeScript projects without additional configurations or installations.
- `--passWithNoTests`: This option prevents the CLI from producing errors if no tests are found. You can override this default by `pnpm jest --passWithNoTests=false`.
- `--collectCoverageFrom='**/src/**/*.{(j|t)s,(j|t)sx}'`: This option specifies the location for collecting test coverage. Override it as needed: `pnpm jest --collectCoverageFrom='**/lib/**/*.js'`

## License

MIT
