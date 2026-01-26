import api from "../../../api/api";

const init_volnteer_regisration = (payload) => {
  return api.post("/volnteer-registration", payload);
};

export default init_volnteer_regisration;
