const {expect, test} = require('@oclif/test')

describe('MOVE', () => {
  test
  .stdout()
  .command(['MOVE'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['MOVE', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
