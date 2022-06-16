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
  padding: '5px',
  paddingLeft: '30px',
  color: colors.white,
  fontSize: '10px',
  borderRadius: '0px 20px 0px 0px',
  height: '162px',
  width: '235px',
  margin: '0px',
}

const NFTInfoStyle = {
  backgroundColor: colors.mainColor,
  padding: '5px',
  paddingTop: '16px',
  paddingLeft: '30px',
  color: colors.white,
  fontSize: '10px',
  borderRadius: '0px 0px 20px 0px',
  height: '66px',
  width: '235px',
  margin: '0px',
}


const ImageStyle = {
  borderRadius: '10px',
  objectFit: 'cover',
  position: 'relative',
  height: '228px',
  width: '178px',
  marginRight: '-20px',
  boxShadow: '0px 4px 13px 0px #000000',
}

const NFTNumberStyle = {
  fontSize: '26px',
  fontWeight: 'bold',
}

const TicketForStyle  = {
  fontSize: '16px',
}

const TitleStyle  = {
  fontSize: '26px',
  fontWeight: 'bold',
  color: colors.mainColor
}

const DateStyle = {
  backgroundColor: colors.mainColor,
  color: colors.white,
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '10px',
  paddingBottom: '2px',
  fontWeight: 'bold',
  borderRadius: '12px',
  height: '58px',
  width: '58px',
  margin: '0px',
  marginRight: '-58px',
  zIndex: 1,
  position: 'relative',
  left: '120px'
}

export const NFTCard = ({title, type, location, datetime, imgUrl, nftNumber}) => {

  return (
    <Flex align="top" fontFamily="Montserrat">
      <Box textAlign="center" sx={DateStyle}>
        <Text fontSize="28px" padding="2px" lineHeight="70%">
          {datetime.getDate()}
        </Text>
        <Text paddingBottom="0px" fontSize='12px'>
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
          <HStack>
            <HiLocationMarker />
            <Text fontSize="12px" noOfLines={1}>{location}</Text>
          </HStack>
          <HStack>
            <BsClockFill />
            <Text fontSize="12px">{datetime.getHours()}:{String(datetime.getMinutes()).padStart(2, '0')}</Text>
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
          <HStack>
            <VStack width='60px' align='left'>
              <Text noOfLines={1} as="b">CHAIN</Text>
              <Text noOfLines={1}>Polygon</Text>
            </VStack>
            <VStack width='60px' align='left'>
              <Text noOfLines={1} as="b">NFT ID</Text>
              <Text noOfLines={1}>{nftNumber}</Text>
            </VStack>
            <VStack width='60px' align='left'>
              <Text noOfLines={1} as='b'>CONTRACT</Text>
              <Text noOfLines={1}>0xabbcef01f232CC40</Text>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Flex>
  );
};
