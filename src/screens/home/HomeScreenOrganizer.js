import React from "react";
import {Box, IconButton, Stack, Text, Wrap} from "@chakra-ui/react";
import {Toolbar} from "../../components/Toolbar";
import {AiOutlinePlus} from "react-icons/ai";
import {useNavigate} from "react-router";

const TitlePageStyle = {
    fontSize: "25px",
    fontWeight: "bold",
    margin: "20px",
};

export const HomeScreenOrganizer = () => {
    const navigate = useNavigate();

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
                <Box
                    position='fixed'
                    bottom='25px'
                    right='25px'
                    zIndex={1}
                >
                    <IconButton
                        onClick={() => navigate('/event-form')}
                        colorScheme='main'
                        aria-label='Ver carrito'
                        size='lg'
                        isRound
                        icon={<AiOutlinePlus color='black' size="22" mr={1}/>}
                    />
                </Box>
            </Box>
        </>
    );
};
