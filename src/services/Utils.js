export const BASE_URL = "https://unicus-server-prod.herokuapp.com/v1";

// EVENTOS
export const CREAR_EVENTO = "event";
export const TRAER_EVENTOS = "event";
export const BORRAR_EVENTO = "event/{event_id}";
export const EDITAR_EVENTO = "event/{event_id}";
export const TRAER_EVENTO_BY_ID = "event/{event_id}";

// USER
export const CREAR_USER = "user";
export const TRAER_USERS = "user";
export const TRAER_USER_BY_ID = "user/{user_id}";
export const TRAER_NFTS_DE_USER = "user/{user_id}/nfts";
export const COMPRAR_NFT = "user/{user_id}/purchase/{ticket_id}";

// TICKET
export const CREAR_TICKET = "ticket";
export const TRAER_TICKETS = "ticket";
export const TRAER_TICKET_BY_ID = "ticket/{ticket_id}";

// NFT
export const TRAER_NFT_BY_ID = "nft/{nft_id}";
export const RESALE_NFT = "nft/{nft_id}/toggle-resale";
export const TRANSFER_NFT = "nft/{nft_id}/transfer/{user_id}";
