const proxy = {
  'POST /api/user/login': (req, res) => {
    const { password, username } = req.body;
    if (password === 'admin' && username === 'admin') {
      return res.json({
        status: 'ok',
        code: 1,
        token: 'sdfsdfsdfdsf',
        data: {
          id: 1,
          username: 'kenny',
          sex: 1,
        },
      });
    } else {
      return res.status(403).json({
        status: 'error',
        code: 403,
      });
    }
  },
};
module.exports = proxy;
