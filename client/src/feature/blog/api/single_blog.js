import api from "../../../api/api";

const single_blog = (id) => {
  return api.get(`/get-blog/${id}`);
};

export default single_blog;
