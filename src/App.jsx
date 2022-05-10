import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";

const App = () => {
  const { authenticate, isWeb3Enabled, enableWeb3, isAuthenticated, user, logout, isAuthenticating, isWeb3EnableLoading  } = useMoralis();

  const useAuth = () => {
    authenticate()
    console.log(isAuthenticated)
  }
  const useWallet = () => {
    authenticate({ provider: "walletconnect" })
    console.log('Fired')
  }

  const logMEout = () => {
    logout()
  }

  // useEffect(() => {
  //   if (!isWeb3Enabled) {
  //     enableWeb3({ provider: "walletconnect", chainId: 56 });
  //     console.log("web3 activated");
  //   } else {
  //     authenticate({ provider: "walletconnect" })
  //     // enableWeb3({ provider: "walletconnect", chainId: 56 });
  //     console.log(isWeb3Enabled, isAuthenticated)
  //   }
  // }, [isWeb3Enabled, isAuthenticated, enableWeb3]);

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: 'walletconnect' });
      console.log(connectorId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);


  if (!isAuthenticated) {
    return (
      <div>
        <div className="container pt-5 text-center">
        <button className="btn btn-primary" onClick={() => useAuth()}>Authenticate</button>
      </div>
        <div className="container pt-5 text-center">
        <button className="btn btn-primary" onClick={() => useWallet()}>Authenticate Walletconncet</button>
      </div>
      </div>
    )
  }

  return (
    <div className="container pt-5 text-center">
      <h1>Welcome {user.get("username")}</h1>
      <button className="btn btn-danger" onClick={() => logMEout()} disabled={isAuthenticating}>
        Log out
      </button>
    </div>
  )
}

export default App
