import express from 'express';
const router = express.Router();
import upload from '../config/multer.config.js';
import productModel from '../models/product.model.js';

router.post('/create', upload.single('image'), async (req, res) => {
  try {
    const { itemname, price, discount, bgcolor, panelcolor, textcolor } = req.body;

    await productModel.create({
      image: req.file.buffer,
      itemname,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
    });

    req.flash('success', 'Product created successfully');
    res.redirect('/admin');
  } catch (e) {
    console.error('Error:', e.message);
    req.flash('error', 'Failed to create product');
    res.redirect('/admin');
  }
});

export default router;
