import api from "../../../api/api";

const subscribe = (payload) => {
  return api.post("/subscribe", payload);
};

export default subscribe;
