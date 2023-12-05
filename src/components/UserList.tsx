import { User } from "../types/user";
import { Suspended } from "../utils/promise";

interface UserListProps {
  userList: Suspended<User[]>;
}

function UserList({ userList }: UserListProps) {
  return (
    <ul>
      {userList()?.map((user) => (
        <li key={user.id}>
          {user.company.name} {user.name} {user.phone}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
