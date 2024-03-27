import type { NumberOrString } from "..";

export type CssSizeUnit =
  | "ch"
  | "cm"
  | "dvh"
  | "dvw"
  | "em"
  | "ex"
  | "in"
  | "lvh"
  | "lvw"
  | "mm"
  | "pc"
  | "pt"
  | "px"
  | "rem"
  | "svh"
  | "svw"
  | "vh"
  | "vmin"
  | "vmax"
  | "vw"
  | "%";
export type SizeProp =
  | NumberOrString<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>
  | `${number}${CssSizeUnit}`;
export type OptionalSizeProp = SizeProp | undefined | null | false;

export function getSizeProp(size: SizeProp): string;
export function getSizeProp(
  size: OptionalSizeProp,
  defaultSize: SizeProp,
): string;
export function getSizeProp(
  size: OptionalSizeProp,
  defaultSize?: SizeProp,
): string {
  switch (typeof size) {
    case "number":
      if (Number.isInteger(size) && size >= 0 && size <= 8) {
        return `var(--gx-size-${size})`;
      }
      throw new Error("Invalid size prop");
    case "string":
      if (/^\d$/g.test(size)) {
        return `var(--gx-size-${size})`;
      }
      return size;
    default:
      if (!size && isSizeProp(defaultSize)) {
        return getSizeProp(defaultSize as SizeProp);
      }
      throw new Error("Invalid size prop");
  }
}

function isSizeProp(value: SizeProp | undefined): value is SizeProp {
  return value !== undefined && value !== null;
}
