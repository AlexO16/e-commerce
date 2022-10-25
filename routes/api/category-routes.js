const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCats = await Category.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(allCats)
  }
  catch (error) {
    res.status(400).json(error)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const allCatsId = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    res.status(200).json(allCatsId)
  }
  catch (error) {
    res.status(400).json(error)
  }
});

router.post('/', async (req, res) => {
  try {
    const newCat = await Category.create({
      category_name: req.body.category_name
    })
    res.status(200).json(newCat)
  }
  catch (error) {
    res.status(400).json(error)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateCat = await Category.update(req.body, {
      where: {id: req.params.id}
    });
    res.status(200).json(updateCat)
  }
  catch (error) {
    res.status(400).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteCat = await Category.destroy({
      where: {id: req.params.id}
    })
    res.status(200).json(deleteCat)
  }
  catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
