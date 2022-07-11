import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Select,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsClockFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { DateCard } from "../../components/DateCard";
import { Loading } from "../../components/Loading";
import { Toolbar } from "../../components/Toolbar";
import { colors } from "../../core/theme";
import { events } from "../../data/events";
import { sleep } from "../../utils/helpers";
import ModalCompraRealizada from "../../components/Modals/ModalCompraRealizada";

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
  fontSize: "20px",
  fontWeight: "bold",
  margin: "20px",
  width: "100%",
};

export const Payment = () => {
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState(undefined);
  const [isCreditCardSelected, setIsCreditCardSelected] = useState(false);
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [owner, setOwner] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [code, setCode] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await sleep(1500);
      setEvent(
        events.filter((t) => t?.id?.toString() === params?.eventId)?.[0]
      );
      setIsLoading(false);
    }

    fetchData();
  }, [params?.eventId]);

  const buyTicket = async () => {
    console.log(creditCardNumber, owner, dueDate, code);
  };

  return (
    <>
      <Toolbar />
      {isLoading ? (
        <Loading />
      ) : (
        event && (
          <VStack py={5} spacing={5}>
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
                  src={event.eventImageUrl}
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
                        {event.type}
                      </Text>
                      <Text noOfLines={1} sx={TitleStyle}>
                        {event.title}
                      </Text>
                    </VStack>
                    <Spacer />
                    <DateCard datetime={event.datetime} size="lg" />
                  </Flex>
                  <HStack spacing={5} align="left" justifyContent="flex-start">
                    <HStack>
                      <HiLocationMarker />
                      <Text fontSize="sm">{event.location}</Text>
                    </HStack>
                    <HStack>
                      <BsClockFill />
                      <Text fontSize="sm">
                        {event.datetime.getHours()}:
                        {String(event.datetime.getMinutes()).padStart(2, "0")}
                      </Text>
                    </HStack>
                  </HStack>
                  <Text noOfLines={2} sx={TicketTextStyle}>
                    {params.cant} Ticket{params.cant > 1 && "s"}: {params.spot}
                  </Text>
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
                  Elegí un método de pago
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
                  <option value="option1" style={{ color: "black" }}>
                    Tarjeta de débito/crédito
                  </option>
                </Select>
                {isCreditCardSelected && (
                  <VStack align="left">
                    <VStack align="left" marginTop={2}>
                      <Text fontSize="sm">Número de la tarjeta</Text>
                      <Input
                        textColor={colors.white}
                        focusBorderColor={colors.mainColor}
                        onChange={(text) =>
                          setCreditCardNumber(text.target.value)
                        }
                        type="number"
                      />
                    </VStack>
                    <VStack align="left" marginTop={5}>
                      <Text fontSize="sm">Nombre del titular</Text>
                      <Input
                        textColor={colors.white}
                        focusBorderColor={colors.mainColor}
                        onChange={(text) => setOwner(text.target.value)}
                      />
                    </VStack>
                    <HStack marginTop={5}>
                      <VStack align="left">
                        <Text fontSize="sm">Vencimiento</Text>
                        <Input
                          textColor={colors.white}
                          focusBorderColor={colors.mainColor}
                          onChange={(text) => setDueDate(text.target.value)}
                        />
                      </VStack>
                      <VStack align="left">
                        <Text fontSize="sm">Código</Text>
                        <Input
                          textColor={colors.white}
                          focusBorderColor={colors.mainColor}
                          onChange={(text) => setCode(text.target.value)}
                          type="number"
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
              >
                Confirmar
              </Button>
            </HStack>
            <ModalCompraRealizada
              isOpen={isModalOpen}
              event={event}
              onClose={() => {}}
              onConfirmOpen={() => {}}
            />
          </VStack>
        )
      )}
    </>
  );
};
