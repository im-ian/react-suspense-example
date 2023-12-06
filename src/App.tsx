import { Suspense, useState } from "react";

import Flex from "./components/Flex";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [selectedUser, setSelectedUser] = useState<number>();

  return (
    <div>
      <h2>Manage User</h2>
      <Flex>
        <Flex.Item>
          <Suspense fallback={<div>Loading...</div>}>
            <UserList onUserClick={(id) => setSelectedUser(id)} />

            <button onClick={() => setSelectedUser(-1)}>get error user</button>
          </Suspense>
        </Flex.Item>
        <Flex.Item>
          <ErrorBoundary
            key={selectedUser}
            fallback={(error, errorInfo) => {
              return (
                <div>
                  <h1>Something went wrong.</h1>
                  <h3>{error?.message}</h3>
                  <pre>{error?.stack}</pre>
                  <pre>{errorInfo?.componentStack}</pre>
                </div>
              );
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              {selectedUser && <UserProfile userId={selectedUser} />}
            </Suspense>
          </ErrorBoundary>
        </Flex.Item>
      </Flex>
    </div>
  );
}

export default App;
