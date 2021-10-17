const express = require('express');
const ProductModel = require('../models/productModel');
const { validateNewProductParams } = require('../middlewares/validateNewProduct');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const product = await ProductModel.getById(id);

  if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

  res.status(200).json(product);
});

router.post(
  '/',
  validateNewProductParams,
  async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);
    
    return res.status(201).json(newProduct);
  } catch {
    return res.status(500).json({
      message: 'Ocorreu um erro. Não foi possível adicionar o novo produto'
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const products = await ProductModel.exclude(id);
  
    return res.status(200).json(products);
  } catch {
    return res.status(500).json({
      message: 'Ocorreu um erro. Não foi possível apagar o produto'
    });
  }
});

router.put(
  '/:id',
  validateNewProductParams,
  async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await ProductModel.update(req.params.id, name, brand);
  
    return res.status(200).json(products);
  } catch {
    return res.status(500).json({
      message: 'Ocorreu um erro. Não foi possível atualizar o produto'
    });
  }
});

module.exports = router;
