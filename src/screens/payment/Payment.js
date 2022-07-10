import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DateCard } from "../../components/DateCard";
import { Loading } from "../../components/Loading";
import { Toolbar } from "../../components/Toolbar";
import { colors } from "../../core/theme";
import { events } from "../../data/events";
import { sleep } from "../../utils/helpers";

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

export const Payment = () => {
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState(undefined);

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
  }, []);

  return (
    <>
      <Toolbar />
      {isLoading ? (
        <Loading />
      ) : (
        <VStack py={5} spacing={5}>
          <Box
            w="350px"
            rounded={40}
            color="white"
            boxShadow="dark-xs"
            bg={colors.backgroundComponent}
            bottom={100}
          >
            <VStack spacing={0} align="left">
              {event && (
                <Image
                  src={event.eventImageUrl}
                  alt="Ticket photo"
                  w="350px"
                  h="400px"
                  objectFit="cover"
                  rounded={40}
                />
              )}
              <VStack padding={5}>
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
              </VStack>
            </VStack>
          </Box>
        </VStack>
      )}
    </>
  );
};
