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
// import { NFTCard } from "../../components/NFTCard.js";
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
          {/* <NFTCard */}
          {/*   title="Duki" */}
          {/*   type="Music" */}
          {/*   location="Estadio Velez Sarsfield" */}
          {/*   datetime={new Date(2022, 10, 12, 21, 0)} */}
          {/*   imgUrl="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ST5Q635BZZHVTFJ3WN3E7NFF5A.jpg" */}
          {/*   nftNumber={547532}/> */}
          {/* <EventCard */}
          {/*   title="Duki" */}
          {/*   type="Music" */}
          {/*   location="Estadio Velez Sarsfield" */}
          {/*   datetime={new Date(2022, 10, 12, 21, 0)} */}
          {/*   imgUrl="https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/duki_ticketek_960-x-400-4.png"/> */}
          {/* <EventCard */}
          {/*   title="Standup Femenino" */}
          {/*   type="Theater" */}
          {/*   location="Complejo Art Media" */}
          {/*   datetime={new Date(2022, 15, 5, 20, 0)} */}
          {/*   imgUrl="https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/960_7.png"/> */}
          {/* <EventCard */}
          {/*   title="Duki" */}
          {/*   type="Music" */}
          {/*   location="Estadio Velez Sarsfield" */}
          {/*   datetime={new Date(2022, 15, 5, 20, 0)} */}
          {/*   imgUrl="https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/duki_ticketek_960-x-400-4.png"/> */}
        </SimpleGrid>
      </Box>

    </>

  )};
