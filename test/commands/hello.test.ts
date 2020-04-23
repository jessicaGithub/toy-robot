import {expect, test} from '@oclif/test'

describe('hello', () => {
  test
  .stdout()
  .command(['hello'])
  .it('runs toy-robot hello', ctx => {
    expect(ctx.stdout).to.contain('Hello to you too!')
  })

})
