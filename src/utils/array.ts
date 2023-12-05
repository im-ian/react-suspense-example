type FillFunction<T> = (index: number) => T;

export function range<T>(start: number, end: number, fill?: FillFunction<T>) {
  const fillWith = fill || ((index) => index + start);

  return Array.from({ length: end - start + 1 }, (_, index) => fillWith(index));
}
