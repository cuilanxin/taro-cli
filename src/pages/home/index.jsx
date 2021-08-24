import Taro from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({ login, loading }) => ({
  num: login.num,
  isLoad: loading.effects['login/handle'],
}))
class Home extends Taro.Component {
  config = {
    navigationBarTitleText: '首页',
  };

  // componentWillReceiveProps(nextProps) {
  //   // eslint-disable-next-line no-console
  //   console.log(this.props, nextProps);
  // }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handle = (val) => {
    this.props.dispatch({
      type: 'login/handle',
      payload: { num: val },
    });
  };
  render() {
    return (
      <View className="index">
        <Button
          className="add_btn"
          onClick={() => {
            this.handle(this.props.num + 1);
          }}
        >
          +
        </Button>
        <Button
          className="dec_btn"
          onClick={() => {
            this.handle(this.props.num - 1);
          }}
        >
          -
        </Button>
        <Button
          className="dec_btn"
          onClick={() => {
            this.props.dispatch({
              type: 'login/onLogin',
            });
            Taro.navigateTo({ url: '/pages/login/index' });
          }}
        >
          登陆
        </Button>
        <View>
          <Text>{this.props.num}</Text>
        </View>
        <View>
          <Text>Hello, World</Text>
        </View>
      </View>
    );
  }
}

export default Home;
