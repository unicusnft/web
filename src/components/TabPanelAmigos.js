import React, { useState } from "react";

const TabPanelAmigos = ({ placeholderInput, users }) => {
  const [userSearch, setUserSearch] = useState(placeholderInput);
  const [search, setSearch] = useState(false);
  const [usersSearched, setUsersSearched] = useState(users);
  const [userSelected, setUserSelected] = useState(null);

  const handleSearch = () => {
    const usersFiltered = users.filter(({ username }) =>
      username.toLowerCase().includes(userSearch.toLowerCase())
    );
    setUsersSearched(usersFiltered);
    setSearch(usersFiltered.length > 0);
  };

  const handleUserSelected = (user) => {
    if (user !== null) {
      setSearch(false);
      setUserSelected(user);
    }
  };
  return <div>TabPanelAmigos</div>;
};

export default TabPanelAmigos;
