import { expect } from 'chai';
import Core from '../src/index';

describe('Core module export', () => {

  it('should be instance of Object', () => {
    expect(Core).to.be.instanceOf(Object)
  })

})
