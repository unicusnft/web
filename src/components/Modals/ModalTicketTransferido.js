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
  Flex,
} from "@chakra-ui/react";
import { colors } from "../../core/theme";
import BoxUsuario from "../Boxes/BoxUsuario";

const ModalTicketTransferido = ({ isOpen, evento, user }) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      onClose={() => (window.location.href = "/my-tickets")}
      size="md"
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent backgroundColor={colors.backgroundComponent}>
        <ModalHeader color={colors.white}>Ticket Transferido</ModalHeader>
        <ModalCloseButton colorScheme="white" />
        <ModalBody pb={4}>
          <VStack spacing={5}>
            <Text fontSize="lg" width="90%">
              Tu ticket para
              <Text color={colors.mainColor} as="span">
                {` ${evento} `}
              </Text>
              fue transferido con éxito al siguiente usuario:
            </Text>
            <Flex
              width="90%"
              mt={5}
              padding={3}
              borderRadius={4}
              border={`1px solid ` + colors.success}
            >
              <BoxUsuario {...user} isSuccess />
            </Flex>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalTicketTransferido;
