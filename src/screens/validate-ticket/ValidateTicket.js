import React, { useEffect, useState } from "react";
import { VStack, Button } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { Toolbar } from "../../components/Toolbar";
import { QrReader } from "react-qr-reader";
import { ModalValidateTicket } from "../../components/Modals/ModalValidateTicket";
import { validateTicket } from "../../services/Calls";
import { colors } from "../../core/theme";

export const ValidateTicket = () => {
  const { eventId } = useParams();
  const [data, setData] = useState("No result");
  const [askforValidation, setAskForValidation] = useState(false);

  const validate = () => {
    validateTicket(data).then(() => {
      setAskForValidation(false);
    });
  };

  useEffect(() => {
    if (data !== "No result") {
      setAskForValidation(true);
    }
  }, [data]);

  return (
    <>
      <Toolbar />
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }
          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%", height: "100%" }}
      />
      <VStack w="100%">
        <Link to={`/event/${eventId}`}>
          <Button
            colorScheme="main"
            size="xl"
            py={3}
            px={10}
            variant="outline"
            color={colors.mainColor}
            w="100%"
          >
            Volver al evento
          </Button>
        </Link>
      </VStack>
      <ModalValidateTicket
        isOpen={askforValidation}
        onClose={() => {
          setAskForValidation(false);
          setData("No result");
        }}
        onValidation={validate}
      />
    </>
  );
};
