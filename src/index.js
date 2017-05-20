
// Use set to avoid duplication
const _data = new Set(global.LH || [])

// Use array to preserve order
const arrayIDs = [
  ['sortByPrice', 'A'],
  ['showRecentlyViewed', 'F']
]

const isDataHasKey = (key) => _data.has(key)

const LH = {
  push: item => _data.add(item),
  isEnabled: string => _data.has(string),
  getEnabledIDs: () => arrayIDs.map(([key, value]) => isDataHasKey(key) ? value : '').join(''),
  reset: () => _data.clear()
}

Object.freeze(LH)

module.exports = LH
