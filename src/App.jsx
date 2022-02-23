import React from "react";
import { useMoralis } from "react-moralis";

const App = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div className="container pt-5 text-center">
        <button className="btn btn-primary" onClick={() => authenticate()}>Authenticate</button>
      </div>
    )
  }

  return (
    <div className="container pt-5 text-center">
      <h1>Welcome {user.get("username")}</h1>
    </div>
  )
}

export default App
