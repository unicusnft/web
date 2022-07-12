import {Box, Flex, HStack, Image, Spacer, Text, VStack} from "@chakra-ui/react";
import {DateCard} from "./DateCard";
import {HiLocationMarker} from "react-icons/hi";
import {BsClockFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import React from "react";
import {colors} from "../core/theme";

const HStackStyle = {
    backgroundColor: colors.backgroundComponent,
    padding: "15px 18px",
    color: colors.white,
    fontSize: "16px",
    borderRadius: "20px",
    width: "356px",
    cursor: 'pointer'
};

const BoxStyle = {
    width: "200px"
};

const ImageStyle = {
    objectFit: "cover",
    height: "80px",
    width: "80px",
    filter: "blur(2px)",
    borderRadius: "10px"
};

const TypeStyle = {
    fontSize: "14px",
    color: colors.textSecondaryColor,
};

const TitleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "20px",
    width: "250px",
};

export const EventCardOrganizer = ({id, title, type, location, datetime, imgUrl}) => {
    return (
        <Link to={`/event-form/${id}`}>
            <HStack width="360px" sx={HStackStyle}>
                <div style={{position: 'relative', marginRight: '10px'}}>
                    <Image src={imgUrl} sx={ImageStyle}/>
                    <div style={{
                        position: 'absolute',
                        bottom: '50%',
                        left: '50%',
                        transform: 'translate(-50%, 50%)'
                    }}>
                        <DateCard datetime={datetime} size='md'/>
                    </div>
                </div>
                <Box textAlign="left" fontFamily="Montserrat" style={BoxStyle}>
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
                    </Flex>
                    <HStack justifyContent="space-between" spacing={4} paddingRight={2}>
                        <HStack>
                            <HiLocationMarker/>
                            <Text fontSize='sm' noOfLines={1}>{location}</Text>
                        </HStack>
                        <HStack>
                            <BsClockFill/>
                            <Text fontSize='sm'>{datetime.getHours()}:{String(datetime.getMinutes()).padStart(2, '0')}</Text>
                        </HStack>
                    </HStack>
                </Box>
            </HStack>
        </Link>
    )
}
