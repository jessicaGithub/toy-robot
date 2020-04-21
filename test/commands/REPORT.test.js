const {expect, test} = require('@oclif/test')

describe('REPORT', () => {
  test
  .stdout()
  .command(['REPORT'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['REPORT', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
