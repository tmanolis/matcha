import { createContext, PropsWithChildren, useContext, useState } from "react";
import { User } from "../interfaces/User";

type AuthContextType = {
  user: User | null;
  signIn: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>(
  null as unknown as AuthContextType
);

type AuthProviderProps = PropsWithChildren;

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

type AuthContextTypeProtected = {
  user: User;
  signIn: (user: User) => void;
  logout: () => void;
};

export const useAuthConnected = (): AuthContextTypeProtected => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context as AuthContextTypeProtected;
};

export default AuthProvider;
