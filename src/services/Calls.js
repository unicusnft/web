import { get } from "./Api";
import {
  TRAER_EVENTOS,
  TRAER_USERS,
  TRAER_NFTS_DE_USER,
  TRAER_NFT_BY_ID,
} from "./Utils";

// eventos
export const traer_eventos = async () => {
  const eventos = get(TRAER_EVENTOS, {});

  return eventos;
};

//users
export const traer_usuarios = async () => {
  const users = get(TRAER_USERS, {});

  return users;
};

export const traer_tickets_user = async (id) => {
  const tickets = get(TRAER_NFTS_DE_USER.replace("{user_id}", id), {});
  return tickets;
};

// nft
export const traer_nft = async (nft_id) => {
  const evento = get(TRAER_NFT_BY_ID.replace("{nft_id}", nft_id), {});

  return evento;
};
