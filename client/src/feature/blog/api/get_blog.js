import api from "../../../api/api";

const get_blog = () => {
  return api.get("/get-blog");
};

export default get_blog;
