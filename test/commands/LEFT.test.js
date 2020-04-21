const {expect, test} = require('@oclif/test')

describe('LEFT', () => {
  test
  .stdout()
  .command(['LEFT'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['LEFT', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
