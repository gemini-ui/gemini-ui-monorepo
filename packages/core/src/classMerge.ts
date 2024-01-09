export function classMerge(...args: (string | null | undefined)[]): string {
  return args.filter(Boolean).join(" ");
}
