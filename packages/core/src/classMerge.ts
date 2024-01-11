export function classMerge(
  ...args: (string | null | undefined | false)[]
): string {
  return args.filter(Boolean).join(" ");
}
