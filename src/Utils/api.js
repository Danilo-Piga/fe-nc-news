import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-nbi4.onrender.com/api",
});

function fetchArticles() {
  return articlesApi.get("/articles").then((res) => {
    return res.data;
  });
}

function fetchTopics() {
  return articlesApi.get("/topics").then((res) => {
    return res.data;
  });
}

function fetchArticlesByTopic(topic) {
  return articlesApi.get(`/articles?topic=${topic}`).then(({ data }) => {
    return data.articles.filter((articles) => {
      return articles.topic === topic;
    });
  });
}

function fetchSingleArticle(article_id) {
  return articlesApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
}

function fetchCommentsByArticle(article_id) {
  return articlesApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
}

function postComment(username, body, article_id) {
  const postBody = {
    username: username,
    body: body,
  };
  return articlesApi
    .post(`/articles/${article_id}/comments`, postBody)
    .then((res) => {
      return res.data;
    });
}

function incrementVotes(article_id) {
  return articlesApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((res) => {
      return res.data;
    });
}

function decrementVotes(article_id) {
  return articlesApi
    .patch(`/articles/${article_id}`, { inc_votes: -1 })
    .then((res) => {
      return res.data;
    });
}

function fetchUsers() {
  return articlesApi.get("/users").then((res) => {
    return res.data;
  });
}

export {
  fetchArticles,
  fetchTopics,
  fetchSingleArticle,
  fetchCommentsByArticle,
  fetchUsers,
  postComment,
  incrementVotes,
  decrementVotes,
  fetchArticlesByTopic,
};
