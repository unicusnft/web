import React from "react";
import {
    Box,
    Text,
    HStack,
    VStack,
    Flex,
    Spacer,
    Image
} from "@chakra-ui/react";
import {colors} from "../core/theme";
import {BsClockFill} from "react-icons/bs";
import {HiLocationMarker} from "react-icons/hi";
import {DateCard} from "./DateCard";

const BoxStyle = {
    backgroundColor: colors.backgroundComponent,
    padding: '15px',
    color: colors.white,
    fontSize: '16px',
    borderRadius: '20px',
}

const ImageStyle = {
    borderRadius: '20px',
    objectFit: 'cover',
    marginTop: '-40px',
    marginBottom: '10px',
    position: 'relative',
    height: '200px',
    width: '100%',
    filter: 'drop-shadow(0 2mm 2mm rgb(160, 0, 210))'
}

const TypeStyle = {
    color: colors.textSecondaryColor
}

const TitleStyle = {
    fontSize: '35px',
    fontWeight: 'bold',
    margin: '20px',
    width: '300px',
}

const DateStyle = {
    backgroundColor: colors.mainColor,
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '10px',
    paddingBottom: '5px',
    fontWeight: 'bold',
    borderRadius: '12px',
    height: '0%'
}

export const EventCard = ({title, type, location, datetime, imgUrl}) => {

    return (
        <VStack paddingTop='30px' width='400px'>
            <Box
                textAlign="left"
                borderWidth={0.1}
                fontFamily="Montserrat"
                sx={BoxStyle}
            >
                <Image
                    src={imgUrl}
                    sx={ImageStyle}/>
                <Flex>
                    <VStack align="left" spacing={0}>
                        <Text noOfLines={1} sx={TypeStyle}>{type}</Text>
                        <Text noOfLines={1} sx={TitleStyle}>{title}</Text>
                    </VStack>
                    <Spacer/>
                    <DateCard datetime={datetime}/>
                </Flex>
                <HStack spacing={5}>
                    <HStack>
                        <HiLocationMarker/>
                        <Text>{location}</Text>
                    </HStack>
                    <HStack>
                        <BsClockFill/>
                        <Text>21:00</Text>
                    </HStack>
                </HStack>
            </Box>
        </VStack>
    );
};
