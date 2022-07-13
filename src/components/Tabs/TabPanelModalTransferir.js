import React, {useState} from "react";
import {colors} from "../../core/theme";
import {Fragment} from "react";
import {
  Button,
  InputGroup,
  Input,
  InputRightElement,
  VStack,
  Flex,
  Divider,
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import BoxUsuario from "../Boxes/BoxUsuario";

const TabPanelModalTransferir = ({
                                   placeholderInput,
                                   users,
                                   initialUsers,
                                   initialSearch,
                                   setTransferUser,
                                   setIsUserSelected,
                                 }) => {
  const [userSearch, setUserSearch] = useState(placeholderInput);
  const [search, setSearch] = useState(initialSearch);
  const [usersSearched, setUsersSearched] = useState(initialUsers);
  const [userSelected, setUserSelected] = useState(null);

  const handleSearch = () => {
    const usersFiltered = users.filter(({username}) =>
      username.toLowerCase().includes(userSearch.toLowerCase())
    );
    setUsersSearched(usersFiltered);
    setSearch(usersFiltered.length > 0);
  };

  const handleUserSelected = (user) => {
    setIsUserSelected(false);
    if (user !== null) {
      setSearch(false);
      setUserSelected(user);
      setIsUserSelected(true);
      setTransferUser(user);
    }
  };
  return (
    <>
      <InputGroup borderRadius={4}>
        <InputRightElement width="30%">
          <Button
            size="sm"
            onClick={handleSearch}
            leftIcon={<SearchIcon/>}
            color={colors.mainColor}
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
          borderRadius={4}
          color={colors.white}
        >
          {usersSearched.map((user, idx) => {
            return (
              <Fragment key={user.username}>
                {idx > 0 && <Divider/>}
                <Flex
                  width="90%"
                  margin={1}
                  as="button"
                  onClick={() => handleUserSelected(user)}
                  color={colors.white}
                  borderRadius={4}
                >
                  <BoxUsuario {...user} />
                </Flex>
              </Fragment>
            );
          })}
        </VStack>
      )}
      {userSelected != null && (
        <Flex mt={5} padding={2} borderRadius={4} border="1px solid #E2E8F0">
          <BoxUsuario {...userSelected} />
        </Flex>
      )}
    </>
  );
};

export default TabPanelModalTransferir;
