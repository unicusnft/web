import React, { useState } from "react";
import { Stack, Wrap, WrapItem, Box, Text } from "@chakra-ui/react";
import { Filters } from "../../components/Filters.js";
import { EventCard } from "../../components/EventCard.js";
import { Toolbar } from "../../components/Toolbar";
import { events } from "../../data/events.js";

const TitlePageStyle = {
  fontSize: "25px",
  fontWeight: "bold",
  margin: "20px",
};

export const HomeScreen = () => {
  const [event, setEvent] = useState("");
  return (
    <>
      <Toolbar />
      <Box backgroundColor="#121212">
        <Stack alignItems="center">
          <Text sx={TitlePageStyle}>Eventos</Text>
        </Stack>
        <Stack alignItems="center" px={4}>
          <Filters
            event={event}
            setEvent={setEvent}
            description="Buscar un evento"
          />
        </Stack>
        <br />
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
              <WrapItem key={e.title}>
                <EventCard
                  id={e.id}
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
