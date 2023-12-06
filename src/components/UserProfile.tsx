import { getUser } from "../services/user";

interface UserProps {
  userId: number;
}

function UserProfile({ userId }: UserProps) {
  const userData = getUser(userId);

  return <div>{JSON.stringify(userData)}</div>;
}

export default UserProfile;
