import {
  useContext,
  createContext,
  FC,
  ReactNode,
  useMemo,
  useEffect,
  useState,
} from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
  User,
} from "firebase/auth";
import { auth } from "../firebase";

type Props = {
  children: ReactNode;
};
// type IUser = {
//   displayName: string | null;
// };

interface IAuth {
  googleSignIn: () => void;
  logOut: () => void;
  user: User | null;
}

const AuthContext = createContext<IAuth>({} as IAuth);

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
    localStorage.clear();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("USER", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const AuthContextValue = useMemo(
    () => ({
      googleSignIn,
      logOut,
      user,
    }),
    [googleSignIn, logOut, user]
  );

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
