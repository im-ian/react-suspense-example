import { Suspended, wrapPromise } from "../utils/promise";

const cache = new Map<string, Suspended<unknown>>();

export function fetcher<T>(url: string) {
  if (!cache.has(url)) {
    cache.set(url, getData<T>(url));
  }
  return cache.get(url) as Suspended<T>;
}

function getData<T>(url: string): Suspended<T> {
  const response = new Promise<T>(async (resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

  return wrapPromise(response);
}
