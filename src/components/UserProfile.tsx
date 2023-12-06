import { getUser } from "../services/user";

interface UserProps {
  userId: number;
}

function UserProfile({ userId }: UserProps) {
  const userData = getUser(userId).read();

  if (!userData?.id) {
    throw new Error("User not found");
  }

  return <div>{JSON.stringify(userData)}</div>;
}

export default UserProfile;
