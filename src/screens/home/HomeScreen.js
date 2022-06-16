import React, { useState } from "react";
import {
  Stack,
  Wrap,
  WrapItem,
  Box
} from "@chakra-ui/react";
import { Filters } from "../../components/Filters.js";
import { EventCard } from "../../components/EventCard.js";
import { Toolbar } from "../../components/Toolbar";
import { events } from "../../data/events.js";

export const HomeScreen = () => {
  const [event, setEvent] = useState("");
  return (
    <>
      <Toolbar/>
      <Box backgroundColor="#121212">
        <Stack alignItems="center" px={4} mt={5} mb={2}>
          <Filters event={event} setEvent={setEvent} description="Search an event"/>
        </Stack>

        <br/>
        <Wrap spacing="25px" justify="center">
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
              <WrapItem>
                <EventCard
                  key={e.title}
                  title={e.title}
                  type={e.type}
                  location={e.location}
                  datetime={e.datetime}
                  imgUrl={e.eventImageUrl}
                  nftNumber={e.nftNumber}
                />
              </WrapItem>
            ))}
        </Wrap>
      </Box>
    </>
  );
};
