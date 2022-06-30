import React, { useState } from "react";
import { colors } from "../../core/theme";
import {
  Button,
  InputGroup,
  Input,
  InputRightElement,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import BoxUsuario from "../Boxes/BoxUsuario";

const TabPanelModalTransferir = ({
  placeholderInput,
  users,
  initialUsers,
  initialSearch,
}) => {
  const [userSearch, setUserSearch] = useState(placeholderInput);
  const [search, setSearch] = useState(initialSearch);
  const [usersSearched, setUsersSearched] = useState(initialUsers);
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
  return (
    <>
      <InputGroup borderRadius={4}>
        <InputRightElement width="25%">
          <Button
            size="sm"
            mr={2}
            onClick={handleSearch}
            leftIcon={<SearchIcon />}
          >
            Buscar
          </Button>
        </InputRightElement>
        <Input
          placeholder={userSearch}
          onChange={(text) => setUserSearch(text.target.value)}
          focusBorderColor={colors.mainColor}
        />
      </InputGroup>
      {search && (
        <VStack
          pb={3}
          pt={2}
          mt={4}
          border="1px solid #E2E8F0"
          borderRadius={5}
        >
          {usersSearched.map((user) => {
            return (
              <Flex
                key={user.username}
                width="90%"
                margin={2}
                as="button"
                onClick={() => handleUserSelected(user)}
                color={colors.backgroundComponent}
                borderRadius={4}
              >
                <BoxUsuario {...user} />
              </Flex>
            );
          })}
        </VStack>
      )}
      {userSelected != null && (
        <Flex
          mt={5}
          padding={2}
          borderRadius={4}
          backgroundColor="#E2E8F0"
          color={colors.backgroundComponent}
        >
          {<BoxUsuario {...userSelected} />}
        </Flex>
      )}
    </>
  );
};

export default TabPanelModalTransferir;
