let code = '';
const regPhone = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
let codePhone = '';
const proxy = {
  'POST /api/user/login': (req, res) => {
    const { password, username, type } = req.body;
    const result = {
      status: 'ok',
      message: 'ok',
      code: 1,
      token: 'sdfsdfsdfdsf',
      data: {
        id: 1,
        username: 'kenny',
        sex: 1,
      },
    };
    if (type) {
      if (username === codePhone && code === password) {
        return res.json(result);
      }
      if (username !== codePhone) {
        return res.status(403).json({
          message: '账号尚未注册',
          code: 403,
        });
      }
      if (password !== code) {
        return res.status(403).json({
          message: '验证码不正确',
          code: 403,
        });
      }
    } else {
      if (password === 'admin' && username === 'admin') {
        return res.json(result);
      } else {
        return res.status(403).json({
          message: '账号尚未注册',
          code: 403,
        });
      }
    }
  },
  'POST /api/user/sendCode': (req, res) => {
    const { phoneValue } = req.body;
    if (regPhone.test(phoneValue)) {
      const str = [];
      for (let i = 0; i < 5; i++) {
        str.push((Math.random() + '').charAt(3));
      }
      code = str.join('');
      codePhone = phoneValue;
      return res.json({
        code: 1,
        codeValue: code,
      });
    } else {
      return res.status(403).json({
        code: -1,
        message: '手机号不正确',
      });
    }
  },
};

module.exports = proxy;
