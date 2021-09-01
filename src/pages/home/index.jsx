import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from 'react-redux';
import { AtMessage } from 'taro-ui';
import Load from '@/components/load';
import './index.scss';

@connect(({ home }) => ({
  data: home.data,
  page: home.page,
  completely: home.completely,
}))
class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'home/getList',
    });
  }
  dropChildren = () => <View>123123</View>;
  render() {
    return (
      <View className="index">
        <AtMessage />

        <Load
          enableBackToTop
          dropChildren={this.dropChildren}
          completely={this.props.completely}
          onDrop={() => {
            this.props.dispatch({
              type: 'home/update',
              payload: { completely: false },
            });
          }}
          onPull={() => {
            this.props.dispatch({
              type: 'home/update',
              payload: { completely: false },
            });
          }}
          onHandle={(type) => {
            if (type === 'drop') {
              this.props.dispatch({
                type: 'home/getList',
              });
            } else {
              this.props.dispatch({
                type: 'home/update',
                payload: { page: this.props.page++ },
              });
              this.props.dispatch({
                type: 'home/getPageList',
              });
            }
          }}
        >
          {this.props.data.map((item, index) => (
            <View key={index} className="load-item">
              <View>{item.price}</View>

              <View>{item.company}</View>
              <View>{index}</View>
            </View>
          ))}
        </Load>
      </View>
    );
  }
}

export default Home;
