import React, { useState } from "react";
import { colors } from "../../core/theme";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Tabs,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import TabPanelModalTransferir from "../Tabs/TabPanelModalTransferir";

const ModalTransferir = ({
  isOpen,
  onClose,
  onConfirmOpen,
  setTransferUser,
  users,
}) => {
  const [isUserSelected, setIsUserSelected] = useState(false);

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
        <ModalHeader color={colors.white}>Transferir ticket</ModalHeader>
        <ModalCloseButton colorScheme="white" />
        <ModalBody pb={4}>
          <Tabs isLazy isFitted variant="soft-rounded">
            <TabPanels>
              <TabPanel>
                <TabPanelModalTransferir
                  placeholderInput="Nombre del usuario"
                  initialUsers={[]}
                  users={users}
                  setTransferUser={setTransferUser}
                  setIsUserSelected={setIsUserSelected}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
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
          <Button
            onClick={(event) => {
              event.preventDefault();
              onClose();
              onConfirmOpen();
            }}
            colorScheme="main"
            disabled={!isUserSelected}
            py={3}
            px={8}
          >
            Transferir
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalTransferir;
