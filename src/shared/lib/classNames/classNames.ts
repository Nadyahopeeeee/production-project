
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean), // .filter(Boolean) - фильтруем, если вдруг придет undefined
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className)
  ]
  .join(' ') 
}