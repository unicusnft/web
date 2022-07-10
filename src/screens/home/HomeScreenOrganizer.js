import React from "react";
import {Box, Stack, Text, Wrap} from "@chakra-ui/react";
import {Toolbar} from "../../components/Toolbar";

const TitlePageStyle = {
    fontSize: "25px",
    fontWeight: "bold",
    margin: "20px",
};

export const HomeScreenOrganizer = () => {
    return (
        <>
            <Toolbar/>
            <Box backgroundColor="#121212">
                <Stack alignItems="center">
                    <Text sx={TitlePageStyle}>Mis Eventos</Text>
                </Stack>
                <Wrap spacing="25px" justify="center">
                    Eventos
                </Wrap>
            </Box>
        </>
    );
};
