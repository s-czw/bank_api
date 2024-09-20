const { generateToken } = require("../utils/authUtils");

class AuthController {
  async authenticate(req, res) {
    try {
      const { apiKey } = req.body;
      // check and verify API key
      if (process.env.API_KEY !== apiKey) {
        return res.status(401).json({ error: 'Invalid credentials!' });
      }
      return res.status(200).json({ token: generateToken(apiKey) });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new AuthController();