import { get, makeRequest, post, patch } from "./Api";
import {
  RESALE_NFT,
  TRAER_EVENTO_BY_ID,
  TRAER_EVENTOS,
  TRAER_NFT_BY_ID,
  TRAER_NFTS_DE_USER,
  TRAER_TICKET_BY_ID,
  TRAER_USERS,
  TRANSFER_NFT,
} from "./Utils";

// eventos
export const traer_eventos = async () => {
  return await get(TRAER_EVENTOS, {});
};

export const traer_evento = async (event_id) => {
  return await get(TRAER_EVENTO_BY_ID.replace("{event_id}", event_id), {});
};

export const fetchEventsFromUser = async (ownerId) => {
  return get(`event/owner/${ownerId}`);
};

export const newEvent = async (payload) => {
  return post("event", payload);
};

export const editEvent = async (id, payload) => {
  return patch(`event/${id}`, payload);
};

//users
export const traer_usuarios = async () => {
  return await get(TRAER_USERS, {});
};

export const traer_tickets_user = async (id) => {
  return await get(TRAER_NFTS_DE_USER.replace("{user_id}", id), {});
};

// ticket

export const comprar_ticket = async (user_id, ticket_id, cant = 1) => {
  const ticket = await post(`user/${user_id}/purchase/${ticket_id}`, {});
  for (let i = 0; i < cant - 1; i++) {
    await post(`user/${user_id}/purchase/${ticket_id}`, {});
  }

  return ticket;
};

export const traer_ticket = async (ticket_id) => {
  return await get(TRAER_TICKET_BY_ID.replace("{ticket_id}", ticket_id), {});
};

// nft
export const traer_nft = async (nft_id) => {
  return await get(TRAER_NFT_BY_ID.replace("{nft_id}", nft_id), {});
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

export const validateTicket = async (call) => {
  return await makeRequest(() => fetch(call, { method: "POST" }));
};
