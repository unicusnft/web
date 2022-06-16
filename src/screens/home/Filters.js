import React from "react";
import { HStack } from "@chakra-ui/react";
import { Searcher } from "../../components/Searcher";

export const Filters = ({ event, setEvent }) => {
  return (
    <HStack
      justifyContent={"space-evenly"}
      marginBottom="20px"
      width={{ sm: "70%", md: "25%" }}
    >
      <Searcher event={event} setEvent={setEvent} />
    </HStack>
  );
};
