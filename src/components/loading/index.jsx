import React from 'react';
import Taro from '@tarojs/taro';
import { Text } from '@tarojs/components';
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
      return <Text className="loading-component">{icon}</Text>;
    }
    return <AtIcon className="loading-component" value={name} size={size} color={color} />;
  }
}

export default Loading;
