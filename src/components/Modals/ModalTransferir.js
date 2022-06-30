import React from "react";
import { colors } from "../../core/theme";
import { users } from "../../data/users";
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

const ModalTransferir = ({ isOpen, onClose }) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      onClose={onClose}
      size="md"
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent color={colors.textSecondaryColor}>
        <ModalHeader color={colors.backgroundComponent}>
          Transferir A
        </ModalHeader>
        <ModalCloseButton colorScheme="gray" />
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
                  placeholderInput="Buscar un usuario"
                  initialUsers={[]}
                  users={users}
                />
              </TabPanel>
              <TabPanel>
                <TabPanelModalTransferir
                  placeholderInput="Buscar un usuario"
                  users={users.filter((x) => x.esAmigo)}
                  initialUsers={users.filter((x) => x.esAmigo)}
                  initialSearch
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} mr={3} colorScheme="purple">
            Confirmar
          </Button>
          <Button onClick={onClose} color={colors.backgroundComponent}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalTransferir;
