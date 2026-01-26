import api from "../../../api/api";

const init_stripe_payment = (payload) => {
  return api.post("/stripe/initialize", payload);
};

export default init_stripe_payment;
