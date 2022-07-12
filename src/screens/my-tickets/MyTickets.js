import React, { useState } from "react";
import { Container, Stack, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { Toolbar } from "../../components/Toolbar";

import { NFTCard } from "../../components/NFTCard";
import { Filters } from "../../components/Filters";
import { events } from "../../data/events";

const TitlePageStyle = {
  fontSize: "25px",
  fontWeight: "bold",
  margin: "20px",
};

export const MyTickets = () => {
  const [event, setEvent] = useState("");
  return (
    <>
      <Toolbar title="Mis tickets" />
      <Stack alignItems="center">
        <Text sx={TitlePageStyle}>Mis tickets</Text>
      </Stack>
      <Stack alignItems="center" px={4}>
        <Filters
          event={event}
          setEvent={setEvent}
          description="Buscar en mis tickets"
        />
      </Stack>
      <br />
      <Container maxW="8xl" padding="0px" mb={5}>
        <Wrap spacing="25px" justify="center">
          {events
            .filter(
              (x) =>
                x.owned &&
                (event === "" ||
                  (event !== "" &&
                    x.title
                      .toLocaleLowerCase()
                      .includes(event.toLocaleLowerCase())))
            )
            .map((e) => (
              <WrapItem key={e.title}>
                <NFTCard
                  title={e.title}
                  type={e.type}
                  location={e.location}
                  datetime={e.datetime}
                  imgUrl={e.ticketImageUrl}
                  nftNumber={e.nftNumber}
                />
              </WrapItem>
            ))}
        </Wrap>
      </Container>
    </>
  );
};
