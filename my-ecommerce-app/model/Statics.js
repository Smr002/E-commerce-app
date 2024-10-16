const mongoose = require('mongoose');

const staticsSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sales: Number,
  sale_time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Statics', staticsSchema);
