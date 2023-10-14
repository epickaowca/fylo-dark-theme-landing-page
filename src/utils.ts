export function firstLetterLowerCase(string: string) {
  const firstLetter = string[0].toLowerCase();
  return `${firstLetter} ${string.slice(1, -1)}`;
}
