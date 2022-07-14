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
} from "@chakra-ui/react";
import { colors } from "../../core/theme";
import { Loading } from "../Loading";
import { Validated } from "../Validated";
import { ValidationError } from "../ValidationError";

export const ModalValidateTicket = ({
  isOpen,
  onClose,
  onValidation,
  isLoading,
  isValidated,
  validationError,
}) => {
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
        <ModalCloseButton
          colorScheme="white"
          onClick={onClose}
          disabled={isLoading}
        />
        <ModalBody>
          <Text fontSize="sm" textAlign="center">
            ¿Desea validar la entrada escaneada?
          </Text>
        </ModalBody>
        <ModalFooter justifyContent="center">
          {isLoading ? (
            <Loading mt={10} size="40px" />
          ) : isValidated ? (
            <Validated />
          ) : validationError ? (
            <ValidationError />
          ) : (
            <>
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
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
