import { Center, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { colors } from "../core/theme";

export const Validated = () => {
  return (
    <>
      <Center mt={10}>
        <Icon as={CheckIcon} color={colors.success} />
        <Text marginLeft={5}>Entrada validada !</Text>
      </Center>
    </>
  );
};
