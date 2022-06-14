import {Toolbar} from "../../components/Toolbar";
import {
    Box,
    Button,
    Divider,
    HStack,
    Image,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Text,
    useNumberInput
} from "@chakra-ui/react";
import Duki1 from "../../img/Duki1.png"
import Duki2 from "../../img/Duki2.png"
import React from "react";
import {AiOutlineClockCircle} from "react-icons/ai";
import {GoLocation} from "react-icons/go";

const TicketsNFT = () => {
    return (
        <HStack my={4}>
            <Box
                w={['150px', '250px', '350px']}
                h={['250px', '350px', '450px']}
                rounded={40}
                color='white'
                boxShadow='dark-xs'
            >
                <Image src={Duki1} alt="Ticket photo" rounded={40} />
            </Box>
            <Box
                w={['150px', '250px', '350px']}
                h={['250px', '350px', '450px']}
                rounded={40}
                color='white'
                boxShadow='dark-xs'
                style={{ transform: 'rotate(15deg)' }}
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

const SelectTicketCard = () => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 20
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

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
    return (
        <Box
            bg="red"
            w={['300px', '400px', '600px']}
            rounded={20}
            color='white'
        >
            <div>Music</div>
            <div>Duki</div>
            <HStack spacing={5}>
                <HStack>
                    <GoLocation />
                    <Text>Estadio Vélez Sarsfield</Text>
                </HStack>
                <HStack>
                    <AiOutlineClockCircle />
                    <Text>21:00</Text>
                </HStack>
            </HStack>
            <Divider mx={5} />
            <div>
                <div>Choose a Tier for your ticket</div>
                <RadioGroup defaultValue={tiers[0].label}>
                    <Stack spacing={0}>
                        {tiers.map(({label, price}) => (
                            <Radio key={label} colorScheme='white' value={label}>
                                {`${label} - $ ${price}`}
                            </Radio>
                        ))}
                    </Stack>
                </RadioGroup>
            </div>
            <div>
                <HStack>
                    <div>Amount: </div>
                    <Button {...dec} size='xs' variant='ghost' colorScheme='white'>{'<'}</Button>
                    <div style={{ minWidth: 20, textAlign: 'center' }}>{input?.value}</div>
                    <Button {...inc} size='xs' variant='ghost' colorScheme='white'>{'>'}</Button>
                </HStack>
            </div>
        </Box>
    )
}

export const Buy = () => {
    return (
        <>
            <Toolbar/>
            <div>
                <TicketsNFT />
                <SelectTicketCard />
            </div>
        </>
    )
}
