const { licenseKeyFormatting } = require('./index')

describe('licenseKeyFormatting', () => {
  it('should return a string formatted string', () => {
    expect(licenseKeyFormatting('5F3Z-2e-9-w', 4)).toBe('5F3Z-2E9W')
    expect(licenseKeyFormatting('2-5g-3-J', 2)).toBe('2-5G-3J')
    expect(licenseKeyFormatting('2-4A0r7-4k', 3)).toBe('24-A0R-74K')
  })
  it('should return an empty string', () => {
    expect(licenseKeyFormatting('', 2)).toBe('')
  })
})
