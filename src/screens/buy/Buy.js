import {Toolbar} from "../../components/Toolbar";
import {
    Box,
    Button,
    Center,
    Divider,
    Flex,
    HStack,
    Radio,
    RadioGroup,
    Stack,
    Text,
    useNumberInput,
    VStack
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {AiOutlineClockCircle} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import './Buy.css'
import {DateCard} from "../../components/DateCard";
import {colors} from "../../core/theme";
import {useParams} from "react-router-dom";
import {sleep} from "../../utils/helpers";
import {events} from "../../data/events";
import {Loading} from "../../components/Loading";
import {TicketsNFT} from "../../components/TicketsNFT";


const SelectTicketCard = ({event}) => {
    const [radio, setRadio] = React.useState(event?.ticketTypes?.[0]?.label)
    const {getInputProps, getIncrementButtonProps, getDecrementButtonProps} =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 20
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
        <Box
            bg={colors.backgroundComponent}
            w={['350px', '400px', '500px']}
            rounded={20}
            p={6}
            color='white'
        >
            <Text fontSize='xs' color='gray'>{event?.type}</Text>
            <Text fontSize='4xl' sx={{fontWeight: 600}} mb={3}>{event?.title}</Text>
            <HStack>
                <DateCard datetime={event?.datetime}/>
                <VStack alignItems="left">
                    <HStack>
                        <GoLocation/>
                        <Text fontSize='xs'>{event?.location}</Text>
                    </HStack>
                    <HStack>
                        <AiOutlineClockCircle/>
                        <Text fontSize='xs'>{event?.datetime?.toLocaleTimeString('en-GB', {
                            hour: '2-digit',
                            minute: '2-digit',
                        })}</Text>
                    </HStack>
                </VStack>
            </HStack>
            <Divider my={6}/>
            <div>
                <div>Seleccioná el tipo de ticket</div>
                <RadioGroup onChange={setRadio} value={radio} defaultValue={event?.ticketTypes?.[0].label} my={2}>
                    <Stack spacing={0.5}>
                        {event?.ticketTypes?.map(({label, price}) => (
                            <Radio key={label} colorScheme='main' value={label}>
                                <Text
                                    noOfLines={2}
                                    className={`${label === radio ? 'purple-text' : ''}`}
                                    style={{paddingLeft: '5px'}}
                                >
                                    ${price} - {label}
                                </Text>
                            </Radio>
                        ))}
                    </Stack>
                </RadioGroup>
            </div>
            <HStack mt={6}>
                <div>Cantidad:</div>
                <Button {...dec} size='xs' variant='ghost' colorScheme='white'>{'<'}</Button>
                <div style={{minWidth: 20, textAlign: 'center'}}>{input?.value}</div>
                <Button {...inc} size='xs' variant='ghost' colorScheme='white'>{'>'}</Button>
            </HStack>
            <Flex mt={8} direction={{base: 'column-reverse'}}>
                <Button colorScheme='main' size='xl' py={3} px={10}>COMPRAR</Button>
            </Flex>
        </Box>
    )
}

export const Buy = () => {
    let params = useParams();
    const [loading, setLoading] = useState(true)
    const [event, setEvent] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            await sleep(1500)
            setEvent(events.filter(t => t?.id?.toString() === params?.eventId)?.[0])
            setLoading(false)
        }

        fetchData()
    }, [params?.eventId])

    return (
        <>
            <Toolbar/>
            {loading ? (
                <Loading/>
            ) : (
                <div style={{marginTop: '20px', overflowX: 'hidden'}}>
                    <Center marginRight={['-72px', '-130px', '-182px']}>
                        <TicketsNFT img1={event?.buyImage1} img2={event?.buyImage2}/>
                    </Center>
                    <Center mt={5}>
                        <SelectTicketCard event={event}/>
                    </Center>
                </div>
            )}
        </>
    )
}
