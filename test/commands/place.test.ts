import {expect, test} from '@oclif/test'

describe('place', () => {
  test
  .stdout()
  .command(['place', '1', '1', 'north'])
  .it('toy-robot place 1 1 north', ctx => {
    expect(ctx.stdout).to.include('Success!')
  })

  test
  .stdout()
  .command(['place', '4', '4', 'south'])
  .it('toy-robot place 4 4 south', ctx => {
    expect(ctx.stdout).to.include('Success!')
  })

  test
  .stdout()
  .command(['place', '5', '4', 'south'])
  .it('toy-robot place 5 4 south', ctx => {
    expect(ctx.stdout).to.include('Cannot place the robot outside of the grid!')
  })
})
