import * as React from "react";
import {
  useLocation,
  Navigate,
} from "react-router-dom";


interface AuthContextType {
  user: string;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}


const AuthContext = React.createContext<AuthContextType>(null!);

function useAuth() {
  return React.useContext(AuthContext);
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
