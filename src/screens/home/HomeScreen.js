import React from "react";
import {
    Stack,
    Box,
    SimpleGrid
} from "@chakra-ui/react";
import {Filters} from "./Filters";
import {EventCard} from "../../components/EventCard.js";
import {Toolbar} from "../../components/Toolbar";

export const HomeScreen = () => {
    return (
        <>
            <Toolbar/>
            <Box>
                <Stack>
                    <Filters/>
                </Stack>
                <SimpleGrid minChildWidth='400px' spacing='20px'>
                    <EventCard
                        title="Duki"
                        type="Music"
                        location="Estadio Velez Sarsfield"
                        datetime={new Date(2022, 10, 12, 21, 0)}
                        imgUrl="https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/duki_ticketek_960-x-400-4.png"/>
                    <EventCard
                        title="Standup Femenino"
                        type="Theater"
                        location="Complejo Art Media"
                        datetime={new Date(2022, 15, 5, 20, 0)}
                        imgUrl="https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/960_7.png"/>
                    <EventCard
                        title="Duki"
                        type="Music"
                        location="Estadio Velez Sarsfield"
                        datetime={new Date(2022, 15, 5, 20, 0)}
                        imgUrl="https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/duki_ticketek_960-x-400-4.png"/>
                </SimpleGrid>
            </Box>
        </>

    );
};
