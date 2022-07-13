import React, {useEffect, useState} from "react";
import {Container, Stack, Wrap, WrapItem, Text} from "@chakra-ui/react";
import {Toolbar} from "../../components/Toolbar";
import {traer_tickets_user} from "../../services/Calls";
import {NFTCard} from "../../components/Cards/NFTCard";
import {Filters} from "../../components/Filters";
import {useUser} from "../../providers/UserProvider";
import {Loading} from "../../components/Loading";

const TitlePageStyle = {
  fontSize: "25px",
  fontWeight: "bold",
  margin: "20px",
};

export const MyTickets = () => {
  const {currentUser} = useUser();
  const [event, setEvent] = useState("");

  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    traer_tickets_user(currentUser?.id).then((res) => {
      setTickets(res);
      setIsLoading(false);
    });
  }, [currentUser?.id]);

  return (
    <>
      <Toolbar title="Mis tickets"/>
      {isLoading ? (
        <Loading/>
      ) : (
        <>
          <Stack alignItems="center">
            <Text sx={TitlePageStyle}>Mis tickets</Text>
          </Stack>
          <Stack alignItems="center" px={4}>
            <Filters
              event={event}
              setEvent={setEvent}
              description="Buscar en mis tickets"
            />
          </Stack>
          <br/>
          <Container maxW="8xl" padding="0px" mb={5}>
            <Wrap spacing="25px" justify="center">
              {tickets
                .filter(
                  (x) =>
                    event === "" ||
                    (event !== "" &&
                      x.event.title
                        .toLocaleLowerCase()
                        .includes(event.toLocaleLowerCase()))
                )
                .map((t, i) => (
                  <WrapItem key={`${t.event.title} ${i}`}>
                    <NFTCard event={t.event} nft_id={t.id}/>
                  </WrapItem>
                ))}
            </Wrap>
          </Container>
        </>
      )}
    </>
  );
};
