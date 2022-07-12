import { createContext, useContext, useEffect, useState } from "react";
import {
  LocalStorageGetCurrentUser,
  LocalStorageSeCurrentUser,
} from "../utils/helpers";
import { useNavigate } from "react-router";
import { traer_usuarios } from "../services/Calls";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  let [allUsers, setAllUsers] = useState([]);
  let [user, setUser] = useState(LocalStorageGetCurrentUser());
  let navigate = useNavigate();

  const setCurrentUser = (user) => {
    LocalStorageSeCurrentUser(user);
    setUser(user);

    // redirect to homepage
    navigate("/");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      return traer_usuarios();
    };

    fetchUsers().then((users) => {
      setAllUsers(users);
      if (!user) {
        setCurrentUser(users?.[0]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let value = { currentUser: user, setCurrentUser, allUsers };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
