import {get, patch, post} from "./Api";
import {
  TRAER_EVENTO_BY_ID,
  TRAER_EVENTOS,
  TRAER_NFT_BY_ID,
  TRAER_NFTS_DE_USER,
  TRAER_TICKET_BY_ID,
  TRAER_USERS,
} from "./Utils";

// eventos
export const traer_eventos = async () => {
  return get(TRAER_EVENTOS, {});
};

export const traer_evento = async (event_id) => {
  return get(TRAER_EVENTO_BY_ID.replace("{event_id}", event_id), {});
};

export const newEvent = async (payload) =>  {
  return post('event', payload)
}

export const editEvent = async (id, payload) =>  {
  return patch(`event/${id}`, payload)
}

//users
export const traer_usuarios = async () => {
  return get(TRAER_USERS, {});
};

export const traer_tickets_user = async (id) => {
  return get(TRAER_NFTS_DE_USER.replace("{user_id}", id), {});
};

// ticket

export const comprar_ticket = async (user_id, ticket_id) => {
  return post(`user/${user_id}/purchase/${ticket_id}`, {});
};

export const traer_ticket = async (ticket_id) => {
  return get(TRAER_TICKET_BY_ID.replace("{ticket_id}", ticket_id), {});
};

// nft
export const traer_nft = async (nft_id) => {
  return get(TRAER_NFT_BY_ID.replace("{nft_id}", nft_id), {});
};
