import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Image } from "@chakra-ui/react";
import { BASE_URL, VALIDATE_NFT } from "../../services/Utils";
import "../../styles/card.css";

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
        <div className="flip-card-back" background={qr}>
          <Image src={qr} alt="Ticket QR" objectFit="cover" rounded={40} />
        </div>
      </div>
    </div>
  );
};

export default TicketValidate;
