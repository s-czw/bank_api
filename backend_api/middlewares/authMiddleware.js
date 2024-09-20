const { verifyToken } = require("../utils/authUtils");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied, no token provided.' });

  try {
    verifyToken(token);
    next();
  } catch (err) {
    return res.status(400).json({ error: 'Invalid token.' });
  }
}
