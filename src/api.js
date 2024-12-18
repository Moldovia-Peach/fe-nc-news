import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-zyxm.onrender.com/api",
});

export const getArticleById = (article_id) => {
  return api
    .get(`/articles/${article_id}`)
    .then((response) => response.data.article);
};

export const getCommentsByArticleId = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then((response) => response.data.comments);
};

export const updateArticleVotes = (article_id, inc_votes) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((response) => response.data.article);
};
