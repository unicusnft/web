import React from "react";
import {colors} from "../../core/theme";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Link,
  Center,
  HStack,
  chakra,
} from "@chakra-ui/react";
import {SocialMediaButton} from "../../screens/ticket/Ticket";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import tikTok from "../../img/tik_tok.png";
import twitter from "../../img/twitter.png";
import whatsapp from "../../img/whatsapp.png";
import {NFTCardBought} from "../Cards/NFTCardBought";

const TitleStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  color: colors.mainColor,
};

const ModalCompraRealizada = ({isOpen, event, id, onClose}) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      size="md"
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
    >
      <ModalOverlay/>
      <ModalContent
        backgroundColor={colors.backgroundComponent}
        ml={5}
        mr={5}
        minWidth={300}
      >
        <ModalHeader color={colors.white}>Ticket adquirido</ModalHeader>
        <Link href={`/`}>
          <ModalCloseButton colorScheme="white"/>
        </Link>
        <ModalBody>
          <Text fontSize="sm">
            <chakra.span>Felicitaciones, ya tenes tu ticket para </chakra.span>
            <chakra.span sx={TitleStyle}>{event.title}</chakra.span>
            <chakra.span> !</chakra.span>
          </Text>
          <NFTCardBought
            title={event?.title}
            type={event?.event_type}
            location={event?.location}
            datetime={new Date(event?.event_datetime)}
            imgUrl={event?.ticket_image_url}
            nftNumber={id}
          />
        </ModalBody>
        <Text fontSize="sm" alignSelf="center" mb={3}>
          Compartilo en tus redes:
        </Text>
        <Center mb={3}>
          <HStack spacing={0}>
            <SocialMediaButton img={facebook} alt="facebook"/>
            <SocialMediaButton img={instagram} alt="instagram"/>
            <SocialMediaButton img={tikTok} alt="tik tok"/>
            <SocialMediaButton img={twitter} alt="twitter"/>
            <SocialMediaButton img={whatsapp} alt="whatsapp"/>
          </HStack>
        </Center>
        <ModalFooter justifyContent="center">
          <Link href="/my-tickets/">
            <Button colorScheme="main" disabled={false} py={3} px={8}>
              Ir a mis tickets
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCompraRealizada;
