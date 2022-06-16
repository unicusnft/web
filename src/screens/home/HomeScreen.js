import React, { useState } from "react";
import { Stack, Box, SimpleGrid } from "@chakra-ui/react";
import { Filters } from "./Filters";
import { EventCard } from "../../components/EventCard.js";
import { Toolbar } from "../../components/Toolbar";
import { colors } from "../../core/theme";
import { events } from "../../data/events.js";

export const HomeScreen = () => {
  const [event, setEvent] = useState("");
  return (
    <>
      <Toolbar />
      <Box backgroundColor="#121212">
        <Stack backgroundColor={colors.backgroundComponent} alignItems="center">
          <Filters event={event} setEvent={setEvent} />
        </Stack>
        <SimpleGrid minChildWidth="700px" spacing="10px" padding="10px">
          {events
            .filter(
              (x) =>
                event === "" ||
                (event !== "" &&
                  x.title
                    .toLocaleLowerCase()
                    .includes(event.toLocaleLowerCase()))
            )
            .map((e) => (
              <EventCard
                key={e.title}
                title={e.title}
                type={e.type}
                location={e.location}
                datetime={e.datetime}
                imgUrl={e.eventImageUrl}
                nftNumber={e.nftNumber}
              />
            ))}
        </SimpleGrid>
      </Box>
    </>
  );
};
