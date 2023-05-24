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
  // signInWithRedirect,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
} from "firebase/auth";
import { auth } from "../firebase";

type Props = {
  children: ReactNode;
};

interface IAuth {
  googleSignIn: () => void;
  logOut: () => void;
  user: User | null;
  createUser: (email: string, password: string) => void;
}

const AuthContext = createContext<IAuth>({} as IAuth);

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
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
      createUser,
    }),
    [googleSignIn, logOut, user, createUser]
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
