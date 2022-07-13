import {Box, HStack, Image} from "@chakra-ui/react";
import React from "react";

export const TicketsNFT = ({img1, img2}) => {
    return (
        <HStack my={4}>
            <Box
                w={['200px', '250px', '350px']}
                h={['250px', '350px', '450px']}
                rounded={40}
                color='white'
                boxShadow='dark-xs'
            >
                <Image
                    src={img1}
                    w={['200px', '250px', '350px']}
                    h={['250px', '350px', '450px']}
                    alt="Ticket photo"
                    rounded={40}
                    objectFit='cover'
                />
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
                    src={img2}
                    w={['200px', '250px', '350px']}
                    h={['250px', '350px', '450px']}
                    alt="Ticket photo"
                    rounded={40}
                    marginLeft={['-72px', '-100px', '-132px']}
                    marginTop={['25px', '38px', '50px']}
                    objectFit='cover'
                />
            </Box>
        </HStack>
    )
}
