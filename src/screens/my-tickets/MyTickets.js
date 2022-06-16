import {
  Container,
  Heading,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import {Toolbar} from "../../components/Toolbar";

import { NFTCard } from "../../components/NFTCard";
import { events } from "../../data/events";

export const MyTickets = () => {
  return (
    <>
      <Toolbar/>
      <Container maxW='8xl'>
        <br/>
        <Wrap>
          <WrapItem>
            <Heading>My Tickets</Heading>
          </WrapItem>
        </Wrap>
        <Wrap spacing="25px" justify="center">
          { events.map(e => (
            <WrapItem>
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
  )
}
