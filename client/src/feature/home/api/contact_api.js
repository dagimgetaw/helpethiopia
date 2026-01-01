import api from "../../../api/api";

const init_message = (payload) => {
  return api.post("/send-message", payload);
};

export default init_message;
