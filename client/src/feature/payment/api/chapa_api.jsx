import api from "../../../api/api";

const init_chapa_payment = (payload) => {
  return api.post("/chapa/initialize", payload);
};

export default init_chapa_payment;
