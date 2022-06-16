import {useParams} from "react-router-dom";
import {Box, Button, Center, Divider, HStack, Image, Stack, Text, VStack} from "@chakra-ui/react";
import Duki1 from "../../img/Duki1.png";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import tikTok from "../../img/tik_tok.png";
import twitter from "../../img/twitter.png";
import whatsapp from "../../img/whatsapp.png";
import React from "react";
import {Toolbar} from "../../components/Toolbar";
import {colors} from "../../core/theme";
import {DateCard} from "../../components/DateCard";
import {GoLocation} from "react-icons/go";
import {AiOutlineClockCircle} from "react-icons/ai";
import {TbArrowsDownUp} from "react-icons/tb";
import {AiOutlinePlus} from "react-icons/ai";
import {BiTransfer} from "react-icons/bi";
import {MdSell} from "react-icons/md";


const SocialMediaButton = ({img, alt}) => {
    return (
        <div onClick={() => console.log(alt)} style={{cursor: 'pointer'}}>
            <Image src={img} alt={alt}/>
        </div>
    )
}

const history = [
    {
        type: "TRANSFER",
        from: "Juan Pablo R.",
        to: "Javier Di Santo",
        date: new Date(2022, 3, 9, 14, 20, 0)
    },
    {
        type: "RESELL",
        from: "Camila Dvorkin",
        to: "Juan Pablo R.",
        date: new Date(2022, 3, 9, 14, 15, 0)
    },
    {
        type: "MINTED",
        from: "-",
        to: "Camila Dvorkin",
        date: new Date(2022, 3, 9, 14, 9, 0)
    }
]

export const Ticket = () => {
    let params = useParams();
    return (
        <>
            <Toolbar/>
            <VStack py={5} spacing={5}>
                <div>
                    <Text fontSize='xl' sx={{fontWeight: 600}}>
                        Ticket for
                    </Text>
                    <Center>
                        <Text fontSize='4xl' sx={{fontWeight: 700}} color={colors.mainColor}>
                            Duki
                        </Text>
                    </Center>
                </div>
                <Box
                    w={['300px', '350px']}
                    rounded={40}
                    color='white'
                    boxShadow='dark-xs'
                    objectFit='cover'
                >
                    <Image src={Duki1} alt="Ticket photo" rounded={40}/>
                    <Center mb={5}>
                        <HStack spacing={0}>
                            <SocialMediaButton img={facebook} alt='facebook'/>
                            <SocialMediaButton img={instagram} alt='instagram'/>
                            <SocialMediaButton img={tikTok} alt='tik tok'/>
                            <SocialMediaButton img={twitter} alt='twitter'/>
                            <SocialMediaButton img={whatsapp} alt='whatsapp'/>
                        </HStack>
                    </Center>
                </Box>
                <Box
                    w={['300px', '350px']}
                    rounded={40}
                    color='white'
                    boxShadow='dark-xs'
                    bg={colors.backgroundComponent}
                    py={6}
                >
                    <VStack spacing={5}>
                        <Text fontSize='3xl' sx={{fontWeight: 600}}>
                            NFT#{params?.ticketId}
                        </Text>
                        <HStack>
                            <DateCard datetime={new Date(2022, 10, 12, 21, 0)}/>
                            <VStack alignItems="left">
                                <HStack>
                                    <GoLocation/>
                                    <Text fontSize='xs'>Estadio Vélez Sarsfield</Text>
                                </HStack>
                                <HStack>
                                    <AiOutlineClockCircle/>
                                    <Text fontSize='xs'>21:00</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                        <Text px={4} fontSize='sm' textAlign='center'>
                            You can transfer this item <br/>
                            as many times as you want!
                        </Text>
                        <Button colorScheme='main' size='xl' py={3} px={10}>
                            Resell
                        </Button>
                    </VStack>
                    <Divider inset my={6}/>
                    <VStack spacing={1}>
                        <Box bg='black' w={['250px', '300px']} roundedTop={20}>
                            <Center>
                                <TbArrowsDownUp color='white'/>
                                <Text p={2} fontSize='sm'>Item Activity</Text>
                            </Center>
                        </Box>
                        {history.map((h, index) => (
                            <Box
                                bg='#121212'
                                w={['250px', '300px']}
                                rounded={2}
                                roundedBottom={((index + 1) === history?.length) ? 20 : 2}
                                py={4}
                                key={h?.type + h?.date}
                            >
                                <HStack spacing={0} mx={8}>
                                    {h.type === 'MINTED' && <AiOutlinePlus color={colors.mainColor} />}
                                    {h.type === 'RESELL' && <MdSell color={colors.mainColor} />}
                                    {h.type === 'TRANSFER' && <BiTransfer color={colors.mainColor} />}
                                    <Text p={1} fontSize='xs' color={colors.mainColor}>
                                        {h.type}
                                    </Text>
                                </HStack>
                                <HStack spacing={0} mx={8}>
                                    <Text p={1} fontSize='xs'>
                                        FROM:
                                    </Text>
                                    <Text p={1} fontSize='xs'>
                                        {h.from}
                                    </Text>
                                </HStack>
                                <HStack spacing={0} mx={8}>
                                    <Text p={1} fontSize='xs'>
                                        TO:
                                    </Text>
                                    <Text p={1} fontSize='xs'>
                                        {h.to}
                                    </Text>
                                </HStack>
                                <HStack spacing={0} mx={8}>
                                    <Text p={1} fontSize='xs'>
                                        Date:
                                    </Text>
                                    <Text p={1} fontSize='xs'>
                                        {h.date.toLocaleString()}
                                    </Text>
                                </HStack>
                            </Box>
                        ))}
                    </VStack>
                </Box>
            </VStack>
        </>
    )
}