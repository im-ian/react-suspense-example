import { fetcher } from "./fetch";
import { User } from "../types/user";

export function getUserList() {
  const result = fetcher<User[]>("https://jsonplaceholder.typicode.com/users");
  return result;
}

export function getUser(index: number) {
  const result = fetcher<User>(
    `https://jsonplaceholder.typicode.com/users/${index}`
  );
  return result;
}
