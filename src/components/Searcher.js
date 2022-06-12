import React from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
} from "@chakra-ui/react";
import { colors } from "../core/theme";
import { HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const Searcher = () => {
  const [search, setSearch] = React.useState("Search an event");

  return (
    <Editable
      textAlign="center"
      textColor={colors.white}
      borderColor={colors.white}
      borderWidth={0.1}
      borderRadius={3}
      defaultValue={search}
      fontSize="2xl"
      minWidth={300}
      maxWidth="25%"
    >
      <HStack marginLeft={"10px"}>
        <SearchIcon boxSize={5} />
        <EditablePreview fontSize={16} />
        <Input
          as={EditableInput}
          onChange={(text) => setSearch(text.target.value)}
        />
      </HStack>
    </Editable>
  );
};
