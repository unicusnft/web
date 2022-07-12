import { get, post } from "./Api";
import {
  TRAER_EVENTOS,
  TRAER_USERS,
  TRAER_NFTS_DE_USER,
  TRAER_EVENTO_BY_ID,
  TRAER_TICKET_BY_ID,
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

// ticket

export const comprar_ticket = async (user_id, ticket_id) => {
  const ticket = post(`user/${user_id}/purchase/${ticket_id}`, {});

  return ticket;
};

export const traer_ticket = async (ticket_id) => {
  const ticket = get(TRAER_TICKET_BY_ID.replace("{ticket_id}", ticket_id), {});

  return ticket;
};

// nft
export const traer_nft = async (nft_id) => {
  const evento = get(TRAER_NFT_BY_ID.replace("{nft_id}", nft_id), {});

  return evento;
};
