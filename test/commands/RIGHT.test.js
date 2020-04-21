const {expect, test} = require('@oclif/test')

describe('RIGHT', () => {
  test
  .stdout()
  .command(['RIGHT'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['RIGHT', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
