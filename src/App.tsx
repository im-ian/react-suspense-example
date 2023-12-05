import { Suspense, useState } from "react";

import UserList from "./components/UserList";
import Flex from "./components/Flex";
import UserProfile from "./components/UserProfile";

function App() {
  const [selectedUser, setSelectedUser] = useState<number>();

  return (
    <div>
      <h2>Manage User</h2>
      <Flex>
        <Flex.Item>
          <Suspense fallback={<div>Loading...</div>}>
            <UserList onUserClick={(id) => setSelectedUser(id)} />
          </Suspense>
        </Flex.Item>
        <Flex.Item>
          <Suspense fallback={<div>Loading...</div>}>
            {selectedUser && <UserProfile userId={selectedUser} />}
          </Suspense>
        </Flex.Item>
      </Flex>
    </div>
  );
}

export default App;
