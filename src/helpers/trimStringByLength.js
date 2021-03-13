export default function trimStringByLength(str, maxLength) {
  return maxLength > str.length ? str : `${str.slice(0, maxLength)}...`;
}
