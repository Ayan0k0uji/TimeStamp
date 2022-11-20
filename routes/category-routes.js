// роуты для категорий

const express = require('express');
const { createCategory, deleteCategory } = require('../controllers/category-controller');

const router = express.Router();
const jsonParcer = express.json();

router.post('/categories', jsonParcer, createCategory);
router.delete('/categories/:id_category', jsonParcer, deleteCategory);

module.exports = router;