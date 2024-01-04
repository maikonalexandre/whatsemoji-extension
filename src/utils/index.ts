export function buildEmoji(arr: any[]) {
  return String.fromCodePoint(...arr.map((code) => parseInt(code, 16)));
}
