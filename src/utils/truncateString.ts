function truncateString(str: string, len: number) {
  if (str.length > len) {
    return `${str.slice(0, len)}...`;
  }
  return str;
}

export default truncateString;
