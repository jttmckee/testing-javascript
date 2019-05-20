import StringFun from './stringFun.js'

test('returns first letter as capital, rest unchanged', () => {
  expect(StringFun.capitalize('this is a TEST')).toBe('This is a TEST')
})

test('if first letter is a capital string is unchanged', () => {
  expect(StringFun.capitalize('This is a test.')).toBe('This is a test.')
})

test('reverses string', () => {
  expect(StringFun.reverseString('Hello')).toBe('olleH')
})

test('palindromes dont change', () => {
  expect(StringFun.reverseString('able was I ere I saw elba')).toBe(
    'able was I ere I saw elba'
  )
})
