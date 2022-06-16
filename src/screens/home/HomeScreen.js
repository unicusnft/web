import React from "react";
import {
  Stack,
  Box,
  SimpleGrid
} from "@chakra-ui/react";
import { Filters } from "./Filters";
import { EventCard } from "../../components/EventCard.js";
import { Toolbar } from "../../components/Toolbar";
import { colors } from "../../core/theme";
import { events } from "../../data/events.js";

export const HomeScreen = () => {
  return (
    <>
      <Toolbar/>
      <Box backgroundColor="#121212">
        <Stack backgroundColor={colors.backgroundComponent}>
          <Filters />
        </Stack>
        <SimpleGrid minChildWidth='700px' spacing='20px' padding='10px'>
          {
            events.map(e => <EventCard
              title={e.title}
              type={e.type}
              location={e.location}
              datetime={e.datetime}
              imgUrl={e.eventImageUrl}
              nftNumber={e.nftNumber}
            />)
          }
        </SimpleGrid>
      </Box>

    </>

  )};
