import assert from 'assert'
import { describe, it, beforeEach, afterEach } from 'mocha'
import LH from '../src/index'

describe('LH', function () {
  it('returns an object', function () {
    assert(typeof LH === 'object')
  })
  it('exposes the function push', function () {
    assert(typeof LH.push === 'function')
  })
  it('exposes the function isEnabled', function () {
    assert(typeof LH.isEnabled === 'function')
  })
  it('exposes the function getEnabledIDs', function () {
    assert(typeof LH.getEnabledIDs === 'function')
  })

  describe('push', function () {
    it('pushes new items into state', function () {
      LH.push('largeButtons')
      assert(LH.isEnabled('largeButtons'))
    })
  })

  describe('reset', function () {
    it('clears state', function () {
      LH.push('largeButtons')
      LH.reset()
      assert.equal(LH.isEnabled('largeButtons'), false)
    })
  })

  describe('isEnabled', function () {
    beforeEach(() => {
      LH.push('largeButtons')
    })
    it('returns a boolean', function () {
      assert(typeof LH.isEnabled() === 'boolean')
    })
    it('returns true when property is present', function () {
      assert(LH.isEnabled('largeButtons'))
    })
    it('returns false when property is NOT present', function () {
      assert.equal(LH.isEnabled('missingProp'), false)
    })
  })

  describe('getEnabledIDs', function () {
    afterEach(() => {
      LH.reset()
    })
    it('returns a string', function () {
      assert(typeof LH.getEnabledIDs() === 'string')
    })

    it('returns a an empty string when no IDs have been defined', function () {
      assert(LH.getEnabledIDs() === '')
    })

    it('returns correct string when showRecentlyViewed has been defined', function () {
      LH.push('showRecentlyViewed')
      assert.equal(LH.getEnabledIDs(), 'F')
    })

    it('returns correct string when sortByPrice has been defined', function () {
      LH.push('sortByPrice')
      assert.equal(LH.getEnabledIDs(), 'A')
    })

    it('returns correct string when all IDs have been defined', function () {
      LH.push('sortByPrice')
      LH.push('showRecentlyViewed')
      assert.equal(LH.getEnabledIDs(), 'AF')
    })
  })
})
