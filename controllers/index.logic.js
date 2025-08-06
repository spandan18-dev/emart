import productModel from '../models/product.model.js';

const logsinpge = (req, res) => {
  const error = req.flash('error');
  const success = req.flash('success');
  const msg = req.flash("msg")
  res.render('index', { error, success, msg });
};

const shoplogic = async (req, res) => {
  try {
    const products = await productModel.find();
    const error = req.flash('error');
    const success = req.flash('success');
    const msg = req.flash('msg');
    res.render('shop', { products, error, success , msg});
  } catch (err) {
    console.error('Shoplogic Error:', err);
    req.flash('error', 'Something went wrong');
    res.redirect('/');
  }
};

export { logsinpge, shoplogic };
