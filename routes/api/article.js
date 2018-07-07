// * `/api/articles` (get) - your components will use this to query MongoDB for all saved articles

// * `/api/articles` (post) - your components will use this to save an article to the database

// * `/api/articles` (delete) - your components will use this to delete a saved article in the database
const router = require('express').Router(),
      articlesController = require('../../controllers/articlesController');

router.route('/')
  .get(articlesController.findAll)
  .post(articlesController.create)    

router.route('/:id')
  .delete(articlesController.remove)

module.exports = router;