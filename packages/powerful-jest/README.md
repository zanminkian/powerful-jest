# @zanminkian/powerful-jest

[![](https://img.shields.io/npm/l/@zanminkian/powerful-jest.svg)](https://github.com/zanminkian/powerful-jest/blob/master/LICENSE)
[![](https://img.shields.io/npm/v/@zanminkian/powerful-jest.svg)](https://www.npmjs.com/package/@zanminkian/powerful-jest)
[![](https://img.shields.io/npm/dm/@zanminkian/powerful-jest.svg)](https://www.npmjs.com/package/@zanminkian/powerful-jest)
[![](https://img.shields.io/librariesio/release/npm/@zanminkian/powerful-jest)](https://www.npmjs.com/package/@zanminkian/powerful-jest)

Make jest powerful.

## Features

- 100% compatible with [jest](https://jestjs.io/). Use `@zanminkian/powerful-jest` just like `jest`.
- Support typescript out-of-box.
- Reasonable defaults of best practices. Most of projects work pretty well in **zero configs**.

## Usage

1. Uninstall `jest`, `@types/jest` and `ts-jest` if your project has installed them.

```sh
pnpm remove jest @types/jest ts-jest
```

2. Install `@zanminkian/powerful-jest`.
```sh
pnpm add -D @zanminkian/powerful-jest
```

3. Let's create a `add.ts` file.
```typescript
export function add(arg1: number, arg2: number): number {
  return arg1 + arg2
}
```

4. Let's create a `add.spec.ts` file.
```typescript
import { describe, beforeEach, it, expect } from '@zanminkian/powerful-jest'
import { add } from './add'

describe('add', () => {
  beforeEach(() => {
    // It will be executed before each case.
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should return 2', () => {
    expect(add(1, 1)).toBe(2)
  })
})
```

4. Run `pnpm jest` to test.

## Configs

1. You can add more cli configs after `pnpm jest` command. For example, run `pnpm jest --coverage` to collect test coverage. Run `pnpm jest -h` for more cli options information.
2. You can add a `jest.config.js` file on the root of your project. Check [Jest official doc](https://jestjs.io/docs/configuration) for more information.

## How it works

We will append some reasonable default cli options if you don't add them when you run `pnpm jest`.
- `--transform='{"^.+\\\\.tsx?$":"ts-jest"}'`: This option transforms the typescript file, so that we can support typescript project without any other configs and installation.
- `--passWithNoTests`: This option makes cli end without errors if there are no tests. You can override this default by `pnpm jest --passWithNoTests=false`.
- `--collectCoverageFrom='**/src/**/*.{(j|t)s,(j|t)sx}'`: This option specifies where the test coverage is collected from. You can override it as you want: `pnpm jest --collectCoverageFrom='**/lib/**/*.js'`

## License

MIT
