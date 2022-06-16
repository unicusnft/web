import {Toolbar} from "../../components/Toolbar";
import {
    Box,
    Button, Center,
    Divider, Flex,
    HStack,
    Image,
    Radio,
    RadioGroup,
    Stack,
    Text,
    useNumberInput,
    VStack
} from "@chakra-ui/react";
import Duki1 from "../../img/Duki1.png"
import Duki2 from "../../img/Duki2.png"
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

const TicketsNFT = () => {
    return (
        <HStack my={4}>
            <Box
                w={['200px', '250px', '350px']}
                h={['250px', '350px', '450px']}
                rounded={40}
                color='white'
                boxShadow='dark-xs'
            >
                <Image src={Duki1} alt="Ticket photo" rounded={40}/>
            </Box>
            <Box
                w={['200px', '250px', '350px']}
                h={['250px', '350px', '450px']}
                rounded={40}
                color='white'
                boxShadow='dark-xs'
                style={{transform: 'rotate(15deg)'}}
            >
                <Image
                    src={Duki2}
                    alt="Ticket photo"
                    rounded={40}
                    marginLeft={['-72px', '-100px', '-132px']}
                    marginTop={['22px', '38px', '50px']}
                />
            </Box>
        </HStack>
    )
}

const tiers = [
    {
        label: 'Tier S - Front Line',
        price: '25000'
    },
    {
        label: 'Tier A - Stalls from 1-50 Lines',
        price: '20000'
    },
    {
        label: 'Tier B - Stalls from 50-100 Lines',
        price: '16000'
    },
    {
        label: 'Tier C - General with Sits',
        price: '12000'
    },
    {
        label: 'Tier D - General Stand',
        price: '9500'
    }
]

const SelectTicketCard = () => {
    const [radio, setRadio] = React.useState(tiers?.[0]?.label)
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
            <Text fontSize='xs' color='gray'>Music</Text>
            <Text fontSize='4xl' sx={{fontWeight: 600}} mb={3}>Duki</Text>
            <HStack>
                <DateCard datetime={new Date(2022, 10, 12, 21, 0)} />
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
            <Divider my={6}/>
            <div>
                <div>Choose a Tier for your ticket</div>
                <RadioGroup onChange={setRadio} value={radio} defaultValue={tiers[0].label} my={2}>
                    <Stack spacing={0.5}>
                        {tiers.map(({label, price}) => (
                            <Radio key={label} colorScheme='main' value={label}>
                                <div className={`${label === radio ? 'purple-text' : ''}`} style={{paddingLeft: '5px'}}>
                                    {`${label} - $ ${price}`}
                                </div>
                            </Radio>
                        ))}
                    </Stack>
                </RadioGroup>
            </div>
            <HStack mt={6}>
                <div>Amount:</div>
                <Button {...dec} size='xs' variant='ghost' colorScheme='white'>{'<'}</Button>
                <div style={{minWidth: 20, textAlign: 'center'}}>{input?.value}</div>
                <Button {...inc} size='xs' variant='ghost' colorScheme='white'>{'>'}</Button>
            </HStack>
            <Flex mt={8} direction={{ base: 'column-reverse' }}>
                <Button colorScheme='main' size='xl' py={3} px={10}>BUY NOW</Button>
            </Flex>
        </Box>
    )
}

export const Buy = () => {
    let params = useParams();
    const [loading, setLoading] = useState(false)
    const [event, setEvent] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            await sleep(1500)
            setEvent(events.filter(t => t?.id === params?.eventId))
            setLoading(false)
        }

        fetchData()
    }, [])

    return (
        <>
            <Toolbar/>
            {loading ? (
                <Loading/>
            ) : (
                <div style={{ marginTop: '20px' }}>
                    <Center marginRight={['-72px', '-130px', '-182px']}>
                        <TicketsNFT/>
                    </Center>
                    <Center mt={5}>
                        <SelectTicketCard />
                    </Center>
                </div>
            )}
        </>
    )
}
