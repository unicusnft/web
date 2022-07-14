import { useParams } from "react-router";
import { Toolbar } from "../../components/Toolbar";
import React, { useEffect, useState } from "react";
import { EventCardOrganizer } from "../../components/EventCardOrganizer";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TicketsNFT } from "../../components/TicketsNFT";
import { BarChartTicketSupply } from "../../components/BarChartTicketSupply";
import { colors } from "../../core/theme";
import { traer_evento } from "../../services/Calls";
import { Loading } from "../../components/Loading";

const TicketsTitleStyle = {
  fontSize: "22px",
  fontWeight: "bold",
  margin: "10px 0 10px 0",
  paddingLeft: "2px",
};

const TotalStyle = {
  fontSize: "15px",
  fontWeight: "bold",
  margin: "0 0 20px 0",
  paddingLeft: "2px",
};

const TicketCategoryStyle = {
  fontSize: "12px",
  lineHeight: "30px",
  textAlign: "right",
  paddingRight: "5px",
};

export const Event = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      return await traer_evento(eventId).then((res) => setEvent(res));
    };

    fetchEvent().then(() => setLoading(false));
  }, [eventId]);

  const getTotalCollected = () => {
    const formatter = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    });
    const total =
      event?.tickets
        ?.map((t) => t?.price * (t?.total_supply - t?.remaining_supply))
        ?.reduce((x, y) => x + y, 0) || 0;
    return formatter.format(total);
  };

  return (
    <>
      <Toolbar />
      {loading ? (
        <Loading />
      ) : (
        <VStack
          justifyContent="center"
          mt={4}
          px={3}
          style={{ overflowX: "hidden" }}
        >
          <Center marginRight={["-52px", "-130px", "-182px"]}>
            <TicketsNFT
              img1={event?.buy_image_1_url}
              img2={event?.buy_image_2_url}
            />
          </Center>
          <Link to={`/event-form/${event?.id}`}>
            <EventCardOrganizer
              id={event?.id}
              title={event?.title}
              type={event?.event_type}
              location={event?.location}
              datetime={new Date(event?.event_datetime)}
              imgUrl={event?.event_image_url}
              edit
            />
          </Link>
          <Box className="text-left" w="358px">
            <div style={TicketsTitleStyle}>Tickets vendidos</div>
            <Box>
              {event?.tickets?.map((ticket) => (
                <Grid
                  templateRows="repeat(1, 1fr)"
                  templateColumns="repeat(5, 1fr)"
                  key={ticket?.id + "grid"}
                  justifyContent="center"
                  my={3}
                >
                  <GridItem colSpan={1} key={ticket?.id + "name"}>
                    <Text
                      style={TicketCategoryStyle}
                      maxWidth="60px"
                      noOfLines={1}
                    >
                      {ticket?.description}
                    </Text>
                  </GridItem>
                  <GridItem colSpan={4} key={ticket?.id + "chart"}>
                    <BarChartTicketSupply
                      height={35}
                      maxWidth={280}
                      current={ticket?.total_supply - ticket?.remaining_supply}
                      total={ticket?.total_supply}
                    />
                  </GridItem>
                </Grid>
              ))}
            </Box>
            <div style={TotalStyle}>Total Recaudado: {getTotalCollected()}</div>
            <Link to={`/event-form/${event?.id}`}>
              <Button colorScheme="main" w="100%" my={5}>
                Editar evento
              </Button>
            </Link>
            <Link to={`/event/${event?.id}/validate-ticket`}>
              <Button
                colorScheme="main"
                size="xl"
                py={3}
                px={10}
                variant="outline"
                color={colors.mainColor}
                w="100%"
                mb={5}
              >
                Validar entrada
              </Button>
            </Link>
          </Box>
        </VStack>
      )}
    </>
  );
};
