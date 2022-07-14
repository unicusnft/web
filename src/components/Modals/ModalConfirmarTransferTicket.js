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
import { transferir_nft } from "../../services/Calls";

const ModalConfirmarTransferTicket = ({
  isOpen,
  onClose,
  user,
  evento,
  onConfirmOpen,
  onCancelConfirm,
  nftId,
}) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      onClose={onClose}
      size="md"
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent backgroundColor={colors.backgroundComponent}>
        <ModalHeader color={colors.white}>Confirmar Transferencia</ModalHeader>
        <ModalCloseButton colorScheme="white" />
        <ModalBody pb={4}>
          <VStack spacing={5}>
            <Text fontSize="lg" width="90%">
              Estas por transferir tu ticket para
              <Text color={colors.mainColor} as="span">
                {` ${evento} `}
              </Text>
              al siguiente usuario:
            </Text>
            <Flex
              width="90%"
              margin={6}
              borderRadius={4}
              padding={3}
              border="1px solid #E2E8F0"
            >
              <BoxUsuario {...user} />
            </Flex>
            <Text fontSize="xl">¿Estás de acuerdo?</Text>
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button
            onClick={(event) => {
              event.preventDefault();
              onClose();
              onCancelConfirm();
            }}
            mr={3}
            color={colors.mainColor}
            colorScheme="main"
            variant="outline"
            py={3}
            px={8}
          >
            Cancelar
          </Button>
          <Button
            onClick={(event) => {
              event.preventDefault();
              onClose();
              transferir_nft(nftId, user.id);
              onConfirmOpen();
            }}
            colorScheme="main"
            py={3}
            px={8}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalConfirmarTransferTicket;
