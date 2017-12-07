export function noEmptyInput(input, minLen = 1, maxLen = 255) {  
  if (!input) return false
  if (input.match(/^[\s]*$/)) return false
  const len = input.length
  if (len < minLen || len > maxLen) return false
  return true
}
