const proxy = {
  'POST /api/home/list': (req, res) => {
    const { usertoken } = req.headers;
    if (usertoken) {
      let arr = [];
      let r = 20;
      const series = ['国一', '国二', '国三', '国四', '国五'];
      for (let i = 0; i <= r; i++) {
        let length = (Math.random() + '').charAt(3);

        arr.push({
          id: i,
          title: '首付0元, 2年以租代购',
          name: '江淮骏铃V5',
          length: length < 8 ? length * 2 + '米' : length + '米',
          oil: '柴油',
          series: series[i % series.length],
          price: (Math.random() * 1000 + '').substr(0, 3),
          company: '元/天',
        });
      }
      return res.json({
        status: 'ok',
        code: 1,
        data: arr,
      });
    } else {
      return res.status(403).json({
        code: -1,
        message: '清先登陆',
      });
    }
  },
  'POST /api/home/page': (req, res) => {
    const { usertoken } = req.headers;
    const { page } = req.body;
    if (usertoken) {
      if (page > 3) {
        return res.json({
          status: 'ok',
          code: -1,
          data: [],
          message: '没有数据了',
        });
      }
      let arr = [];
      let r = 10;
      const series = ['国一', '国二', '国三', '国四', '国五'];
      for (let i = 0; i <= r; i++) {
        let length = (Math.random() + '').charAt(3);
        arr.push({
          id: i,
          title: '首付0元, 2年以租代购',
          name: '江淮骏铃V5',
          length: length < 8 ? length * 2 + '米' : length + '米',
          oil: '柴油',
          series: series[i % series.length],
          price: (Math.random() * 1000 + '').substr(0, 3),
          company: '元/天',
        });
      }
      return res.json({
        status: 'ok',
        code: 1,
        data: arr,
      });
    } else {
      return res.status(403).json({
        code: -1,
        message: '清先登陆',
      });
    }
  },
};

module.exports = proxy;
