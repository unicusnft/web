import {
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
            <br/>
            <Wrap spacing="15px" justify="center">
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
        </>
    )
}
