import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { colors } from "../core/theme";
import { BsClockFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { DateCard } from "./DateCard";

const BoxStyle = {
  backgroundColor: colors.backgroundComponent,
  padding: "20px 22px",
  color: colors.white,
  fontSize: "16px",
  borderRadius: "20px",
};

const ImageStyle = {
  borderRadius: "20px",
  objectFit: "cover",
  marginTop: "-40px",
  marginBottom: "10px",
  position: "relative",
  height: "200px",
  width: "100%",
  filter: "drop-shadow(0 2mm 2mm #515151)",
};

const TypeStyle = {
  fontSize: "14px",
  color: colors.textSecondaryColor,
};

const TitleStyle = {
  fontSize: "30px",
  fontWeight: "bold",
  margin: "20px",
  width: "300px",
};

export const EventCard = ({ title, type, location, datetime, imgUrl }) => {
  return (
    <VStack paddingTop="30px" width="400px">
      <Box textAlign="left" fontFamily="Montserrat" sx={BoxStyle}>
        <Image src={imgUrl} sx={ImageStyle} />
        <Flex pt={2}>
          <VStack align="left" spacing={0}>
            <Text noOfLines={1} sx={TypeStyle}>
              {type}
            </Text>
            <Text noOfLines={1} sx={TitleStyle}>
              {title}
            </Text>
          </VStack>
          <Spacer />
          <DateCard datetime={datetime} size='lg' />
        </Flex>
        <HStack spacing={5}>
          <HStack>
            <HiLocationMarker />
            <Text fontSize='sm'>{location}</Text>
          </HStack>
          <HStack>
            <BsClockFill />
            <Text fontSize='sm'>21:00</Text>
          </HStack>
        </HStack>
      </Box>
    </VStack>
  );
  // >>>>>>> main
};
