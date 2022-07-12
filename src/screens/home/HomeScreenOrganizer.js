import React, {useEffect, useState} from "react";
import {Box, IconButton, Stack, Text, Wrap} from "@chakra-ui/react";
import {Toolbar} from "../../components/Toolbar";
import {AiOutlinePlus} from "react-icons/ai";
import {useNavigate} from "react-router";
import {EventCardOrganizer} from "../../components/EventCardOrganizer";
import {events as eventsMock} from "../../data/events";
import {Link} from "react-router-dom";

const TitlePageStyle = {
    fontSize: "25px",
    fontWeight: "bold",
    margin: "20px",
};

export const HomeScreenOrganizer = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            return eventsMock
        }

        fetchEvents().then((data) => {
            setEvents(data)
        })
    }, [])

    return (
        <>
            <Toolbar/>
            <Box backgroundColor="#121212" pb={20}>
                <Stack alignItems="center">
                    <Text sx={TitlePageStyle}>Mis Eventos</Text>
                </Stack>
                <Wrap spacing="25px" justify="center">
                    {events.map((event) => (
                        <Link to={`/event/${event?.id}`} key={event?.id}>
                            <EventCardOrganizer
                                title={event?.title}
                                type={event?.type}
                                location={event?.location}
                                datetime={event?.datetime}
                                imgUrl={event?.eventImageUrl}
                            />
                        </Link>
                    ))}
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
