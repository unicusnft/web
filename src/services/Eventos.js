import { get } from "./Api";
import { TRAER_EVENTOS } from "./Utils";

export const traer_eventos = async () => {
  const eventos = get(TRAER_EVENTOS, {});

  return eventos;
};
