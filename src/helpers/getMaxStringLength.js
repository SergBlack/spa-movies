export default function getMaxStringLength(str, maxLength) {
  return maxLength > str.length ? str : `${str.slice(0, maxLength)}...`;
}
