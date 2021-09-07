# upFile  上传组件 
上传图片视频的组件

# 基础示例
```js
import UpFile from '@/components/upFile';

const demo = ()=>{
  return <UpFile />
}
```   

#  Props
```js
/**
 * props
 * @param {*} type=['image'] type=['image']=上传图片 type=['video']=上传视频 type=['image','video']=上传图片视频
 * @param {*} sourceType=['album', 'camera']  album=相册选	camera=相机拍
 * @param {*} success 成功的回调函数 可以不写, 但是写的时候需要返回一个成功的数组 类型[{path: '',size: }]至少要有path, video, size, type
 * @param {*} fail 失败的回调函数
 * @param {*} complete 成功 失败的都会执行
 * @param {*} uploadFile 上传到服务器的方法
 * @param {*} limit 限制可上传数量
 * @param {*} style 容器样式，默认 Grid 布局
 * @param {*} data 渲染的数组
 * @param {*} deleteChange 点击删除时触法
 */
/**
 * type.includes('image')
 * @param {*} count=9  最多可以选择的图片张数
 * @param {*} sizeType=['original', 'compressed']  original=原图	compressed=压缩图
 */
/**
 * type.includes('video')
 * @param {*} compressed=true  是否压缩所选择的视频文件
 * @param {*} maxDuration=60  拍摄视频最长拍摄时间，单位秒
 * @param {*} camera='back'  默认拉起的是前置或者后置摄像头 front=前 back=后
 */
```