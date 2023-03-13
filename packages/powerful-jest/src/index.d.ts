import {
  expect,
  it,
  test,
  fit,
  xit,
  xtest,
  describe,
  xdescribe,
  fdescribe,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
  jest as Jest,
} from '@jest/globals'

export {
  expect,
  it,
  test,
  fit,
  xit,
  xtest,
  describe,
  xdescribe,
  fdescribe,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
}

declare global {
  const jest: typeof Jest
}