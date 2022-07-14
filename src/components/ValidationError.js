import { Center, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { colors } from "../core/theme";

export const ValidationError = () => {
  return (
    <>
      <Center mt={10}>
        <Icon as={WarningTwoIcon} color={colors.error} />
        <Text marginLeft={5}>No pudimos validar la entrada</Text>
      </Center>
    </>
  );
};
