import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-zyxm.onrender.com/api",
});

export const getArticles = ({
  sort_by = "created_at",
  order = "desc",
  topic,
}) => {
  return api
    .get("/articles", {
      params: { sort_by, order, topic },
    })
    .then((response) => response.data.articles)
    .catch((err) => {
      return err;
    });
};

export const getArticleById = (article_id) => {
  return api
    .get(`/articles/${article_id}`)
    .then((response) => response.data.article)
    .catch((err) => {
      return err;
    });
};

export const getCommentsByArticleId = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then((response) => response.data.comments)
    .catch((err) => {
      return err;
    });
};

export const updateArticleVotes = (article_id, inc_votes) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((response) => response.data.article)
    .catch((err) => {
      return err;
    });
};

export const getTopics = () => {
  return api
    .get("/topics")
    .then((response) => response.data.topics)
    .catch((err) => {
      return err;
    });
};

export const getArticlesByTopic = (topicSlug) => {
  return api
    .get(`/articles?topic=${topicSlug}`)
    .then((response) => response.data.articles)
    .catch((err) => {
      return err;
    });
};

export const getUsers = () => {
  return api
    .get("/users")
    .then((response) => response.data.users)
    .catch((err) => {
      return err;
    });
};

export const postComment = (article_id, username, body) => {
  return api
    .post(`/articles/${article_id}/comments`, { username, body })
    .then((response) => response.data.comment)
    .catch((err) => {
      return err;
    });
};

export const deleteComment = (comment_id) => {
  return api
    .delete(`/comments/${comment_id}`)
    .then(() => {
      return true;
    })
    .catch((err) => {
      return err;
    });
};
