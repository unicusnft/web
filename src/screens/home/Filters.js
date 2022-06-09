import React from "react";
import { HStack } from "@chakra-ui/react";
import { Searcher } from "../../components/Searcher";

export const Filters = () => {
  return (
    <HStack justifyContent={"space-evenly"}>
      <Searcher />
    </HStack>
  );
};
