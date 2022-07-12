import { get, post } from "./Api";
import { TRAER_EVENTOS, TRAER_NFTS_DE_USER, TRAER_TICKETS } from "./Utils";

export const traer_eventos = async () => {
  const eventos = get(TRAER_EVENTOS, {});

  return eventos;
};

export const traer_evento = async (id) => {
  const evento = get(`event/${id}`, {});

  return evento;
};

export const comprar_ticket = async (user_id, ticket_id) => {
  const ticket = post(`user/${user_id}/purchase/${ticket_id}`, {});

  return ticket;
};
