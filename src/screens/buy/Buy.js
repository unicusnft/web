import {Toolbar} from "../../components/Toolbar";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useNumberInput,
  VStack
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {AiOutlineClockCircle} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import './Buy.css'
import {DateCard} from "../../components/Cards/DateCard";
import {colors} from "../../core/theme";
import {Link, useParams} from "react-router-dom";
import {Loading} from "../../components/Loading";
import {TicketsNFT} from "../../components/TicketsNFT";
import {traer_evento} from "../../services/Calls";

const SelectTicketCard = ({event}) => {
  const [ticketId, setTicketId] = React.useState("");
  const {getInputProps, getIncrementButtonProps, getDecrementButtonProps} =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 20,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Box
      bg={colors.backgroundComponent}
      w={["350px", "400px", "500px"]}
      rounded={20}
      p={6}
      color="white"
    >
      <Text fontSize="xs" color="gray">
        {event?.event_type}
      </Text>
      <Text fontSize="4xl" sx={{fontWeight: 600}} mb={3}>
        {event?.title}
      </Text>
      <HStack>
        <DateCard datetime={new Date(event?.event_datetime)}/>
        <VStack alignItems="left">
          <HStack>
            <GoLocation/>
            <Text fontSize="xs">{event?.location}</Text>
          </HStack>
          <HStack>
            <AiOutlineClockCircle/>
            <Text fontSize="xs">
              {new Date(event?.event_datetime).toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </HStack>
        </VStack>
      </HStack>
      <Divider my={6}/>
      <div>
        <div>SeleccionÃ¡ el tipo de ticket</div>
        <RadioGroup value={ticketId} my={2}>
          <Stack spacing={0.5}>
            {event?.tickets?.map(({id, price, description}) => (
              <Radio
                key={id}
                colorScheme="main"
                value={id.toString()}
                onClick={() => setTicketId(id.toString())}
              >
                <Text
                  noOfLines={2}
                  className={`${
                    id.toString() === ticketId ? "purple-text" : ""
                  }`}
                  style={{paddingLeft: "5px"}}
                  onClick={() => setTicketId(id.toString())}
                >
                  ${price} - {description}
                </Text>
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </div>
      <HStack mt={6}>
        <div>Cantidad:</div>
        <Button {...dec} size="xs" variant="ghost" colorScheme="white">
          {"<"}
        </Button>
        <div style={{minWidth: 20, textAlign: "center"}}>{input?.value}</div>
        <Button {...inc} size="xs" variant="ghost" colorScheme="white">
          {">"}
        </Button>
      </HStack>
      <Link to={`/buy/${event?.id}/ticket/${ticketId}/cant/${input?.value}`}>
        <Flex mt={8} direction={{base: "column-reverse"}}>
          <Button
            colorScheme="main"
            size="xl"
            py={3}
            px={10}
            disabled={!ticketId}
          >
            COMPRAR
          </Button>
        </Flex>
      </Link>
    </Box>
  );
};

export const Buy = () => {
  let params = useParams();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await traer_evento(params?.eventId).then((res) => {
        setEvent(res);
      });
      setLoading(false);
    }

    fetchData();
  }, [params?.eventId]);

  return (
    <>
      <Toolbar/>
      {loading ? (
        <Loading/>
      ) : (
        <div style={{marginTop: "20px", overflowX: "hidden"}}>
          <Center marginRight={["-72px", "-130px", "-182px"]}>
            <TicketsNFT
              img1={event?.buy_image_1_url}
              img2={event?.buy_image_2_url}
            />
          </Center>
          <Center mt={5}>
            <SelectTicketCard event={event}/>
          </Center>
        </div>
      )}
    </>
  );
};
