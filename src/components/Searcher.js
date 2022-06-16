import React from "react";
import { InputGroup, InputLeftElement, Input, color } from "@chakra-ui/react";
import { colors } from "../core/theme";
import { SearchIcon } from "@chakra-ui/icons";

export const Searcher = ({ event, setEvent }) => {
  return (
    <InputGroup borderRadius={4}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color={colors.white} />}
      />
      <Input
        textColor={colors.white}
        placeholder="Search an event"
        focusBorderColor={colors.mainColor}
        onChange={(text) => setEvent(text.target.value)}
      />
    </InputGroup>
  );
};
