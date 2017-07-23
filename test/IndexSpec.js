import { expect } from 'chai';
import Core from '../src/index';

describe('Core module export', () => {
  const results = [ [ "test", 2090756197 ], [[101,102],5863344] ];

  it('should be instance of Object', () => {
    expect(Core).to.be.instanceOf(Object)
  })
  it('should have a djb2 function.', () => {
    expect(Core.djb2).to.be.instanceOf(Function)
  })

  describe('djb2 function tests.', () => {
    it('should return Error on non string/array or empty string/array.', () => {
      expect(Core.djb2()).to.be.instanceOf(Object)
      expect(Core.djb2("")).to.be.instanceOf(Object)
      expect(Core.djb2({})).to.be.instanceOf(Object)
      expect(Core.djb2([])).to.be.instanceOf(Object)
    })
    for (var i = 0, l = results.length; i < l; i ++) {
      var result = results[i];
      let key = result[0];
      let hash = result[1];
      it('should return `'+ hash +'` for `'+ key +'`', () => {
        expect(Core.djb2(key)).to.be.eq(hash)
      })
    }

  })

})
