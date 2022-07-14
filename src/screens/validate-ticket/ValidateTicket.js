import React, { useEffect, useState } from "react";
import { VStack, Button } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { Toolbar } from "../../components/Toolbar";
import { QrReader } from "react-qr-reader";
import { ModalValidateTicket } from "../../components/Modals/ModalValidateTicket";
import { validateTicket } from "../../services/Calls";
import { colors } from "../../core/theme";

const NO_RESULT = "No result";

export const ValidateTicket = () => {
  const { eventId } = useParams();
  const [data, setData] = useState(NO_RESULT);
  const [askforValidation, setAskForValidation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const validate = () => {
    setIsLoading(true);
    validateTicket(data)
      .then(() => {
        setIsValidated(true);
        setIsLoading(false);
        setTimeout(() => {
          setAskForValidation(false);
          setIsValidated(false);
        }, 3000);
      })
      .catch(() => {
        setValidationError(true);
        setIsLoading(false);
        setTimeout(() => {
          setAskForValidation(false);
          setValidationError(false);
        }, 3000);
      })
      .finally(() => setData(NO_RESULT));
  };

  useEffect(() => {
    if (!askforValidation) {
      setData(NO_RESULT);
      setIsLoading(false);
      setIsValidated(false);
      setValidationError(false);
    }
  }, [askforValidation]);

  useEffect(() => {
    if (data !== NO_RESULT && data.includes("unicus")) {
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
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
        containerStyle={{
          borderColor: colors.mainColor,
          borderWidth: 1,
          marginTop: 30,
          marginLeft: 20,
          marginRight: 20,
        }}
        constraints={{ facingMode: "environment" }}
      />
      <VStack w="100%" marginTop={10}>
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
          setData(NO_RESULT);
          setIsValidated(false);
          setValidationError(false);
          setAskForValidation(false);
        }}
        onValidation={validate}
        isLoading={isLoading}
        isValidated={isValidated}
        validationError={validationError}
      />
    </>
  );
};
