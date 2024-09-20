const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const transactionSchema = new mongoose.Schema({
  ACCOUNT_NUMBER: { type: String, required: true },
  TRX_AMOUNT: { type: Number, required: true },
  DESCRIPTION: { type: String, required: true },
  TRX_DATE: { type: Date, required: true },
  TRX_TIME: { type: String, required: true },
  CUSTOMER_ID: { type: String, required: true },
}, { optimisticConcurrency: true });

transactionSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Transaction', transactionSchema, 'transaction_records');