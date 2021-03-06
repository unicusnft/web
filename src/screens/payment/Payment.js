import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Select,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {BsClockFill} from "react-icons/bs";
import {HiLocationMarker} from "react-icons/hi";
import {Link, useParams} from "react-router-dom";
import {DateCard} from "../../components/Cards/DateCard";
import {Loading} from "../../components/Loading";
import {Toolbar} from "../../components/Toolbar";
import {colors} from "../../core/theme";
import ModalCompraRealizada from "../../components/Modals/ModalCompraRealizada";
import {useUser} from "../../providers/UserProvider";
import {comprar_ticket, traer_evento, traer_ticket,} from "../../services/Calls";

const TypeStyle = {
  fontSize: "14px",
  color: colors.textSecondaryColor,
};

const TitleStyle = {
  fontSize: "30px",
  fontWeight: "bold",
  margin: "20px",
  width: "250px",
};

const TicketTextStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  margin: "10px 2px",
  width: "100%",
};

const TicketTotalTextStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "10px 2px",
  width: "100%",
};

export const Payment = () => {
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState(undefined);
  const [ticket, setTicket] = useState(undefined);
  const [cant, setCant] = useState(1);
  const [id, setId] = useState(undefined);
  const [isCreditCardSelected, setIsCreditCardSelected] = useState(false);
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [owner, setOwner] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [code, setCode] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const {currentUser} = useUser();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setCant(params?.cant);
      await traer_evento(params?.eventId).then((res) => {
        setEvent(res);
      });
      await traer_ticket(params?.ticketId).then((res) => {
        setTicket(res);
      });
      setIsLoading(false);
    }

    fetchData();
  }, [params?.eventId, params?.ticketId, params?.cant]);

  const buyTicket = async () => {
    console.log(creditCardNumber, owner, dueDate, code);
    await comprar_ticket(currentUser?.id, ticket.id, cant).then((res) => {
      setId(res.id);
    });
  };

  return (
    <>
      <Toolbar/>
      {isLoading ? (
        <Loading/>
      ) : (
        event && (
          <VStack py={5} spacing={5} style={{overflowX: "hidden"}}>
            <Box
              w="350px"
              rounded={16}
              roundedTop={200}
              color="white"
              boxShadow="dark-xs"
              bg={colors.backgroundComponent}
              bottom={100}
            >
              <VStack spacing={0} align="left">
                <Image
                  src={event.ticket_image_url}
                  alt="Ticket photo"
                  w="350px"
                  h="400px"
                  objectFit="cover"
                  rounded={40}
                />
                <VStack padding={5} align="left">
                  <Flex>
                    <VStack align="left" spacing={0}>
                      <Text noOfLines={1} sx={TypeStyle}>
                        {event.event_type}
                      </Text>
                      <Text noOfLines={1} sx={TitleStyle}>
                        {event.title}
                      </Text>
                    </VStack>
                    <Spacer/>
                    <DateCard
                      datetime={new Date(event.event_datetime)}
                      size="lg"
                    />
                  </Flex>
                  <HStack spacing={5} align="left" justifyContent="flex-start">
                    <HStack>
                      <HiLocationMarker/>
                      <Text fontSize="sm">{event.location}</Text>
                    </HStack>
                    <HStack>
                      <BsClockFill/>
                      <Text fontSize="sm">
                        {new Date(event?.event_datetime).toLocaleTimeString(
                          "en-GB",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </Text>
                    </HStack>
                  </HStack>
                  <Divider inset py={2}/>
                  <Grid
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    key={ticket?.id + "grid"}
                    justifyContent="center"
                    my={2}
                  >
                    <GridItem colSpan={4}>
                      <Text noOfLines={2} sx={TicketTextStyle}>
                        {params.cant} x Ticket{params.cant > 1 && "s"} {ticket.description}
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1} my='auto'>
                      <Text noOfLines={2} sx={TicketTextStyle} align="right">${ticket.price * params.cant}</Text>
                    </GridItem>
                    <GridItem colSpan={4}>
                      <Text noOfLines={2} sx={TicketTextStyle}>Costo de servicio</Text>
                    </GridItem>
                    <GridItem colSpan={1} my='auto'>
                      <Text noOfLines={2} sx={TicketTextStyle} align="right">
                        ${(ticket.price * params.cant) * 0.1}
                      </Text>
                    </GridItem>
                    <GridItem colSpan={4}>
                      <Text noOfLines={2} sx={TicketTotalTextStyle}>Total</Text>
                    </GridItem>
                    <GridItem colSpan={1} my='auto'>
                      <Text noOfLines={2} sx={TicketTotalTextStyle} align="right">
                        ${(ticket.price * params.cant) + ((ticket.price * params.cant) * 0.1)}
                      </Text>
                    </GridItem>
                  </Grid>
                </VStack>
              </VStack>
            </Box>
            <Box
              w="350px"
              rounded={16}
              color="white"
              boxShadow="dark-xs"
              bg={colors.backgroundComponent}
              bottom={100}
            >
              <VStack spacing={0} align="left" padding={5}>
                <Text fontSize="sm" mb={2}>
                  Eleg?? un m??todo de pago
                </Text>
                <Select
                  variant="outline"
                  placeholder="Seleccione una forma de pago"
                  onChange={(e) => {
                    if (e.target.value === "option1")
                      setIsCreditCardSelected(true);
                    else setIsCreditCardSelected(false);
                  }}
                  bgColor={colors.backgroundComponent}
                  textColor="white"
                >
                  <option value="option1" style={{color: "black"}}>
                    Tarjeta de d??bito/cr??dito
                  </option>
                </Select>
                {isCreditCardSelected && (
                  <VStack align="left">
                    <VStack align="left" marginTop={2}>
                      <Text fontSize="sm">N??mero de la tarjeta</Text>
                      <Input
                        textColor={colors.white}
                        focusBorderColor={colors.mainColor}
                        onChange={(text) =>
                          setCreditCardNumber(text.target.value)
                        }
                        type="number"
                        value={creditCardNumber}
                      />
                    </VStack>
                    <VStack align="left" marginTop={5}>
                      <Text fontSize="sm">Nombre del titular</Text>
                      <Input
                        textColor={colors.white}
                        focusBorderColor={colors.mainColor}
                        onChange={(text) => setOwner(text.target.value)}
                        value={owner}
                      />
                    </VStack>
                    <HStack marginTop={5}>
                      <VStack align="left">
                        <Text fontSize="sm">Vencimiento</Text>
                        <Input
                          textColor={colors.white}
                          focusBorderColor={colors.mainColor}
                          onChange={(text) => setDueDate(text.target.value)}
                          value={dueDate}
                        />
                      </VStack>
                      <VStack align="left">
                        <Text fontSize="sm">C??digo</Text>
                        <Input
                          textColor={colors.white}
                          focusBorderColor={colors.mainColor}
                          onChange={(text) => setCode(text.target.value)}
                          type="number"
                          value={code}
                        />
                      </VStack>
                    </HStack>
                  </VStack>
                )}
              </VStack>
            </Box>
            <HStack paddingLeft={5} paddingRight={15}>
              <Link to={`/buy/${event?.id}/`}>
                <Button
                  colorScheme="main"
                  size="xl"
                  py={3}
                  px={10}
                  variant="outline"
                  color={colors.mainColor}
                  w="170px"
                >
                  Volver al evento
                </Button>
              </Link>
              <Button
                colorScheme="main"
                size="xl"
                py={3}
                px={10}
                w="170px"
                onClick={() => {
                  buyTicket().then(() => setIsModalOpen(true));
                }}
                disabled={
                  isCreditCardSelected === false ||
                  creditCardNumber === "" ||
                  owner === "" ||
                  dueDate === "" ||
                  code === ""
                }
              >
                Confirmar
              </Button>
            </HStack>
            <ModalCompraRealizada
              isOpen={isModalOpen}
              event={event}
              id={id}
              onClose={() => setIsModalOpen(false)}
            />
          </VStack>
        )
      )}
    </>
  );
};
