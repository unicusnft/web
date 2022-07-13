import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Text,
} from "@chakra-ui/react";
import { colors } from "../../core/theme";
import { CheckIcon } from "@chakra-ui/icons";

const ModalTicketResale = ({ isOpen, evento, nftId }) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      onClose={() => (window.location.href = "/ticket/" + nftId)}
      size="md"
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent backgroundColor={colors.backgroundComponent}>
        <ModalHeader color={colors.white}>Ticket en venta</ModalHeader>
        <ModalCloseButton colorScheme="white" />
        <ModalBody pb={4}>
          <VStack spacing={5}>
            <Text fontSize="lg" width="90%">
              Tu ticket para
              <Text color={colors.mainColor} as="span">
                {` ${evento} `}
              </Text>
              fue puesto en venta
            </Text>
            <CheckIcon color="#50ff86" boxSize="4em" />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalTicketResale;
