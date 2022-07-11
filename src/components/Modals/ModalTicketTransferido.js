import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { colors } from "../../core/theme";
import BoxUsuario from "../Boxes/BoxUsuario";

const ModalTicketTransferido = ({ isOpen, onClose, evento, user }) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      onClose={onClose}
      size="md"
      isOpen={isOpen}
      scrollBehavior="inside"
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
              border="1px solid #00FF5F"
            >
              <BoxUsuario {...user} isSuccess />
            </Flex>
            <Text width="90%">
              ¿Querés agregar este usuario a tu lista de contactos frecuentes?
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button
            onClick={onClose}
            mr={3}
            color={colors.mainColor}
            colorScheme="main"
            variant="outline"
            py={3}
            px={8}
          >
            Cancelar
          </Button>
          <Button onClick={onClose} colorScheme="main" py={3} px={8}>
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalTicketTransferido;
