import React from "react";
import { Avatar, Box, Text, Badge } from "@chakra-ui/react";

const BoxUsuario = ({ nombre, username, avatar, esAmigo }) => {
  return (
    <>
      <Avatar src={avatar} />
      <Box ml="3">
        <Text fontWeight="bold">
          {nombre}
          {esAmigo && (
            <Badge ml="1" colorScheme="purple">
              Amigo
            </Badge>
          )}
        </Text>
        <Text fontSize="sm" align="start">
          {username}
        </Text>
      </Box>
    </>
  );
};

export default BoxUsuario;
