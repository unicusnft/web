import React from "react";
import {Heading, HStack} from "@chakra-ui/react";
import {Searcher} from "./Searcher";

export const Filters = ({event, setEvent, title, description}) => {
  return (
    <>
      {title ? (
        <HStack
          justifyContent={"space-evenly"}
          marginBottom="20px"
          width={{sm: "70%", md: "25%"}}
          spacing="30px"
        >
          <Heading fontFamily="Montserrat" as='h3' size='md'>
            {title}
          </Heading>
          <Searcher event={event} setEvent={setEvent} description={description}/>
        </HStack>
      ) : (
        <Searcher event={event} setEvent={setEvent} description={description}/>
      )}
    </>
  )
};
