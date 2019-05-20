
const StringFun = (() => {
  const capitalize = (inputString) => {
    return (inputString.charAt(0).toUpperCase() + inputString.slice(1))
  }
  const reverseString = (inputString) => {
    return inputString.split('').reverse().join('')
  }
  return {
    capitalize,
    reverseString
  }
})()

export default StringFun
