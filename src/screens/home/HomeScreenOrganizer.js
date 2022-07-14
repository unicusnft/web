import React, {useEffect, useState} from "react";
import {Box, IconButton, Stack, Text, Wrap} from "@chakra-ui/react";
import {Toolbar} from "../../components/Toolbar";
import {AiOutlinePlus} from "react-icons/ai";
import {useNavigate} from "react-router";
import {EventCardOrganizer} from "../../components/EventCardOrganizer";
import {Link} from "react-router-dom";
import {fetchEventsFromUser} from "../../services/Calls";
import {useUser} from "../../providers/UserProvider";
import {Loading} from "../../components/Loading";

const TitlePageStyle = {
  fontSize: "25px",
  fontWeight: "bold",
  margin: "20px",
};

export const HomeScreenOrganizer = () => {
  const navigate = useNavigate()
  const {currentUser} = useUser()
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      return await fetchEventsFromUser(currentUser?.id).then((res) => setEvents(res))
    }

    fetchEvents().then(() => setLoading(false))
  }, [])

  return (
    <>
      <Toolbar/>
      {loading ? (
        <Loading/>
      ) : (
        <Box backgroundColor="#121212" pb={20}>
          <Stack alignItems="center">
            <Text sx={TitlePageStyle}>Mis Eventos</Text>
          </Stack>
          <Wrap spacing="15px" justify="center">
            {events.map((event) => (
              <Link to={`/event/${event?.id}`} key={event?.id}>
                <EventCardOrganizer
                  title={event?.title}
                  type={event?.type}
                  location={event?.location}
                  datetime={new Date(event?.event_datetime)}
                  imgUrl={event?.event_image_url}
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
      )}
    </>
  );
};
