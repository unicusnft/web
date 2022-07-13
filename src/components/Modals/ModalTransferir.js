import React, {useState} from "react";
import {colors} from "../../core/theme";
import {users} from "../../data/users";
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
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import TabPanelModalTransferir from "../Tabs/TabPanelModalTransferir";

const ModalTransferir = ({
                           isOpen,
                           onClose,
                           onConfirmOpen,
                           setTransferUser,
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
      <ModalOverlay/>
      <ModalContent backgroundColor={colors.backgroundComponent}>
        <ModalHeader color={colors.white}>Transferir ticket</ModalHeader>
        <ModalCloseButton colorScheme="white"/>
        <ModalBody pb={4}>
          <Tabs isLazy isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab
                textColor={colors.mainColor}
                _selected={{
                  color: colors.mainColor,
                  bg: "var(--chakra-colors-purple-100)",
                }}
              >
                Nuevo usuario
              </Tab>
              <Tab
                textColor={colors.mainColor}
                _selected={{
                  color: colors.mainColor,
                  bg: "var(--chakra-colors-purple-100)",
                }}
              >
                Amigos
              </Tab>
            </TabList>
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
              <TabPanel>
                <TabPanelModalTransferir
                  placeholderInput="Nombre del usuario"
                  users={users.filter((x) => x.esAmigo)}
                  initialUsers={users.filter((x) => x.esAmigo)}
                  initialSearch
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
