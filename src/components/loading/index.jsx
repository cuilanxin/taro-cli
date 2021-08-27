import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './index.scss';

class Loading extends Taro.PureComponent {
  render() {
    const { name = 'loading-2', size = 30, color = '#aaa', icon } = this.props;
    if (icon) {
      return <View className="loading-component">{icon}</View>;
    }
    return (
      <View className="loading-component">
        <AtIcon value={name} size={size} color={color} />
      </View>
    );
  }
}

export default Loading;
