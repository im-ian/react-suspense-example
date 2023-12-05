import { Suspense } from "react";

import UserList from "./components/UserList";
import { getUserList } from "./services/user";

function App() {
  const userList = getUserList();

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <h2>User List</h2>
        <UserList userList={userList} />
      </Suspense>
    </div>
  );
}

export default App;
