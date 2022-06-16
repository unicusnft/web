import React, { useState } from "react";
import {
  Container,
  Stack,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import {Toolbar} from "../../components/Toolbar";

import { NFTCard } from "../../components/NFTCard";
import { Filters } from "../../components/Filters";
import { events } from "../../data/events";
import { colors } from "../../core/theme";

export const MyTickets = () => {
  const [event, setEvent] = useState("");
  return (
    <>
      <Toolbar title="My Tickets"/>
      <Stack backgroundColor={colors.backgroundComponent} alignItems="center">
        <Filters event={event} setEvent={setEvent} title="Tickets" description="Search owned tickets"/>
      </Stack>
      <br/>
      <Container maxW='8xl' padding='0px'>
        <Wrap spacing="25px" justify="center">
          { events
              .filter(
                (x) =>
                  x.owned && (event === "" ||
                  (event !== "" &&
                    x.title
                      .toLocaleLowerCase()
                      .includes(event.toLocaleLowerCase())))
              )
              .map(e => (
                <WrapItem>
                  <NFTCard
                    key={e.title}
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
  )
}
