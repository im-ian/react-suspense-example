const cache = new Map<string, Promise<unknown>>();

export function fetcher<T>(url: string): Promise<T> {
  if (!cache.has(url)) {
    cache.set(url, getData<T>(url));
  }
  return cache.get(url) as Promise<T>;
}

function getData<T>(url: string): Promise<T> {
  return new Promise(async (resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch(reject);
  });
}
