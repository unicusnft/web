import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { colors } from "../core/theme";
import { SearchIcon } from "@chakra-ui/icons";

export const Searcher = ({ event, setEvent, description }) => {
  return (
    <InputGroup borderRadius={4}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color={colors.white} />}
      />
      <Input
        textColor={colors.white}
        placeholder={description}
        focusBorderColor={colors.mainColor}
        onChange={(text) => setEvent(text.target.value)}
      />
    </InputGroup>
  );
};
