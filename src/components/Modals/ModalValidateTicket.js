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
  Text,
  chakra,
} from "@chakra-ui/react";
import { colors } from "../../core/theme";

export const ModalValidateTicket = ({ isOpen, onClose, onValidation }) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      size="md"
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor={colors.backgroundComponent}
        ml={5}
        mr={5}
        minWidth={300}
      >
        <ModalHeader color={colors.white}>Validar entrada</ModalHeader>
        <ModalCloseButton colorScheme="white" />
        <ModalBody>
          <Text fontSize="sm" textAlign="center">
            ¿Desea validar la entrada escaneada?
          </Text>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button
            colorScheme="main"
            py={3}
            px={8}
            variant="outline"
            color={colors.mainColor}
            onClick={onClose}
            marginRight={2}
          >
            Cancelar
          </Button>
          <Button
            colorScheme="main"
            disabled={false}
            py={3}
            px={8}
            onClick={onValidation}
            marginLeft={2}
          >
            Validar entrada
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
