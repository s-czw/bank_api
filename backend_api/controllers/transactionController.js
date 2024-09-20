const transactionService = require("../services/transactionService");

class TransactionController {
  async getTransactions(req, res) {
    try {
      const { customerId, accountNumber, description, page, limit } = req.query;
      const transactions = await transactionService.getTransactions({ customerId, accountNumber, description, page, limit });
      return res.status(200).json(transactions);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async updateTransaction(req, res) {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updatedTransaction = await transactionService.updateTransaction(id, { description });
      return res.status(200).json(updatedTransaction);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new TransactionController();