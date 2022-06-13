import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  Flex,
  Image
} from "@chakra-ui/react";
import { colors } from "../core/theme";
import { BsClockFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const EventInfoStyle = {
  backgroundColor: colors.backgroundComponent,
  padding: '20px',
  paddingLeft: '60px',
  color: colors.white,
  fontSize: '16px',
  borderRadius: '0px 20px 0px 0px',
  height: '100%',
  width: '370px',
  margin: '0px',
}

const NFTInfoStyle = {
  backgroundColor: colors.mainColor,
  padding: '20px',
  paddingLeft: '60px',
  color: colors.white,
  fontSize: '16px',
  borderRadius: '0px 0px 20px 0px',
  height: '100%',
  width: '370px',
  margin: '0px',
}


const ImageStyle = {
  borderRadius: '10px',
  objectFit: 'cover',
  position: 'relative',
  height: '342px',
  width: '267px',
  marginRight: '-30px',
  boxShadow: '0px 4px 20px 0px #000000',
}

const NFTNumberStyle = {
  fontSize: '40px',
  fontWeight: 'bold',
}

const TicketForStyle  = {
  fontSize: '25px',
}

const TitleStyle  = {
  fontSize: '40px',
  fontWeight: 'bold',
  color: colors.mainColor
}

const DateStyle = {
  backgroundColor: colors.mainColor,
  color: colors.white,
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '10px',
  paddingBottom: '5px',
  fontWeight: 'bold',
  borderRadius: '12px',
  height: '64px',
  width: '64px',
  margin: '0px',
  marginRight: '-60px',
  zIndex: 1,
  position: 'relative',
  left: '207px'
}

export const NFTCard = ({title, type, location, datetime, imgUrl, nftNumber}) => {

  return (
    <Flex width="620px" align="top" fontFamily="Montserrat">
      <Box textAlign="center" sx={DateStyle}>
        <Text fontSize="35px" padding="0px" lineHeight="70%">
          {datetime.getDate()}
        </Text>
        <Text paddingBottom="0px">
          {datetime.toLocaleString('default', { month: 'short' }).toUpperCase()}
        </Text>
      </Box>
      <Image
        src={imgUrl}
        sx={ImageStyle}/>
      <VStack spacing='0px'>
        <Box
          textAlign="left"
          fontFamily="Montserrat"
          sx={EventInfoStyle}
        >
          <Text noOfLines={1} sx={NFTNumberStyle}>NFT#{nftNumber}</Text>
          <HStack spacing={5}>
            <HStack>
              <HiLocationMarker />
              <Text noOfLines={1}>{location}</Text>
            </HStack>
            <HStack>
              <BsClockFill />
              <Text>21:00</Text>
            </HStack>
          </HStack>
          <br/>
          <Text sx={TicketForStyle}>Ticket for</Text>
          <Text noOfLines={1} sx={TitleStyle}>{title}</Text>
        </Box>
        <Box
          textAlign="left"
          fontFamily="Montserrat"
          sx={NFTInfoStyle}
        >
          <HStack spacing='25px'>
            <VStack width='80px' align='left'>
              <Text noOfLines={1} as="b">CHAIN</Text>
              <Text noOfLines={1}>Polygon</Text>
            </VStack>
            <VStack width='80px' align='left'>
              <Text noOfLines={1} as="b">NFT ID</Text>
              <Text noOfLines={1}>{nftNumber}</Text>
            </VStack>
            <VStack width='100px' align='left'>
              <Text noOfLines={1} as='b'>CONTRACT</Text>
              <Text noOfLines={1}>0xabbcef01f232CC40</Text>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Flex>
  );
};
