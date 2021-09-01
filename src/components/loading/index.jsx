import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './index.scss';

class Loading extends React.PureComponent {
  static defaultProps = {
    name: 'loading-2',
    size: 30,
    color: '#aaa',
    icon: undefined,
  };
  render() {
    const { name, size, color, icon } = this.props;
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
