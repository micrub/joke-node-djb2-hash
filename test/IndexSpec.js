import { expect } from 'chai';
import Core from '../src/index';

describe('Core module export', () => {

  it('should be instance of Object', () => {
    expect(Core).to.be.instanceOf(Object)
  })
  it('should have a djb2 function.', () => {
    expect(Core.djb2).to.be.instanceOf(Function)
  })

})
