import React from "react";
import { Avatar, Box, Text, Badge } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { colors } from "../../core/theme";

const BoxUsuario = ({
  full_name: name,
  username,
  profile_image_url: avatar,
  esAmigo,
  isSuccess,
}) => {
  return (
    <>
      <Avatar src={avatar} />
      <Box ml="3" width="100%">
        <Text fontWeight="bold" align="start">
          {name}
          {esAmigo && (
            <Badge ml="1" colorScheme="purple">
              Amigo
            </Badge>
          )}
        </Text>
        <Text fontSize="sm" display="flex" justifyContent="space-between">
          {username}
          {isSuccess && <CheckIcon color={colors.success} boxSize={5} />}
        </Text>
      </Box>
    </>
  );
};

export default BoxUsuario;
