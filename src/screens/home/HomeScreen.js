import React, { useEffect, useState } from "react";
import { Stack, Wrap, WrapItem, Box, Text } from "@chakra-ui/react";
import { Filters } from "../../components/Filters.js";
import { EventCard } from "../../components/Cards/EventCard.js";
import { Toolbar } from "../../components/Toolbar";
import { useUser } from "../../providers/UserProvider";
import { HomeScreenOrganizer } from "./HomeScreenOrganizer";
import { traer_eventos } from "../../services/Eventos.js";

const TitlePageStyle = {
  fontSize: "25px",
  fontWeight: "bold",
  margin: "20px",
};

export const HomeScreen = () => {
  const { currentUser } = useUser();
  const [event, setEvent] = useState("");

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    traer_eventos().then((res) => setEventos(res));
  }, []);

  if (currentUser?.is_organizer) {
    return <HomeScreenOrganizer />;
  }

  return (
    <>
      <Toolbar />
      <Box backgroundColor="#121212">
        <Stack alignItems="center">
          <Text sx={TitlePageStyle}>Eventos</Text>
        </Stack>
        <Stack alignItems="center" px={4}>
          <Filters
            event={event}
            setEvent={setEvent}
            description="Buscar un evento"
          />
        </Stack>
        <br />
        <Wrap spacing="25px" justify="center">
          {eventos
            .filter(
              (x) =>
                event === "" ||
                (event !== "" &&
                  x.title
                    .toLocaleLowerCase()
                    .includes(event.toLocaleLowerCase()))
            )
            .map((e) => (
              <WrapItem key={e.title}>
                <EventCard {...e} />
              </WrapItem>
            ))}
        </Wrap>
      </Box>
    </>
  );
};
