import { get, post } from "./Api";
import {
  TRAER_EVENTOS,
  TRAER_USERS,
  TRAER_NFTS_DE_USER,
  TRAER_EVENTO_BY_ID,
  TRAER_TICKET_BY_ID,
  TRAER_NFT_BY_ID,
  TRANSFER_NFT,
  RESALE_NFT,
} from "./Utils";

// eventos
export const traer_eventos = async () => {
  const eventos = await get(TRAER_EVENTOS, {});

  return eventos;
};

export const traer_evento = async (event_id) => {
  const evento = await get(
    TRAER_EVENTO_BY_ID.replace("{event_id}", event_id),
    {}
  );

  return evento;
};

//users
export const traer_usuarios = async () => {
  const users = await get(TRAER_USERS, {});

  return users;
};

export const traer_tickets_user = async (id) => {
  const tickets = await get(TRAER_NFTS_DE_USER.replace("{user_id}", id), {});
  return tickets;
};

// ticket

export const comprar_ticket = async (user_id, ticket_id) => {
  const ticket = await post(`user/${user_id}/purchase/${ticket_id}`, {});

  return ticket;
};

export const traer_ticket = async (ticket_id) => {
  const ticket = await get(
    TRAER_TICKET_BY_ID.replace("{ticket_id}", ticket_id),
    {}
  );

  return ticket;
};

// nft
export const traer_nft = async (nft_id) => {
  const evento = await get(TRAER_NFT_BY_ID.replace("{nft_id}", nft_id), {});

  return evento;
};

export const transferir_nft = async (nft_id, user_id) => {
  await get(
    TRANSFER_NFT.replace("{nft_id}", nft_id).replace("{user_id}", user_id),
    {}
  );
};

export const resaleTicket = async (nft_id) => {
  await post(RESALE_NFT.replace("{nft_id}", nft_id), {});
};
