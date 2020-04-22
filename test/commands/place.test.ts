import {expect, test} from '@oclif/test'

describe('place', () => {
  test
  .stdout()
  .command(['place', '1', '1', 'north'])
  .it('runs place 1 1 north', ctx => {
    expect(ctx.stdout).to.equal('Success!')
  })

  test
  .stdout()
  .command(['place', '4', '4', 'south'])
  .it('runs place 4 4 south', ctx => {
    expect(ctx.stdout).to.equal('Success!')
  })

  test
  .stdout()
  .command(['place', '5', '4', 'south'])
  .it('runs place 5 4 south', ctx => {
    expect(ctx.stdout).to.equal('Cannot place the robot outside of the grid!')
  })
})
