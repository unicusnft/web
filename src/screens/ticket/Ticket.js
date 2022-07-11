import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import tikTok from "../../img/tik_tok.png";
import twitter from "../../img/twitter.png";
import whatsapp from "../../img/whatsapp.png";
import React, { useEffect, useState } from "react";
import { Toolbar } from "../../components/Toolbar";
import { colors } from "../../core/theme";
import { DateCard } from "../../components/Cards/DateCard";
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle, AiOutlinePlus } from "react-icons/ai";
import { TbArrowsDownUp } from "react-icons/tb";
import { BiTransfer } from "react-icons/bi";
import { MdSell } from "react-icons/md";
import { events } from "../../data/events";
import { sleep } from "../../utils/helpers";
import { Loading } from "../../components/Loading";
import ModalTransferir from "../../components/Modals/ModalTransferir";
import ModalConfirmarTransferTicket from "../../components/Modals/ModalConfirmarTransferTicket";
import ModalTicketTransferido from "../../components/Modals/ModalTicketTransferido";

export const SocialMediaButton = ({ img, alt }) => {
  return (
    <div onClick={() => console.log(alt)} style={{ cursor: "pointer" }}>
      <Image src={img} alt={alt} />
    </div>
  );
};

export const Ticket = () => {
  let params = useParams();
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState(null);

  const {
    isOpen: isOpenModalTransferir,
    onOpen: onOpenModalTransferir,
    onClose: onCloseModalTransferir,
  } = useDisclosure();

  const {
    isOpen: isOpenModalConfirmTransfer,
    onOpen: onOpenModalConfirmTransfer,
    onClose: onCloseModalConfirmTransfer,
  } = useDisclosure();

  const {
    isOpen: isOpenModalSuccessTransfer,
    onOpen: onOpenModalSuccessTransfer,
    onClose: onCloseModalSuccessTransfer,
  } = useDisclosure();

  const [transferUser, setTransferUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await sleep(1500);
      setTicket(
        events.filter((t) => t?.nftNumber?.toString() === params?.ticketId)?.[0]
      );
      setLoading(false);
    }

    fetchData();
  }, [params?.ticketId]);

  return (
    <>
      <Toolbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <ModalTransferir
            isOpen={isOpenModalTransferir}
            onClose={onCloseModalTransferir}
            onConfirmOpen={onOpenModalConfirmTransfer}
            setTransferUser={setTransferUser}
          />
          <ModalConfirmarTransferTicket
            isOpen={isOpenModalConfirmTransfer}
            onClose={onCloseModalConfirmTransfer}
            user={transferUser}
            evento={ticket?.title}
            onConfirmOpen={onOpenModalSuccessTransfer}
            onCancelConfirm={onOpenModalTransferir}
          />
          <ModalTicketTransferido
            isOpen={isOpenModalSuccessTransfer}
            onClose={onCloseModalSuccessTransfer}
            user={transferUser}
            evento={ticket?.title}
          />
          <VStack py={5} spacing={5}>
            <div>
              <Text fontSize="xl" sx={{ fontWeight: 600 }}>
                Ticket para
              </Text>
              <Center>
                <Text
                  fontSize="4xl"
                  sx={{ fontWeight: 700 }}
                  color={colors.mainColor}
                >
                  {ticket?.title}
                </Text>
              </Center>
            </div>
            <Box
              w="350px"
              h="450px"
              rounded={40}
              color="white"
              boxShadow="dark-xs"
              objectFit="cover"
            >
              <Image
                src={ticket?.buyImage1}
                alt="Ticket photo"
                w="350px"
                h="400px"
                objectFit="cover"
                rounded={40}
              />
              <Center mb={5}>
                <HStack spacing={0}>
                  <SocialMediaButton img={facebook} alt="facebook" />
                  <SocialMediaButton img={instagram} alt="instagram" />
                  <SocialMediaButton img={tikTok} alt="tik tok" />
                  <SocialMediaButton img={twitter} alt="twitter" />
                  <SocialMediaButton img={whatsapp} alt="whatsapp" />
                </HStack>
              </Center>
            </Box>
            <Box
              w="350px"
              rounded={40}
              color="white"
              boxShadow="dark-xs"
              bg={colors.backgroundComponent}
              py={6}
            >
              <VStack spacing={5}>
                <Text fontSize="3xl" sx={{ fontWeight: 600 }}>
                  NFT#{ticket?.nftNumber}
                </Text>
                <HStack>
                  <DateCard datetime={ticket?.datetime} />
                  <VStack alignItems="left">
                    <HStack>
                      <GoLocation />
                      <Text fontSize="xs">{ticket?.location}</Text>
                    </HStack>
                    <HStack>
                      <AiOutlineClockCircle />
                      <Text fontSize="xs">
                        {ticket?.datetime?.toLocaleTimeString("en-GB", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Text>
                    </HStack>
                  </VStack>
                </HStack>
                <Text px={4} fontSize="sm" textAlign="center">
                  Podés transferir este ticket <br />
                  las veces que quieras!
                </Text>
                <HStack>
                  <Button colorScheme="main" size="xl" py={3} px={8}>
                    Revender
                  </Button>
                  <Button
                    colorScheme="main"
                    size="xl"
                    py={3}
                    px={8}
                    variant="outline"
                    color={colors.mainColor}
                    onClick={onOpenModalTransferir}
                  >
                    Transferir
                  </Button>
                </HStack>
              </VStack>
              <Divider inset my={6} />
              <VStack spacing={1}>
                <Box bg="black" w="300px" roundedTop={20}>
                  <Center>
                    <TbArrowsDownUp color="white" />
                    <Text p={2} fontSize="sm">
                      Historial del ticket
                    </Text>
                  </Center>
                </Box>
                {ticket?.history.map((h, index) => (
                  <Box
                    bg="#121212"
                    w="300px"
                    rounded={2}
                    roundedBottom={
                      index + 1 === ticket?.history?.length ? 20 : 2
                    }
                    py={4}
                    key={h?.type + h?.date}
                  >
                    <HStack spacing={0} mx={8}>
                      {h.type === "CREADO" && (
                        <AiOutlinePlus color={colors.mainColor} />
                      )}
                      {h.type === "REVENTA" && (
                        <MdSell color={colors.mainColor} />
                      )}
                      {h.type === "TRANSFERENCIA" && (
                        <BiTransfer color={colors.mainColor} />
                      )}
                      <Text p={1} fontSize="xs" color={colors.mainColor}>
                        {h.type}
                      </Text>
                    </HStack>
                    <HStack spacing={0} mx={8}>
                      <Text p={1} fontSize="xs">
                        DESDE:
                      </Text>
                      <Text p={1} fontSize="xs">
                        {h.from}
                      </Text>
                    </HStack>
                    <HStack spacing={0} mx={8}>
                      <Text p={1} fontSize="xs">
                        HACIA:
                      </Text>
                      <Text p={1} fontSize="xs">
                        {h.to}
                      </Text>
                    </HStack>
                    <HStack spacing={0} mx={8}>
                      <Text p={1} fontSize="xs">
                        FECHA:
                      </Text>
                      <Text p={1} fontSize="xs">
                        {h.date.toLocaleString()}
                      </Text>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Box>
          </VStack>
        </>
      )}
    </>
  );
};
