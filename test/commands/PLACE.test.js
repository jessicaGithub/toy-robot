const {expect, test} = require('@oclif/test')

describe('PLACE', () => {
  test
  .stdout()
  .command(['PLACE'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['PLACE', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
