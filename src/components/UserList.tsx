import { getUserList } from "../services/user";

interface UserListProps {
  onUserClick: (id: number) => void;
}

function UserList({ onUserClick }: UserListProps) {
  const userList = getUserList().read();

  return (
    <ul>
      {(userList || []).map((user) => (
        <li key={user.id}>
          <p style={{ cursor: "pointer" }} onClick={() => onUserClick(user.id)}>
            {user.company.name} {user.name} {user.phone}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
