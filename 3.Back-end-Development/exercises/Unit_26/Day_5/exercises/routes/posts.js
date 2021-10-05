const express = require('express');
const rescue = require('express-rescue');
const pageNotFound = require('../middlewares/pageNotFound');

const router = express.Router();

const posts = []

router.get(
  '/',
  rescue((_req, res) => {
  if (posts.length === 0) return res.status(200).json({ "posts": [] })

  res.status(200).json(posts);
}));

router.get(
  '/:id',
  rescue((req, res) => {
  const { id } = req.params;
  const findPost = posts.find((post) => post.id === parseInt(id));

  if (!id || !findPost) {
    return res.status(404).json({ "message": "post not found" });
  };

  res.status(200).json(findPost);
}));

router.use('*', (_req, _res, next) => {
  const error = { statusCode: 404, message: "Opsss, route not found!" };

  next(error);
});

router.use(pageNotFound);

module.exports = router;
