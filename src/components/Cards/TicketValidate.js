import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Image, Text } from "@chakra-ui/react";
import { BASE_URL, VALIDATE_NFT } from "../../services/Utils";
import "../../styles/card.css";
import { colors } from "../../core/theme";

const TicketValidate = ({ nftId, urlImage }) => {
  const [qr, setQr] = useState("");

  useEffect(() => {
    QRCode.toDataURL(
      `${BASE_URL}/${VALIDATE_NFT.replace("{nft_id}", nftId)}`,
      (err, url) => {
        if (!err) {
          setQr(url);
        }
      }
    );
  }, [nftId]);

  return (
    <div className="flip-card">
      <input type="checkbox" id="flipper" />
      <label htmlFor="flipper" className="flip-label-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Image
              src={urlImage}
              alt="Ticket photo"
              w="350px"
              h="400px"
              objectFit="cover"
              rounded={40}
            />
          </div>
          <div className="flip-card-back">
            <div
              className="img-container-back"
              style={{ border: "3px solid " + colors.mainColor }}
            >
              <Image
                src={urlImage}
                alt="Ticket photo"
                w="350px"
                h="400px"
                objectFit="cover"
                rounded={40}
                filter="blur(3px)"
              />
            </div>

            <Image
              src={qr}
              alt="Ticket QR"
              objectFit="cover"
              rounded={40}
              style={{ position: "absolute" }}
              mb="125px"
            />
            <Text
              fontSize="2xl"
              mb="25px"
              style={{ position: "absolute" }}
              as="strong"
            >
              Escaneá el código para ingresar al evento!
            </Text>
          </div>
        </div>
      </label>
    </div>
  );
};

export default TicketValidate;
