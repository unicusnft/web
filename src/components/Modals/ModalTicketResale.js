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
import { CheckCircleIcon } from "@chakra-ui/icons";

const ModalTicketResale = ({ isOpen, evento }) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      onClose={() => (window.location.href = "/my-tickets")}
      size="md"
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent backgroundColor={colors.backgroundComponent}>
        <ModalHeader color={colors.white}>Ticket Transferido</ModalHeader>
        <ModalCloseButton colorScheme="white" />
        <ModalBody pb={4}>
          <VStack spacing={5}>
            <CheckCircleIcon color="green" />
            <Text fontSize="lg" width="90%">
              Tu ticket para
              <Text color={colors.mainColor} as="span">
                {` ${evento} `}
              </Text>
              fue puesto en venta:
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalTicketResale;
