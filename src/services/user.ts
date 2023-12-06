import { fetcher } from "./fetch";
import { User } from "../types/user";
import { wrapPromise } from "../utils/promise";

export function getUserList() {
  const result = fetcher<User[]>("https://jsonplaceholder.typicode.com/users");
  return wrapPromise(result);
}

export function getUser(index: number) {
  const result = fetcher<User>(
    `https://jsonplaceholder.typicode.com/users/${index}`
  );

  return wrapPromise(result);
}
