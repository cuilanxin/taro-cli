# loading  自定义旋转 loading
旋转子元素组件
# 基础示例
```js
import Loading from '@/components/loading';

const demo = ()=>{
  return <Loading />
}
```   

# 自定义icon
```js
import Loading from '@/components/loading';
import { AtIcon } from 'taro-ui';

const demo = ()=>{
  return <Loading icon={() => <AtIcon value="loading-2" size="30" color="#aaa" />} />
}
```


#  Props
```js
/**
 * name  选取 taro-ui 的 icon 名字
 * size  大小
 * color 颜色
 * icon  自定义元素
*/
```