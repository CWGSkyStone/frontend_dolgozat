export function calcArea(e: number, f: number): number {
  if (![e, f].every(value => Number.isFinite(value) && value > 0)) {
    throw new RangeError('Az átlók véges, pozitív számok legyenek.');
  }
  const area = (Math.max(e, f) / 2) * Math.min(e, f);
  if (!Number.isFinite(area) || area <= 0) throw new RangeError('Nem ábrázolható terület.');
  return area;
}
