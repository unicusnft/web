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
import {colors} from "../core/theme";
import {BsClockFill} from "react-icons/bs";
import {HiLocationMarker} from "react-icons/hi";
import {DateCard} from "./DateCard";
import {Link} from "react-router-dom";

const BoxStyle = {
    backgroundColor: colors.backgroundComponent,
    padding: "20px 22px",
    color: colors.white,
    fontSize: "16px",
    borderRadius: "20px",
    width: "356px"
};

const ImageStyle = {
    borderRadius: "20px",
    objectFit: "cover",
    marginTop: "-40px",
    marginBottom: "10px",
    position: "relative",
    height: "200px",
    width: "316px",
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
    width: "250px",
};

export const EventCard = ({id, title, type, location, datetime, imgUrl}) => {
    return (
        <Link to={`/buy/${id}`}>
            <VStack paddingTop="30px" width="350px" style={{cursor: 'pointer'}}>
                <Box textAlign="left" fontFamily="Montserrat" sx={BoxStyle}>
                    <Image src={imgUrl} sx={ImageStyle}/>
                    <Flex pt={2}>
                        <VStack align="left" spacing={0}>
                            <Text noOfLines={1} sx={TypeStyle}>
                                {type}
                            </Text>
                            <Text noOfLines={1} sx={TitleStyle}>
                                {title}
                            </Text>
                        </VStack>
                        <Spacer/>
                        <DateCard datetime={datetime} size='lg'/>
                    </Flex>
                    <HStack spacing={5}>
                        <HStack>
                            <HiLocationMarker/>
                            <Text fontSize='sm'>{location}</Text>
                        </HStack>
                        <HStack>
                            <BsClockFill/>
                            <Text fontSize='sm'>{datetime.getHours()}:{String(datetime.getMinutes()).padStart(2, '0')}</Text>
                        </HStack>
                    </HStack>
                </Box>
            </VStack>
        </Link>
    );
    // >>>>>>> main
};
