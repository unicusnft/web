import React, {useState} from "react";
import {Box, Flex, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {colors} from "../../core/theme";
import {BsClockFill} from "react-icons/bs";
import {HiLocationMarker} from "react-icons/hi";
import {Link} from "react-router-dom";
import {DateCard} from "./DateCard";

const EventInfoStyle = {
  backgroundColor: colors.backgroundComponent,
  padding: '5px',
  paddingLeft: '15px',
  color: colors.white,
  fontSize: '10px',
  borderRadius: '0px 20px 0px 0px',
  height: '162px',
  width: '200px',
  margin: '0',
}

const NFTInfoStyle = {
  backgroundColor: colors.mainColor,
  padding: '5px',
  paddingTop: '16px',
  paddingLeft: '20px',
  color: colors.white,
  fontSize: '10px',
  borderRadius: '0px 0px 20px 0px',
  height: '66px',
  width: '200px',
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

const TicketForStyle = {
  fontSize: '16px',
}

const TitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: colors.mainColor
}

export const NFTCard = ({event, nft_id}) => {
  const {title, location, event_datetime, ticket_image_url} = event;
  const [datetime] = useState(new Date(event_datetime));

  return (
    <Link to={`/ticket/${nft_id}`}>
      <HStack spacing={0} fontFamily="Montserrat" width="360">
        <div style={{position: 'relative', height: '228px', width: '160px'}}>
          <Image src={ticket_image_url} sx={ImageStyle}/>
          <div style={{position: 'absolute', top: '0', right: '0'}}>
            <DateCard datetime={datetime} />
          </div>
        </div>
        <VStack spacing="0px">
          <Box textAlign="left" fontFamily="Montserrat" sx={EventInfoStyle}>
            <Text noOfLines={1} sx={NFTNumberStyle}>
              NFT#{nft_id}
            </Text>
            <HStack>
              <HiLocationMarker/>
              <Text fontSize="12px" noOfLines={1}>
                {location}
              </Text>
            </HStack>
            <HStack>
              <BsClockFill/>
              <Text fontSize="12px">
                {datetime.getHours()}:
                {String(datetime.getMinutes()).padStart(2, "0")}
              </Text>
            </HStack>
            <br/>
            <Text sx={TicketForStyle}>Ticket para</Text>
            <Text noOfLines={1} sx={TitleStyle}>
              {title}
            </Text>
          </Box>
          <Box textAlign="left" fontFamily="Montserrat" sx={NFTInfoStyle}>
            <HStack>
              <VStack width="45px" align="left">
                <Text noOfLines={1} as="b">
                  CHAIN
                </Text>
                <Text noOfLines={1}>Polygon</Text>
              </VStack>
              <VStack width="45px" align="left">
                <Text noOfLines={1} as="b">
                  NFT ID
                </Text>
                <Text noOfLines={1}>{nft_id}</Text>
              </VStack>
              <VStack width="60px" align="left">
                <Text noOfLines={1} as="b">
                  CONTRATO
                </Text>
                <Text noOfLines={1}>0xabbcef01f232CC40</Text>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </HStack>
    </Link>
  );
};
