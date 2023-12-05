import { User } from "../types/user";
import wrapPromise, { Suspended } from "../utils/promise";

export function getUserList(): Suspended<User[]> {
  const result = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => data);

  return wrapPromise(result);
}
