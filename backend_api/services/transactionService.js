const Transaction = require("../models/Transaction");

class TransactionService {
  async getTransactions({ customerId, accountNumber, description, page, limit }) {
    const query = {};
    if (customerId) query.CUSTOMER_ID = { $in: customerId.split(',') };
    if (accountNumber) query.ACCOUNT_NUMBER = { $in: accountNumber.split(',') };
    if (description) query.DESCRIPTION = new RegExp(description, 'i');

    const options = {
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 10
    }

    return Transaction.paginate(query, options);
  }

  async updateTransaction(id, updateData) {
    const transaction = await Transaction.findById(id);
    if (!transaction) throw new Error('Transaction not found!');

    const { description } = updateData;
    if (description) transaction.DESCRIPTION = description;

    return transaction.save();
  }
}

module.exports = new TransactionService();