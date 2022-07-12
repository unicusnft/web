import { get } from "./Api";
import {
  TRAER_EVENTOS,
  TRAER_USERS,
  TRAER_NFTS_DE_USER,
  TRAER_EVENTO_BY_ID,
} from "./Utils";

// eventos
export const traer_eventos = async () => {
  const eventos = get(TRAER_EVENTOS, {});

  return eventos;
};

export const traer_evento = async (event_id) => {
  const evento = get(TRAER_EVENTO_BY_ID.replace("{event_id}", event_id), {});

  return evento;
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
